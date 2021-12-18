<template>
  <div class="profileNotes">
    <div>
      <h2 class="profileNotes__title">Tienes que saber</h2>
      <div class="profileNotes__infoItem" v-for="value in info_notes" :key="value">
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetProfileNotes',
  props: ['info_notes']
}
</script>

<style lang="scss">
.profileNotes {
  width: 100%;
  margin-bottom: var(--spacing-32);

  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }

  &__title {
    font-weight: 800;
    margin-bottom: var(--spacing-16);
  }

  &__infoItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-purple);
    }
  }
}
</style>
