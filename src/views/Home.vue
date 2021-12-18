<template>
  <div class="home">
    <Hero />
    <PetList :futureBestFriendsInfo="futureBestFriendsInfo" />
    <Actions />
  </div>
</template>

<script>
// @ is an alias to /src
import Actions from '@/components/Actions.vue'
import PetList from '@/components/PetList.vue'
import Hero from '@/components/Hero.vue'

import futureBestFriendsInfo from '../assets/pets.json'

export default {
  name: 'Home',
  components: {
    Actions,
    PetList,
    Hero
  },
  data () {
    return {
      futureBestFriendsInfo: futureBestFriendsInfo.data
    }
  }
}
</script>
