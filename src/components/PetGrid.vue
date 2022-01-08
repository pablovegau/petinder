<template>
  <div class="petGrid">
    <div id="petGrid__grid" class="petGrid__grid">
      <PetCard
        v-for="(futureBestFriendInfo, index) in futureBestFriendsInfo"
        :key="futureBestFriendInfo.name"
        :futureBestFriendInfo="futureBestFriendInfo"
        :index="index" />
    </div>
  </div>
</template>

<script>
import PetCard from '../components/PetCard'

export default {
  name: 'PetGrid',
  components: {
    PetCard
  },
  props: ['futureBestFriendsInfo']
}
</script>

<style lang="scss">
.petGrid {
  max-width: var(--layout-maxWidth);
  margin-bottom: var(--spacing-32);
  margin-left: auto;
  margin-right: auto;

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
