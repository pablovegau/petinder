<template>
  <div class="searchResults">
    <div class="searchResults__title">{{ keyword }}</div>
    <PetGrid v-if="pets?.length > 0" :futureBestFriendsInfo="pets" />
    <div v-else-if="pets?.length === 0" >No pets found</div>
  </div>
</template>

<script>
import { simpleSearchPets } from '../db'
import PetGrid from '@/components/PetGrid.vue'

export default {
  name: 'SearchResults',
  data () {
    return {
      keyword: this.$route.params.keyword,
      pets: undefined
    }
  },
  components: {
    PetGrid
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
    }
  },
  async mounted () {
    this.getPets(this.keyword)
  }
}
</script>

<style lang="scss">
.searchResults {
  max-width: var(--layout-maxWidth);
  margin-bottom: var(--spacing-32);
  margin-left: auto;
  margin-right: auto;
  padding-top: 95px;

  &__title {
    padding: var(--spacing-40) var(--spacing-16);
    font-family: var(--title-fontFamily);
    font-size: var(--fontSize-24);
    font-weight: 800;
  }
}
</style>
