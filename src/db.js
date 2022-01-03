import '@/firebase'
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, where } from 'firebase/firestore'

// init services
const db = getFirestore()

// collection reference
const colRef = collection(db, 'pets')

export function addPet (pet) {
  const ref = doc(colRef)
  pet.id = ref.id

  setDoc(doc(db, 'pets', pet.id), { ...pet })

  return pet.id
}

export async function getPet (id) {
  const docRef = doc(db, 'pets', id)
  const docSnap = await getDoc(docRef)
  const pet = docSnap.data()
  console.log(pet)

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

export async function simpleSearchPets (keyword = '') {
  const q = query(colRef, where('name', '==', keyword))
  return await getPets(q)
}

// export async function searchPets (keyword = '', speciesKeyword = 'Perro', sexKeyword = 'Macho', sizeKeyword = 'Grande') {
//   const species = speciesKeyword ? [speciesKeyword] : ['Perro', 'Gato']
//   const sex = sexKeyword ? [sexKeyword] : ['Macho', 'Hembra']
//   const size = sizeKeyword ? [sizeKeyword] : ['Pequeño', 'Mediano', 'Grande']

//   const qName = query(colRef, where('name', '==', keyword))
//   const qSpecies = query(colRef, where('species', 'in', species))
//   const qSex = query(colRef, where('sex', 'in', sex))
//   const qSize = query(colRef, where('size', 'in', size))

//   const nameResults = await getPets(qName)
//   const speciesResults = await getPets(qSpecies)
//   const sexResults = await getPets(qSex)
//   const sizeResults = await getPets(qSize)
// }

export default db
