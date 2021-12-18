<template>
  <div class="latestAdditions">
    <h3 class="latestAdditions__title">Últimas incorporaciones</h3>
    <div id="latestAdditions__grid" class="latestAdditions__grid">
      <div v-for="(futureBestFriendInfo, index) in futureBestFriendsInfo" :key="futureBestFriendInfo.name">
        <PetCard :futureBestFriendInfo="futureBestFriendInfo" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import PetCard from '../components/PetCard'

export default {
  name: 'PetList',
  components: {
    PetCard
  },
  props: ['futureBestFriendsInfo']
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

  &__grid {
    display: grid;
    column-gap: 15px;
    grid-template-columns: 100%;
    justify-content: center;
    justify-items: center;
    row-gap: 38px;
  }

  @media screen and (min-width: 743px) {
    &__grid {
      grid-template-columns: repeat(2, 334px);
    }
  }

  @media screen and (min-width: 1092px) {
    &__grid {
      grid-template-columns: repeat(3, 334px);
    }
  }

  @media screen and (min-width: 1440px) {
    &__grid {
      grid-template-columns: repeat(4, 334px);
    }
  }
}
</style>
