<template>
  <div class="profileBasic">
    <div class="profileBasic__frame">
      <div :class="`profileBasic__image background--color${id}`">
        <img :src="`${portrait}`" alt="">
      </div>
    </div>

    <div class="profileBasic--right">
      <h1 class="profileBasic__title">{{ name }} <span>X años, {{ location }}</span></h1>

      <div>
        <div class="profileBasic__infoItem" v-for="(value, key) in basicProfile" :key="key">
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </div>
      </div>

      <div class="profileBasic__interactions">
        <Button :accent="true">Lo quiero adoptar</Button>
        <Button :icon="true">Compartir</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: 'PetProfileBasic',
  components: {
    Button
  },
  props: ['id', 'name', 'location', 'portrait', 'basicProfile']
}
</script>

<style lang="scss">
:root {
  --profileBasic-image-size: 565px;
}

.profileBasic {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-48);

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;

    &--right {
      margin-left: var(--spacing-128);
    }
  }

  &__title {
    margin-bottom: var(--spacing-24);
    margin-top: var(--spacing-24);
    font-family: var(--title-fontFamily);
    font-size: var(--fontSize-30);
    font-weight: 800;
    line-height: 120%;

    span {
      color: var(--color-purple);
    }
  }

  &__frame {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    transform: scale(1);
    transition: box-shadow 0.5s, transform 0.5s;

    &:hover {
      box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.1);
      transform: scale(1.01);
    }

    @media screen and (min-width: 1440px) {
      height: var(--profileBasic-image-size);
      width: var(--profileBasic-image-size);
    }
  }

  &__image {
    display: flex;
    align-items: end;
    justify-content: center;
    width: calc(100% - 40px);
    aspect-ratio: 1 / 1;
    margin: var(--spacing-20);
    overflow: hidden;

    img {
      height: 95%;
    }
  }

  &__infoItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;

    span:first-child {
      font-weight: 600;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-purple);
    }

    @media screen and (min-width: 1440px) {
      width: 333px;
    }
  }

  &__interactions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: var(--spacing-24);

    & button:not(:last-child) {
      margin-bottom: var(--spacing-16);
    }

    @media screen and (min-width: 1440px) {
      flex-direction: row;
      width: 333px;
    }
  }
}
</style>
