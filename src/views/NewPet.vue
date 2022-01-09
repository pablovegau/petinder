<template>
  <div class="newPet">
    <h1 v-if="isLoggedIn" class="newPet__title">Nuevo animal</h1>

    <form v-if="isLoggedIn" @submit="createPet" class="form">

      <fieldset class="form__inputTypeText">
        <label for="name" class="required form__label">Nombre</label>
        <input type="text" id="name" v-model="name">
      </fieldset>

      <fieldset class="form__inputTypeFile">
        <label for="image_url" class="required form__label">Imagen</label>
        <input type="file" id="image_url" @change="onFileChange">
      </fieldset>
      <div v-if="imageUrl" class="newPet__imagePreview">
        <img :src="imageUrl" alt="uploaded image"/>
      </div>

      <fieldset class="form__inputTypeText">
        <label for="location" class="required form__label">Localización</label>
        <input type="text" id="location" v-model="location">
      </fieldset>

      <fieldset class="form__inputTypeRadio">
        <span class="required form__label">Especie</span>
        <div>
          <input type="radio" id="speciesCat" value="Gato" v-model="species" checked>
          <label for="speciesCat">gato</label>
        </div>
        <div>
          <input type="radio" id="speciesDog" value="Perro" v-model="species">
          <label for="speciesDog">perro</label>
        </div>
      </fieldset>

      <fieldset class="form__inputTypeRadio">
        <span class="required form__label">Sexo</span>
        <div>
          <input type="radio" id="sexMale" value="Macho" v-model="sex" checked>
          <label for="sexMale">macho</label>
        </div>
        <div>
          <input type="radio" id="sexFemale" value="Hembra" v-model="sex">
          <label for="sexFemale">hembra</label>
        </div>
      </fieldset>

      <fieldset class="form__inputTypeRadio">
        <span class="required form__label">Tamaño</span>
        <div>
          <input type="radio" id="sizeSmall" value="Pequeño" v-model="size" checked>
          <label for="sizeSmall">pequeño</label>
        </div>
        <div>
          <input type="radio" id="sizeMedium" value="Mediano" v-model="size">
          <label for="sizeMedium">mediano</label>
        </div>
        <div>
          <input type="radio" id="sizeLarge" value="Grande" v-model="size">
          <label for="sizeLarge">grande</label>
        </div>
      </fieldset>

      <fieldset class="form__inputTypeDate">
        <label for="bornDate" class="required form__label">Fecha de nacimiento</label>
        <input type="date" id="bornDate" v-model="birth_date">
      </fieldset>

      <fieldset class="form__inputTypeCheckbox">
        <span class="required form__label">Estado en la entrega</span>
        <div>
          <input type="checkbox" id="vaccinated" value="vaccinated" v-model="handle_status">
          <label for="vaccinated">Vacunado</label>
        </div>
        <div>
          <input type="checkbox" id="dewormed" value="dewormed" v-model="handle_status">
          <label for="dewormed">Desparasitado</label>
        </div>
        <div>
          <input type="checkbox" id="sterilized" value="sterilized" v-model="handle_status">
          <label for="sterilized">Esterilizado</label>
        </div>
        <div>
          <input type="checkbox" id="microchip" value="microchip" v-model="handle_status">
          <label for="microchip">Microchip</label>
        </div>
      </fieldset>

      <fieldset class="form__textArea">
        <label for="history" class="required form__label">Historia</label>
        <textarea id="history" v-model="bio"></textarea>
      </fieldset>

      <fieldset class="form__inputTypeRadio">
        <span class="required form__label">Estado</span>
        <div>
          <input type="radio" id="forAdoption" value="En adopción" v-model="status" checked>
          <label for="forAdoption">En adopción</label>
        </div>
        <div>
          <input type="radio" id="adopted" value="Adoptado" v-model="status">
          <label for="adopted">Adoptado</label>
        </div>
        <div>
          <input type="radio" id="waitingFosterHome" value="En acogida" v-model="status">
          <label for="waitingFosterHome">En acogida</label>
        </div>
        <div>
          <input type="radio" id="inFosterHome" value="Acogido" v-model="status">
          <label for="inFosterHome">Acogido</label>
        </div>
      </fieldset>

      <fieldset class="form__inputTypeSelect--multiple">
        <label for="personality" class="form__label">Personalidad</label>
        <p class="newPet__selectMultipleInfo">pulsa ctrl (Windows) o command (MacOs) para seleccionar mas de un elemento</p>
        <select id="personality" v-model="personality" multiple>
          <option value="Bueno con niños">Bueno con niños</option>
          <option value="Bueno con perros">Bueno con perros</option>
          <option value="Bueno con gatos">Bueno con gatos</option>
          <option value="Bueno en casa">Bueno en casa</option>
          <option value="Bueno en el coche">Bueno en el coche</option>
          <option value="Tímido">Tímido</option>
          <option value="Juguetón">Juguetón</option>
          <option value="Cariñoso">Cariñoso</option>
          <option value="Me gusta estar en compañía">Me gusta estar en compañía</option>
          <option value="Me gusta pasear">Me gusta pasear</option>
          <option value="Independiente">Independiente</option>
          <option value="Cauteloso con extraños">Cauteloso con extraños</option>
          <option value="Amigable con extraños">Amigable con extraños</option>
          <option value="A veces ladro">A veces ladro</option>
        </select>
      </fieldset>

      <fieldset v-for="(infoNote, index) in info_notes" :key="index" class="form__inputTypeText">
        <label :for="`${infoNote + index}`" class="form__label">{{ index + 1 }}. Información adicional</label>
        <input type="text" :id="`${infoNote + index}`" v-model="infoNote.info_note">
      </fieldset>

      <div class="newPet__infoNotesControls">
        <Button @click="addNote">Añadir</Button>
        <Button @click="deleteLastInfoNote">Eliminar</Button>
      </div>

      <p v-if="error" class="newPet__error"><span>Error</span> - {{ error }}</p>

      <div class="newPet__submitButton">
        <Button :accent="true">Guardar</Button>
      </div>
    </form>

    <div v-else class="newPet__noLogged" >
      <p>Necesitas iniciar sesión para crear nuevas fichas</p>
    </div>
  </div>
