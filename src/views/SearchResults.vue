<template>
  <div class="searchResults">
    <div v-if="showPetGrid" class="searchResults__title">Resultados para <span>{{ keyword }}</span></div>

    <div v-if="showPetGrid" class="searchResultsAdvancedButtons">
      <Button
        v-if="!showAdvancedSearch"
        @click="toogleAdvancedSearch"
        :withIcon="true"
        :iconSrc="openEyeIcon"
      >
        Busqueda avanzada
      </Button>
      <Button
        v-if="showAdvancedSearch"
        @click="toogleAdvancedSearch"
        :withIcon="true"
        :iconSrc="closeEyeIcon"
      >
        Busqueda avanzada
      </Button>
    </div>

    <form v-if="showPetGrid && showAdvancedSearch" @submit="advancedSearch" class="searchResultsAdvancedForm">
      <div class="searchResultsAdvancedForm__checkboxGroups">
        <fieldset class="searchResultsAdvancedForm__checkboxGroup">
          <span>Raza:</span>
          <div>
            <input type="checkbox" id="cat" value="Gato" v-model="species">
            <label for="cat">gato</label>
          </div>
          <div>
            <input type="checkbox" id="dog" value="Perro" v-model="species">
            <label for="dog">perro</label>
          </div>
        </fieldset>

        <fieldset class="searchResultsAdvancedForm__checkboxGroup">
          <span>Sexo:</span>
          <div>
            <input type="checkbox" id="male" value="Macho" v-model="sex">
            <label for="male">macho</label>
          </div>
          <div>
            <input type="checkbox" id="femalle" value="Hembra" v-model="sex">
            <label for="femalle">hembra</label>
          </div>
        </fieldset>

        <fieldset class="searchResultsAdvancedForm__checkboxGroup">
          <span>Tamaño:</span>
          <div>
            <input type="checkbox" id="small" value="Pequeño" v-model="size">
            <label for="small">pequeño</label>
          </div>
          <div>
            <input type="checkbox" id="medium" value="Mediano" v-model="size">
            <label for="medium">mediano</label>
          </div>
          <div>
            <input type="checkbox" id="large" value="Grande" v-model="size">
            <label for="large">grande</label>
          </div>
        </fieldset>
      </div>

      <div>
        <Button :accent="true">Buscar</Button>
      </div>
    </form>

    <PetGrid v-if="showPetGrid" :futureBestFriendsInfo="pets" />
    <div v-else class="searchResults__noMatch" >
      <div class="searchResults__noMatchText">
        <p><span>No se ha encontrado ningún gatete ni perrete</span> que coincida con la búsqueda 😢...</p>
        <p><span>Pero</span> no te preocupes, <span>aquí abajo ⬇️ puedes seguir buscando tu match</span> 💘</p>
      </div>
      <InputSearch />
    </div>
  </div>
</template>

<script>
import { simpleSearchPets, searchPets } from '../db'
import PetGrid from '@/components/PetGrid.vue'
import InputSearch from '@/components/InputSearch.vue'
import Button from '@/components/Button.vue'
import openEyeIcon from '../assets/images/icons/icon_eye-empty.svg'
import closeEyeIcon from '../assets/images/icons/icon_eye-close.svg'

export default {
  name: 'SearchResults',
  data: function () {
    return {
      openEyeIcon: openEyeIcon,
      closeEyeIcon: closeEyeIcon,
      showAdvancedSearch: false,
      keyword: this.$route.params.keyword,
      pets: undefined,
      showPetGrid: true,
      species: [],
      sex: [],
      size: []
    }
  },
  components: {
    PetGrid,
    InputSearch,
    Button
  },
  watch: {
    '$route.params.keyword' (newKeyword) {
      this.keyword = newKeyword
    }
  },
  methods: {
    toogleAdvancedSearch: function () {
      this.showAdvancedSearch = !this.showAdvancedSearch
    },
    getPets: async function (keyword) {
      // const keyword = key.charAt(0).toUpperCase() + key.slice(1)
      this.pets = await simpleSearchPets(keyword)
      this.showPetGrid = this.pets.length > 0
    },
    advancedSearch: async function (e) {
      e.preventDefault()
      this.pets = await searchPets(this.keyword, Object.values(this.species), Object.values(this.sex), Object.values(this.size))
    }
  },
  async mounted () {
    this.getPets(this.keyword)
  }
}
</script>

<style lang="scss">
.searchResults {
  // TODO: check this
  min-height: calc(100% - 95px + 32px);
  max-width: var(--layout-maxWidth);
  margin-left: auto;
  margin-right: auto;
  padding-top: 95px;

  &__title {
    padding: var(--spacing-40) var(--spacing-16);
    font-family: var(--title-fontFamily);
    font-size: var(--fontSize-24);
    font-weight: 800;

    span {
      color: var(--color-purple);
    }
  }

  &__noMatch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__noMatchText {
    margin-bottom: var(--spacing-32);
    text-align: center;

    p:first-child {
      margin-bottom: var(--spacing-16);
    }

    span {
      color: var(--color-purple-dark);
      font-weight: 700;
    }
  }
}

.searchResultsAdvancedButtons {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-32);
}

.searchResultsAdvancedForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-32);

  &__checkboxGroups {
    margin-bottom: var(--spacing-16);
  }

  &__checkboxGroup {
    display: flex;
    margin-bottom: var(--spacing-8);

    span {
      font-weight: 700;
      margin-right: var(--spacing-8);
    }

    div {
      margin-right: var(--spacing-8);
    }
  }
}
</style>
