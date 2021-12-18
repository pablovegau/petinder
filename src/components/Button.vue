<template>
  <router-link v-if="linkName" :to="{ name: linkName, params: { ...linkParams }  }" class="btn" :class="{ 'btn--accent': accent, 'btn--icon': icon }">
    <div v-if="icon">
      <img :src="shareIcon" alt="">
    </div>
    <slot></slot>
  </router-link>
  <button v-else class="btn" :class="{ 'btn--accent': accent, 'btn--icon': icon }">
    <div v-if="icon">
      <img :src="shareIcon" alt="">
    </div>
    <slot></slot>
  </button>
</template>

<script>
import shareIcon from '../assets/images/icons/icon_share.svg'

export default {
  name: 'Button',
  props: ['accent', 'icon', 'linkName', 'linkParams'],
  data () {
    return {
      shareIcon
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-purple);
  border-radius: var(--spacing-4);
  padding: 0 var(--spacing-20);
  height: 44px;
  background-color: white;
  color: var(--color-purple);
  font-size: var(--fontSize-16);
  text-decoration: none;
  cursor: pointer;
  transition: all .4s;

  &:hover {
    background-color: var(--color-purple);
    color: var(--grayColor-white);
  }

  &--accent {
    border: none;
    background-color: var(--color-purple);
    color: var(--grayColor-white);

    &:hover {
      background-color: var(--color-purple-dark);
      color: var(--grayColor-white);
    }
  }

  &--icon {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      margin-right: var(--spacing-8);
    }

    &:hover {
      background-color: var(--grayColor-white);
      color: var(--color-purple);
    }
  }
}
</style>