</template>

<script>
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

import Button from '../components/Button.vue'
import { addPet } from '../db'

export default {
  name: 'NewPet',
  props: ['isLoggedIn'],
  data: function () {
    return {
      name: '',
      image: undefined,
      imageUrl: '',
      location: '',
      species: 'Gato',
      sex: 'Macho',
      size: 'Pequeño',
      birth_date: '',
      handle_status: [],
      bio: '',
      status: 'En adopción',
      personality: [],
      info_notes: [
        {
          info_note: ''
        }
      ],
      error: ''
    }
  },
  components: {
    Button
  },
  methods: {
    uploadPhoto: async function () {
      const storage = getStorage()
      const storageRef = ref(storage, this.image.name)

      const snapshot = await uploadBytes(storageRef, this.image)
      const url = await getDownloadURL(snapshot.ref)

      return url
    },

    createImage: function (file) {
      this.image = file
      const reader = new FileReader()

      reader.onload = (e) => {
        this.imageUrl = e.target.result
      }
      reader.readAsDataURL(file)
    },

    onFileChange: function (file) {
      if (!file.target.files[0]) {
        return
      }
      this.createImage(file.target.files[0])
    },

    addNote: function (e) {
      e.preventDefault()

      this.info_notes.push({
        info_note: ''
      })
    },

    deleteLastInfoNote: function (e) {
      e.preventDefault()

      if (this.info_notes.length > 1) {
        this.info_notes.pop()
      }
    },

    createPet: async function (e) {
      e.preventDefault()

      if (this.name && this.location && this.birth_date && this.bio && this.image) {
        const url = await this.uploadPhoto()

        // eslint-disable-next-line camelcase
        const { name, location, species, sex, size, birth_date, handle_status, bio, status, personality, info_notes } = this
        const petId = addPet({
          name,
          image_url: url,
          location,
          species,
          sex,
          size,
          birth_date,
          handle_status: {
            vaccinated: handle_status.includes('vaccinated'),
            dewormed: handle_status.includes('dewormed'),
            sterilized: handle_status.includes('sterilized'),
            microchip: handle_status.includes('microchip')
          },
          bio,
          status,
          personality,
          info_notes: info_notes.map(infoNote => infoNote.info_note).filter(infoNote => infoNote)
        })

        this.error = ''

        this.$router.push({ name: 'PetDetail', params: { id: petId } })
      } else {
        let errors = []

        if (!this.name) errors = [...errors, 'nombre']
        if (!this.image) errors = [...errors, 'imagen']
        if (!this.location) errors = [...errors, 'localización']
        if (!this.birth_date) errors = [...errors, 'Fecha de nacimiento']
        if (!this.bio) errors = [...errors, 'historia']

        const lastValue = [...errors].pop()
        const slicedArray = [...errors].slice(0, -1)

        const errorInputs = slicedArray.length
          ? `${slicedArray.join(', ')} y ${lastValue}`
          : lastValue

        this.error = `Los siguientes campos son requeridos: ${errorInputs}`
      }
    }
  }
}
</script>

