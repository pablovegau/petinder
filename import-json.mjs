// IMPORTAR DADES A FIREBASE (mètode casolà)

import { nGram } from 'n-gram'
import * as firebase from 'firebase/app'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'

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

const data = [
  {
    id: '7EJrtBS2DYPpU8eI3qwu',
    name: 'Thor',
    image_url: 'https://petinder-images.netlify.app/thor.png',
    location: 'Barcelona',
    species: 'Gato',
    sex: 'Macho',
    size: 'Mediano',
    birth_date: '2018-06-01',
    handle_status: {
      vaccinated: false,
      dewormed: true,
      sterilized: true,
      microchip: true
    },
    bio: 'Thor llegó de Montcada y es algo tímido pero con un poco de confianza se deja mimar y acariciar.',
    status: 'En adopción',
    personality: [
      'Bueno con gatos',
      'Timido',
      'Juguetón'
    ],
    info_notes: []
  },
  {
    id: 'QisGs2ZJhYDXWPSbAByG',
    name: 'Pancho',
    image_url: 'https://petinder-images.netlify.app/pancho.png',
    location: 'Badalona',
    species: 'Perro',
    sex: 'Macho',
    size: 'Mediano',
    birth_date: '2015-12-03',
    handle_status: {
      vaccinated: true,
      dewormed: true,
      sterilized: true,
      microchip: true
    },
    bio: 'Pancho es un perro muy obediente y cariñoso. Muy bueno con los niños y otros perros.',
    status: 'En adopción',
    personality: [
      'Bueno con otros perros',
      'Bueno con niños',
      'Cariñoso',
      'Bueno en casa'
    ],
    info_notes: [
      'Estoy en tratamiento médico',
      'Soy positivo en Leishmania'
    ]
  },
  {
    id: 'AsRZjQ1EJxaZks0ExQiW',
    name: 'Lola',
    image_url: 'https://petinder-images.netlify.app/lola.png',
    location: 'Barcelona',
    species: 'Perro',
    sex: 'Hembra',
    size: 'Pequeño',
    birth_date: '2019-05-18',
    handle_status: {
      vaccinated: true,
      dewormed: false,
      sterilized: true,
      microchip: true
    },
    bio: 'Lola es buenísima! Le encanta estar con gente y es lo más cariñoso que existe. No ha tenido una vida fácil, fue maltratada casi toda su vida. A pesar de haber tenido un pasado doloroso, ella sólo busca cariño y poder vivir tranquila. Es una perra tranquila, sabe ir con bozal perfectamente y es muy obediente y aprende enseguida.',
    status: 'En adopción',
    personality: [
      'Me gusta pasear',
      'Me gusta estar en compañía',
      'Cariñoso',
      'Juguetón'
    ],
    info_notes: []
  },
  {
    id: 'e72CzP50PIhLBH7lWRPr',
    name: 'Catiperri',
    image_url: 'https://petinder-images.netlify.app/catiperri.png',
    location: 'Barcelona',
    species: 'Gato',
    sex: 'Hembra',
    size: 'Mediano',
    birth_date: '2016-03-12',
    handle_status: {
      vaccinated: false,
      dewormed: false,
      sterilized: true,
      microchip: false
    },
    bio: 'Me llamó Catiperri y llevó mucho tiempo viviendo en la calle, unos 4 años calculo. La vida callejera me ha vuelto desconfiada. Sólo mi alimentadora merecía mi atención y dejaba que me acariciara cuando venía a darme comida y cariño. Soy limpia, uso el arenero y creo que, con un poco de paciencia volveré a confiar.',
    status: 'En adopción',
    personality: [
      'Cauteloso con extraños',
      'Tímido',
      'Independiente'
    ],
    info_notes: []
  },
  {
    id: 'gbXXaQeOPVMEmbA8B2Lm',
    name: 'Aramis',
    image_url: 'https://petinder-images.netlify.app/aramis.png',
    location: 'Sabadell',
    species: 'Perro',
    sex: 'Macho',
    size: 'Pequeño',
    birth_date: '2019-08-08',
    handle_status: {
      vaccinated: true,
      dewormed: true,
      sterilized: true,
      microchip: true
    },
    bio: 'Aramis ha sido encontrado en la calle, llegó flaquito pero no estaba en muy malas condiciones. Por su carácter y su edad, pensamos que ha podido tener familia hasta hace poquito. ',
    status: 'Adoptado',
    personality: [
      'Bueno con otros perros',
      'Bueno con gatos',
      'Bueno con otros animales',
      'Me gusta pasear',
      'Cariñoso'
    ],
    info_notes: []
  },
  {
    id: 'aVf5XCB8cF5exOV76eGd',
    name: 'Lucy',
    image_url: 'https://petinder-images.netlify.app/lucy.png',
    location: 'Montmeló',
    species: 'Gato',
    sex: 'Hembra',
    size: 'Pequeño',
    birth_date: '2018-02-09',
    handle_status: {
      vaccinated: true,
      dewormed: true,
      sterilized: false,
      microchip: true
    },
    bio: 'Rescatada entre maullando y escondiéndose entre los coches, la pequeña Lucy es una gatita muy juguetona, aventurera, divertida... sociable con otros gatos, tímida con las personas hasta que te conoce y te empieza a ronronear, es un pequeño motorcillo!',
    status: 'En adopción',
    personality: [
      'Bueno con gatos',
      'Bueno con niños',
      'Bueno en casa',
      'Cariñoso'
    ],
    info_notes: [
      'Soy positivo en Leucemia felina'
    ]
  },
  {
    id: 'UTGXnP4b00ULVbuYpCaT',
    name: 'Bowie',
    image_url: 'https://petinder-images.netlify.app/bowie.png',
    location: 'Terrassa',
    species: 'Gato',
    sex: 'Macho',
    size: 'Mediano',
    birth_date: '2015-04-15',
    handle_status: {
      vaccinated: true,
      dewormed: true,
      sterilized: true,
      microchip: true
    },
    bio: 'Me llamo Bowie, fuí abandonado y tenía una herida muy grande en el cuello, mi delgadez asustaba y una fractura en la pata que se podía ver el hueso roto. Despues de la cirugía y una larga rehabilitación no logre recuperar la movilidad de mi patita y la llevo encogida, pero hago una vida normal.',
    status: 'Adoptado',
    personality: [
      'Bueno con gatos',
      'Bueno con niños',
      'Bueno en casa',
      'Cariñoso'
    ],
    info_notes: [
      'Estoy en tratamiento médico'
    ]
  },
  {
    id: 'm4mVHODtj4qfpUQVMRCn',
    name: 'Floyd',
    image_url: 'https://petinder-images.netlify.app/floyd.png',
    location: 'Castelldefels',
    species: 'Perro',
    sex: 'Macho',
    size: 'Pequeño',
    birth_date: '2016-10-08',
    handle_status: {
      vaccinated: false,
      dewormed: false,
      sterilized: false,
      microchip: true
    },
    bio: 'Floyd es un perro de tamaño mediano, es muy bueno tanto dentro como fuera de casa. Apto con perros, gatos y niños ¿Te animas a adoptarlo?',
    status: 'En adopción',
    personality: [
      'Bueno con otros perros',
      'Bueno con gatos',
      'Bueno en el coche',
      'Cariñoso',
      'Amigable con extraños'
    ],
    info_notes: [
      'Necesito licencia PPP'
    ]
  },
  {
    id: 'rcRLczPsxjl6EEyYxtY6',
    name: 'Murdog',
    image_url: 'https://petinder-images.netlify.app/murdog.png',
    location: 'Barcelona',
    species: 'Perro',
    sex: 'Macho',
    size: 'Mediano',
    birth_date: '2014-11-01',
    handle_status: {
      vaccinated: true,
      dewormed: true,
      sterilized: true,
      microchip: true
    },
    bio: 'Murdog es un perro noble, vigilante muy tranquilo, cariñoso leal y fiel. Ahora está de acogida en un refugio, esperando tener una familia.',
    status: 'En acogida',
    personality: [
      'Bueno con otros perros',
      'Cariñoso',
      'A veces ladro',
      'Amigable con extraños'
    ],
    info_notes: []
  },
  {
    id: 'b3Ylz0pikDL1Uceqt1Ox',
    name: 'Groucho',
    image_url: 'https://petinder-images.netlify.app/groucho.png',
    location: 'Mataró',
    species: 'Perro',
    sex: 'Macho',
    size: 'Mediano',
    birth_date: '2016-10-08',
    handle_status: {
      vaccinated: false,
      dewormed: false,
      sterilized: false,
      microchip: true
    },
    bio: 'Groucho es un perrito cariñoso, tranquilo, obediente, se lleva muy bien con la gente, con los niños. Es un perrito que sabe ir con correa por lo que seguramente haya vivido en una casa, le gusta defender su hogar y lo suyo ante otros perros.',
    status: 'En adopción',
    personality: [
      'Bueno con otros perros',
      'Bueno con otros animales',
      'Independiente',
      'Bueno con niños'
    ],
    info_notes: []
  },
  {
    id: 'RFPvLPilU00vtJcXJngU',
    name: 'Coco',
    image_url: 'https://petinder-images.netlify.app/coco.png',
    location: 'Barcelona',
    species: 'Gato',
    sex: 'Hembra',
    size: 'Mediano',
    birth_date: '2018-06-01',
    handle_status: {
      vaccinated: false,
      dewormed: false,
      sterilized: true,
      microchip: false
    },
    bio: 'Coco es muy cariñosa, juguetóna y curiosa. Muy sociable y divertida.',
    status: 'En adopción',
    personality: [
      'Bueno con gatos',
      'Bueno con niños',
      'Amigable con extraños'
    ],
    info_notes: []
  },
  {
    id: 'hRKuIGsN9yx9XMeGMAtJ',
    name: 'Judas',
    image_url: 'https://petinder-images.netlify.app/judas.png',
    location: 'Terrassa',
    species: 'Perro',
    sex: 'Macho',
    size: 'Grande',
    birth_date: '2019-04-29',
    handle_status: {
      vaccinated: true,
      dewormed: true,
      sterilized: true,
      microchip: true
    },
    bio: 'Busca acogida o adopción junto a su inseparable compañero Duke, no pueden vivir el uno sin el otro',
    status: 'En adopción',
    personality: [
      'Bueno con otros perros',
      'Bueno con otros animales',
      'Me gusta pasear',
      'Cariñoso',
      'Juguetón'
    ],
    info_notes: [
      'Adopción conjunta'
    ]
  }
]

// per cada element del json, afegeix una nova mascota a la base de dades
data.forEach(function (obj) {
  let gram = []

  for (let i = 1; i <= obj.name.length; i++) {
    gram = [...gram, ...nGram(i)(obj.name)]
  }

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
    info_notes: obj.info_notes,
    createdAt: Timestamp.fromDate(new Date()),
    gram: gram
  })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
})
