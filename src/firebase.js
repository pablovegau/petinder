
import { initializeApp } from 'firebase/app'

var firebaseConfig = {
  apiKey: 'AIzaSyBtTNF0MDZtYy7Pbsfc9z64ZBT34soq_hc',
  authDomain: 'petinder-e9f17.firebaseapp.com',
  projectId: 'petinder-e9f17',
  storageBucket: 'petinder-e9f17.appspot.com',
  messagingSenderId: '115439223041',
  appId: '1:115439223041:web:325041e3699cb3e6ad5b00'
}

const app = initializeApp(firebaseConfig)

export { app }