<style lang="scss">
.required {
  position: relative;
  width: fit-content;

  &::after {
    content: 'obligatorio';
    position: absolute;
    bottom: 0;
    margin-left: var(--spacing-8);
    color: var(--grayColor-mediumDark);
    font-size: var(--fontSize-10);
    font-weight: 400;
    letter-spacing: 0.5px;
  }
}

.form {
  &__label {
    font-weight: 600;
    margin-bottom: var(--spacing-8);
  }

  &__inputTypeText,
  &__inputTypeFile,
  &__inputTypeRadio,
  &__inputTypeCheckbox,
  &__inputTypeDate,
  &__textArea,
  &__inputTypeSelect--multiple {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacing-16);
  }

  &__inputTypeText,
  &__inputTypeDate {
    input {
      border-radius: var(--spacing-4);
      border: 1px solid rgba(#5B49FE, 0.5);
      height: 36px;
      width: 100%;
    }
  }

  &__inputTypeText {
    input {
      text-indent: var(--spacing-16);
    }
  }

  &__inputTypeRadio,
  &__inputTypeCheckbox {
    div {
      margin-bottom: var(--spacing-4);
      margin-left: var(--spacing-4);
    }
  }

  &__inputTypeDate {
    input {
      text-indent: var(--spacing-8);
    }
  }

  &__textArea,
  &__inputTypeSelect--multiple {
    textarea,
    select {
      border-radius: var(--spacing-4);
      border: 1px solid rgba(#5B49FE, 0.5);
      height: 100px;
      width: 100%;
      padding-bottom: var(--spacing-8);
      padding-left: var(--spacing-8);
      padding-top: var(--spacing-8);
    }
  }
}

.newPet {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 62px);
  width: 100%;
  padding: 135px 32px 0px;

  &__title {
    margin-bottom: var(--spacing-24);
    font-family: var(--title-fontFamily);
    font-size: var(--fontSize-30);
    font-weight: 800;
    line-height: 120%;
  }

  &__imagePreview {
    width: 100%;
    margin-bottom: var(--spacing-16);

    img {
      width: 100%;
    }
  }

  &__selectMultipleInfo {
    padding-bottom: var(--spacing-8);
    color: var(--grayColor-mediumDark);
    font-size: var(--fontSize-10);
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 12px;
  }

  &__infoNotesControls {
    display: flex;
    margin-bottom: var(--spacing-32);

    button:first-child {
      margin-right: var(--spacing-16);
    }
  }

  &__error {
    border: 1px solid red;
    border-radius: var(--spacing-4);
    margin-bottom: var(--spacing-16);
    padding: var(--spacing-8);
    color: var(--color-tag-false);
    font-size: var(--fontSize-14);
    line-height: 16px;

    span {
      font-weight: 800;
    }
  }

  &__submitButton {
    display: flex;
    justify-content: center;
    padding-top: var(--spacing-32);
    margin-bottom: var(--spacing-32);
    border-top: 1px solid var(--color-purple);
  }

  &__noLogged {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-left: var(--spacing-32);
    padding-right: var(--spacing-32);

    p {
      text-align: center;
    line-height: var(--spacing-24);
    }
  }
}
</style>
