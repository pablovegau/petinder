<template>
  <div class="profileHistory">
    <h2 class="profileHistory__title">Mi historia</h2>
    <p class="profileHistory__text">{{ bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'PetProfileHistory',
  props: ['bio']
}
</script>

<style lang="scss">
.profileHistory {
  border: 0.5px solid var(--color-accent);
  margin-bottom: 34px;
  padding: 20px;
  background-color: rgba(#7DE88C, 0.13);

  &__title {
    font-weight: 800;
    margin-bottom: var(--spacing-16);
  }

  &__text {
    color: var(--grayColor-dark);
    line-height: 150%;
    letter-spacing: -0.02em;
  }
}
</style>
