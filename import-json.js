// IMPORTAR DADES A FIREBASE (mètode casolà)

const firebase = require('firebase/app')
const { getFirestore, addDoc, collection } = require('firebase/firestore')
const petsJson = require('./src/assets/pets.json')

// les teves dades de configuració:
firebase.initializeApp({
  apiKey: 'AIzaSyBtTNF0MDZtYy7Pbsfc9z64ZBT34soq_hc',
  authDomain: 'petinder-e9f17.firebaseapp.com',
  projectId: 'petinder-e9f17',
  storageBucket: 'petinder-e9f17.appspot.com',
  messagingSenderId: '115439223041',
  appId: '1:115439223041:web:325041e3699cb3e6ad5b00'
})

var db = getFirestore()

// per cada element del json, afegeix una nova mascota a la base de dades
petsJson.data.forEach(function (obj) {
  addDoc(collection(db, 'pets'), {
    id: obj.id,
    name: obj.name,
    image_url: obj.image_url,
    location: obj.location,
    species: obj.species,
    sex: obj.sex,
    size: obj.size,
    birth_date: obj.birth_date,
    handle_status: obj.handle_status,
    bio: obj.bio,
    status: obj.status,
    personality: obj.personality,
    info_notes: obj.info_notes
  })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
})
