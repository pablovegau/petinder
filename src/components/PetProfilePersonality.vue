<template>
  <div class="profilePersonality">
    <h2 class="profilePersonality__title">Mi personalidad</h2>
    <div class="profilePersonality__labels">
      <Label v-for="item in personality" :key="item">{{ item }}</Label>
    </div>
  </div>
</template>

<script>
import Label from '../components/Label'

export default {
  name: 'PetProfilePersonality',
  components: {
    Label
  },
  props: ['personality']
}
</script>

<style lang="scss">
.profilePersonality {
  margin-bottom: var(--spacing-32);

  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }

  &__title {
    font-weight: 800;
    margin-bottom: var(--spacing-24);
  }

  &__labels {
    display: flex;
    flex-wrap: wrap;

    span {
      margin-bottom: var(--spacing-8);
    }

    & span:not(:last-child) {
      margin-right: var(--spacing-4);
    }
  }
}
</style>
