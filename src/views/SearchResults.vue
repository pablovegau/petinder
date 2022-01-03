<template>
  <div class="searchResults">
    <PetList v-if="pets?.length > 0" :futureBestFriendsInfo="pets" />
    <div v-else-if="pets?.length === 0" >No pets found</div>
  </div>
</template>

<script>
import { simpleSearchPets } from '../db'
import PetList from '@/components/PetList.vue'

export default {
  name: 'SearchResults',
  data () {
    return {
      keyword: this.$route.params.keyword,
      pets: undefined
    }
  },
  components: {
    PetList
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
  padding: 95px 35px 0px;
}
</style>
