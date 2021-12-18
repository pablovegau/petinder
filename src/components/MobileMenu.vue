<template>
  <div class="menu menu--topPosition" :class="{ 'menu--visible': show }" id="menu">
    <div class="menu__wrapper--right">
      <Button v-if="isLoggedIn === false" linkName="Login">Iniciar sesión</Button>
      <Avatar v-else :currentUser="currentUser" :handleLogout="handleLogout" :withBackground="`${true}`" />
    </div>
    <nav id="nav--mobile" class="menu__nav--mobile">
      <a href="">Servicios</a>
      <a href="">Sobre nosotros</a>
      <a href="">Contactar</a>
    </nav>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import Avatar from '../components/Avatar.vue'

export default {
  name: 'MobileMenu',
  props: ['show', 'isLoggedIn', 'currentUser', 'handleLogout'],
  components: {
    Button,
    Avatar
  }
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 100%;
  height: 100vh;
  width: 100vw;
  padding-left: var(--spacing-32);
  padding-right: var(--spacing-32);
  padding-top: var(--spacing-128);
  transition: left 0.4s, background-color 0.2s;

  &__wrapper--right {
    display: flex;
    justify-content: center;
    margin-bottom: var(--spacing-32);
  }

  &--visible {
    left: 0;
  }

  &--topPosition {
    background-color: var(--color-purple);
  }

  &--bottomPosition {
    background-color: var(--grayColor-white);
  }

  &__nav--mobile {
    a {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: var(--fontSize-20);
      text-decoration: none;
    }

    a:not(:last-child) {
      margin-bottom: var(--spacing-32);
    }
  }

  &--topPosition .menu__nav--mobile {
    a {
      color: var(--grayColor-white);
    }
  }

  &--bottomPosition .menu__nav--mobile {
    a {
      color: var(--color-purple);
    }
  }
}
</style>
