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

export async function searchPets (keyword = '', speciesKeyword = ['Gato', 'Perro'], sexKeyword = ['Macho'], sizeKeyword = ['Pequeño']) {
  const species = speciesKeyword || ['Perro', 'Gato']
  const sex = sexKeyword || ['Macho', 'Hembra']
  const size = sizeKeyword || ['Pequeño', 'Mediano', 'Grande']

  const qName = query(colRef, where('gram', 'array-contains', keyword))
  const qSpecies = query(colRef, where('species', 'in', species))
  const qSex = query(colRef, where('sex', 'in', sex))
  const qSize = query(colRef, where('size', 'in', size))

  const nameResults = await getPets(qName)
  const speciesResults = await getPets(qSpecies)
  const sexResults = await getPets(qSex)
  const sizeResults = await getPets(qSize)

  const namesNameResults = nameResults.map(pet => pet.id)
  const speciesNameResults = speciesResults.map(pet => pet.id)
  const sexNameResults = sexResults.map(pet => pet.id)
  const sizeNameResults = sizeResults.map(pet => pet.id)

  const quantity = {}

  function looper (array) {
    array.forEach(name => {
      // eslint-disable-next-line no-prototype-builtins
      if (quantity.hasOwnProperty(name)) {
        quantity[name]++
      } else {
        quantity[name] = 1
      }
    })
  }

  looper(namesNameResults)
  looper(speciesNameResults)
  looper(sexNameResults)
  looper(sizeNameResults)

  console.log('🚀 ~ file: db.js ~ line 79 ~ searchPets ~ quantity', quantity)

  const filteredNames = Object.entries(quantity).filter(pet => pet[1] === 4).map(pet => pet[0])

  const filteredPets = []

  filteredNames.forEach(id => {
    filteredPets.push(nameResults.filter(pet => pet.id === id)[0])
  })
  console.log('🚀 ~ file: db.js ~ line 131 ~ searchPets ~ filteredPets', filteredPets)

  return filteredPets
}

export default db
