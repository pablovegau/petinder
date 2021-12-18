<template>
  <div class="profileStatus">
    <div>
      <h2 class="profileStatus__title">Me entregan</h2>
      <div class="profileStatus__infoItem" v-for="(value, key) in handle_status_spanish" :key="key">
        <span>{{ key }}</span>
        <Label :falseBadge="value === false" :trueBadge="value === true">{{ value === true ? 'Si' : 'No' }}</Label>
      </div>
    </div>
  </div>
</template>

<script>
import Label from '../components/Label.vue'

export default {
  name: 'PetProfileStatus',
  components: {
    Label
  },
  props: ['handle_status'],
  data () {
    return {
      handle_status_spanish: {
        Vacunado: this.handle_status.vaccinated,
        Desparasitado: this.handle_status.dewormed,
        Esterilizado: this.handle_status.sterilized,
        Microchip: this.handle_status.microchip
      }
    }
  }
}
</script>

<style lang="scss">
.profileStatus {
  margin-bottom: var(--spacing-32);
  width: 100%;

  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }

  &__title {
    margin-bottom: var(--spacing-8);
    font-weight: 800;
  }

  &__infoItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    width: 100%;

    span:first-child {
      font-weight: 600;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-purple);
    }
  }
}
</style>
