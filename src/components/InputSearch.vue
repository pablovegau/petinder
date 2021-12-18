<template>
  <div class="inputSearch">
    <input type="text" class="inputSearch__search" placeholder="Busca a tu nuevo mejor amigo" />
    <img class="inputSearch__searchIcon" :src="iconSearch" alt="">
  </div>
</template>

<script>
import iconSearch from '../assets/images/icons/icon_search.svg'

export default {
  name: 'InputSearch',
  data () {
    return {
      iconSearch: iconSearch
    }
  }
}
</script>

<style lang="scss">
.inputSearch {
  position: relative;
  max-width: 460px;
  width: 100%;

  &__search {
    border-radius: 4px;
    border: 1px solid rgba(#5B49FE, 0.5);
    height: 46px;
    width: 100%;
    text-indent: 44px;

    &::placeholder {
      color: var(--grayColor-dark);
      opacity: .5;
    }
  }

  &__searchIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--spacing-8);
    height: 30px;
    width: 30px;
  }
}
</style>
