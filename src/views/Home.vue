<template>
  <div class="home">
    <Hero />
    <div class="latestAdditions">
      <h3 class="latestAdditions__title">Últimas incorporaciones</h3>
      <PetGrid :futureBestFriendsInfo="futureBestFriendsInfo" />
    </div>
    <Actions />
  </div>
</template>

<script>
// @ is an alias to /src
import Actions from '@/components/Actions.vue'
import Hero from '@/components/Hero.vue'
import PetGrid from '@/components/PetGrid.vue'

import futureBestFriendsInfo from '../assets/pets.json'

export default {
  name: 'Home',
  components: {
    Actions,
    PetGrid,
    Hero
  },
  data () {
    return {
      futureBestFriendsInfo: futureBestFriendsInfo.data
    }
  }
}
</script>

<style lang="scss">
.latestAdditions {
  max-width: var(--layout-maxWidth);
  margin-bottom: var(--spacing-32);
  margin-left: auto;
  margin-right: auto;

  &__title {
    padding: var(--spacing-40) var(--spacing-16);
    font-family: var(--title-fontFamily);
    font-size: var(--fontSize-24);
    font-weight: 800;
  }
}
</style>
