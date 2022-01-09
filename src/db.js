import '@/firebase'
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, where, Timestamp, orderBy, limit } from 'firebase/firestore'
import { nGram } from 'n-gram'

// init services
const db = getFirestore()

// collection reference
const colRef = collection(db, 'pets')

export function addPet (pet) {
  const ref = doc(colRef)
  pet.id = ref.id
  pet.createdAt = Timestamp.fromDate(new Date())
  let gram = []

  for (let i = 1; i <= pet.name.length; i++) {
    gram = [...gram, ...nGram(i)(pet.name)]
  }

  pet.gram = gram

  setDoc(doc(db, 'pets', pet.id), { ...pet })

  return pet.id
}

export async function getPet (id) {
  const docRef = doc(db, 'pets', id)
  const docSnap = await getDoc(docRef)
  const pet = docSnap.data()

  return pet
}

async function getPets (ref) {
  const snapshot = await getDocs(ref)
  const pets = []
  snapshot.docs.forEach(doc => pets.push({ ...doc.data() }))

  return pets
}

export async function getAllPets () {
  return getPets(colRef)
}

export async function getLastPets () {
  const q = query(colRef, orderBy('createdAt', 'desc'), limit(12))
  return await getPets(q)
}

export async function simpleSearchPets (keyword = '') {
  const q = query(colRef, where('gram', 'array-contains', keyword))
  return await getPets(q)
}

function getQuantifiedPetsMatches (arrays) {
  const quantifiedPetsMatches = {}

  function getQuantifiedPetsMatches (array) {
    array.forEach(pet => {
      const { id } = pet
      // eslint-disable-next-line no-prototype-builtins
      if (quantifiedPetsMatches.hasOwnProperty(id)) {
        quantifiedPetsMatches[id].matches++
      } else {
        quantifiedPetsMatches[id] = {}
        quantifiedPetsMatches[id].matches = 1
        quantifiedPetsMatches[id].value = pet
      }
    })
  }

  arrays.forEach(array => getQuantifiedPetsMatches(array))

  return quantifiedPetsMatches
}

export async function searchPets (keyword, speciesKeyword, sexKeyword, sizeKeyword) {
  const species = speciesKeyword.length > 0 ? speciesKeyword : ['Perro', 'Gato']
  const sex = sexKeyword.length > 0 ? sexKeyword : ['Macho', 'Hembra']
  const size = sizeKeyword.length > 0 ? sizeKeyword : ['Pequeño', 'Mediano', 'Grande']

  const qName = query(colRef, where('gram', 'array-contains', keyword))
  const qSpecies = query(colRef, where('species', 'in', species))
  const qSex = query(colRef, where('sex', 'in', sex))
  const qSize = query(colRef, where('size', 'in', size))

  const nameResults = await getPets(qName)
  const speciesResults = await getPets(qSpecies)
  const sexResults = await getPets(qSex)
  const sizeResults = await getPets(qSize)

  const quantifiedPetsMatches = getQuantifiedPetsMatches([nameResults, speciesResults, sexResults, sizeResults])
  const petMatches = Object.values(quantifiedPetsMatches).filter(pet => pet.matches === 4).map(pet => pet.value)

  return petMatches
}

export default db
