<template>
  <div class="profileActions__wrapper">
      <div class="profileActions">
        <p>Si <span>{{ name }}</span> ya ha sido adoptado/a o no hacéis match, tenemos otros animales que te necesitan. Encuéntralos</p>
        <InputSearch />
      </div>
    </div>
</template>

<script>
import InputSearch from './InputSearch.vue'

export default {
  name: 'PetProfileActions',
  components: {
    InputSearch
  },
  props: ['name']
}
</script>

<style lang="scss">
.profileActions__wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--gradient-actions);
}

.profileActions {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin-left: var(--spacing-32);
  margin-right: var(--spacing-32);
  padding-bottom: var(--spacing-40);
  padding-top: var(--spacing-40);
  max-width: 460px;

  p {
    margin-bottom: var(--spacing-24);
    font-size: var(--fontSize-18);
    letter-spacing: -0.02em;
    line-height: 27px;
    text-align: center;
  }

  span {
    font-weight: 700;
  }
}
</style>
