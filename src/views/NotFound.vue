<template>
<div :class="`notFound background--color${randomId}`">
  <div class="notFound__error">
    <h6>404</h6>
    <p>Lo sentimos, la página que buscas no existe</p>
    <div class="notFound__buttons">
      <Button linkName="Home">Ir al inicio</Button>
      <span>o</span>
      <Button :accent="true" linkName="PetDetail" :linkParams="{ id: randomId }">Encuentra un 🐶 o 🐱 adorable</Button>
    </div>
  </div>
  <div class="notFound__image">
    <img src="../assets/images/notFound/notFound.svg" alt="">
  </div>
  <a class="notFound__attribute" href='https://www.freepik.com/catalyststuff'>Vector created by catalyststuff - www.freepik.com</a>
</div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: 'NotFound',
  data () {
    return {
      randomId: Math.ceil(Math.random() * 12)
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss">
.notFound {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }

  &__error {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--spacing-32);

    @media screen and (min-width: 800px) {
      margin-bottom: 0;
      margin-right: var(--spacing-64);
    }

    h6 {
      margin-bottom: var(--spacing-8);
      font-size: var(--fontSize-60);
      font-weight: 800;
    }

    p {
      font-size: var(--fontSize-16);
      margin-bottom: var(--spacing-32);
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 800px) {
      flex-direction: row;
    }

    span {
      margin: var(--spacing-8);
    }
  }

  &__image {
    width: 300px;
  }

  &__attribute {
    position: absolute;
    bottom: var(--spacing-8);
    right: var(--spacing-8);
    color: var(--grayColor-dark);
    font-size: var(--fontSize-12);
  }
}

</style>
