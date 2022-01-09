<template>
  <div class="searchResults">
    <div v-if="showPetGrid" class="searchResults__title">{{ keyword }}</div>

    <form v-if="showPetGrid" action="">
      <fieldset class="newPet__checkBox">
        <span>Raza</span>
        <div>
          <input type="checkbox" id="cat" value="gato" v-model="species">
          <label for="cat">gato</label>
        </div>
        <div>
          <input type="checkbox" id="dog" value="perro" v-model="species">
          <label for="dog">perro</label>
        </div>
      </fieldset>

      <fieldset class="newPet__checkBox">
        <span>Sexo</span>
        <div>
          <input type="checkbox" id="male" value="macho" v-model="sex">
          <label for="male">macho</label>
        </div>
        <div>
          <input type="checkbox" id="femalle" value="hembra" v-model="sex">
          <label for="femalle">hembra</label>
        </div>
      </fieldset>

      <fieldset class="newPet__checkBox">
        <span>Tamaño</span>
        <div>
          <input type="checkbox" id="small" value="pequeño" v-model="size">
          <label for="small">pequeño</label>
        </div>
        <div>
          <input type="checkbox" id="medium" value="mediano" v-model="size">
          <label for="medium">mediano</label>
        </div>
        <div>
          <input type="checkbox" id="large" value="grande" v-model="size">
          <label for="large">grande</label>
        </div>
      </fieldset>
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

export default {
  name: 'SearchResults',
  data () {
    return {
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
    InputSearch
  },
  watch: {
    '$route.params.keyword' (newKeyword) {
      this.keyword = newKeyword
    }
  },
  methods: {
    getPets: async function (keyword) {
      // const keyword = key.charAt(0).toUpperCase() + key.slice(1)
      this.pets = await simpleSearchPets(keyword)
      searchPets(keyword)
      this.showPetGrid = this.pets.length > 0
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
  height: calc(100% - 95px + 32px);
  max-width: var(--layout-maxWidth);
  margin-left: auto;
  margin-right: auto;
  padding-top: 95px;

  &__title {
    padding: var(--spacing-40) var(--spacing-16);
    font-family: var(--title-fontFamily);
    font-size: var(--fontSize-24);
    font-weight: 800;
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
</style>
