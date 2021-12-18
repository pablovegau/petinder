<template>
  <div
    class="header__wrapper"
    :class="{
      'header__wrapper--background': !isHome || (isHome && !positionIsTop),
      'header__wrapper--backgroundMobileMenu': show }"
  >
    <header class="header">

      <div class="header__wrapper--left">
        <router-link class="header__logo" :to="{ name: 'Home' }">
          <img
            v-if="isHome && positionIsTop || show"
            src="../assets/images/logos/petinder_white.svg"
            alt="petinder white logo"
          >
          <img
            v-else
            src="../assets/images/logos/petinder.svg"
            alt="petinder blue logo"
          >
        </router-link>
        <nav id="nav--desktop" class="nav--desktop">
          <a href="">Servicios</a>
          <a href="">Sobre nosotros</a>
          <a href="">Contactar</a>
        </nav>
      </div>

      <div class="header__wrapper--right">
        <Button v-if="isLoggedIn === false" linkName="Login">Iniciar sesión</Button>
        <Avatar v-else :currentUser="currentUser" :handleLogout="handleLogout" />
      </div>

      <div id="menu__icon" class="menu__icon" @click="toogleMenu">
        <div id="menu__iconBar" class="menu__iconBar" :class="{ 'menu__iconBar--cross': show, 'menu__iconBar--hamburguer': !show }"></div>
      </div>
    </header>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import Avatar from '../components/Avatar.vue'

export default {
  name: 'Header',
  props: ['positionIsTop', 'isHome', 'isLoggedIn', 'currentUser', 'handleLogout', 'show'],
  components: {
    Button,
    Avatar
  },
  emits: ['toogleMenu'],
  methods: {
    toogleMenu () {
      this.$emit('toogleMenu')
    }
  }
}
</script>

<style lang="scss">
.header__wrapper {
  position: fixed;
  z-index: 2;
  width: 100%;
  transition: background-color 0.2s;

  &--background {
    background-color: var(--grayColor-white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }

  &--backgroundMobileMenu {
    background-color: transparent;
    box-shadow: none;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  max-width: var(--layout-maxWidth);
  margin-left: auto;
  margin-right: auto;

  &__wrapper--left {
    display: flex;
    align-items: center;
  }

  &__wrapper--right {
    display: none;

    @media screen and (min-width: 1000px) {
      display: block;
    }
  }

  &__logo {
    display: block;
    width: 150px;
    margin-right: 28px;

    img {
      display: block;
      width: 100%;
    }

    @media screen and (min-width: 600px) {
      width: 209px;
    }
  }
}

.nav--desktop {
  display: none;

  a {
    position: relative;
    padding-bottom: 4px;
    color: var(--grayColor-black);
    text-decoration: none;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 0;
      bottom: 0;
      left: -2px;
      background-color: transparent;
      transition: width .3s, background-color .3s;
    }

    &:hover {
      &::after {
        width: calc(100% + 4px);
        background-color: var(--grayColor-black);
      }
    }
  }

  a:not(:last-child) {
    margin-right: 24px;
  }

  @media screen and (min-width: 1000px) {
    display: block;
  }
}

.signInButton {
  display: none;
  width: 140px;
  height: 44px;
  border: 1px solid var(--color-purple);
  border-radius: 4px;
  background-color: white;
  color: var(--color-purple);
  font-size: 16px;
  cursor: pointer;
  transition: background-color .4s, color .4s;

  &:hover {
    background-color: var(--color-purple);
    color: white;
  }

  @media screen and (min-width: 1000px) {
    display: block;
  }
}

:root {
  --iconBar__height: 5px;
  --iconBar__width: calc(var(--iconBar__height) * 6);
  --iconBar__color: #000000;
  --iconBar__borderRadius: calc(var(--iconBar__height) / 2);
  --iconBar__separation--positive: calc(var(--iconBar__height) * 2);
  --iconBar__separation--negative: calc(var(--iconBar__height) * -2);
  --iconBar__originalRotation: 0;
  --iconBar__positiveRotation: 45deg;
  --iconBar__negativeRotation: -45deg;

  --icon__width: calc(var(--iconBar__width) + var(--iconBar__height) * 2);
  --icon__height: var(--icon__width);
  --icon__animationTime: .4s;
}

@mixin centerWithFlex() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu__icon {
  height: var(--icon__height);
  width: var(--icon__width);
  @include centerWithFlex();

  @media screen and (min-width: 1000px) {
    display: none;
  }
}

.menu__iconBar {
  position: relative;
  height: var(--iconBar__height);
  width: var(--iconBar__width);
  border-radius: var(--iconBar__borderRadius);
  background-color: var(--iconBar__color);

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    height: var(--iconBar__height);
    width: var(--iconBar__width);
    border-radius: var(--iconBar__borderRadius);
    background-color: var(--iconBar__color);
    transform-origin: center center;
  }

  &:before {
    top: var(--iconBar__separation--negative);
  }

  &:after {
    top: var(--iconBar__separation--positive);
  }
}

.menu__iconBar--cross {
  animation: originalToCross var(--icon__animationTime) forwards;

  &:before {
    animation: beforeToCross var(--icon__animationTime) forwards;
  }

  &:after {
    animation: afterToCross var(--icon__animationTime) forwards;
  }
}

.menu__iconBar--hamburguer {
  animation: originalToHamburguer var(--icon__animationTime) forwards;

  &:before {
    animation: beforeToHamburguer var(--icon__animationTime) forwards;
  }

  &:after {
    animation: afterToHamburguer var(--icon__animationTime) forwards;
  }
}

@keyframes originalToHamburguer {
  0% {
    background-color: transparent;
  }

  40%, 100% {
    background-color: var(--iconBar__color);
  }
}

@keyframes beforeToHamburguer {
  0% {
    top: 0;
    transform: rotate(var(--iconBar__positiveRotation));
  }

  20%, 40% {
    top: 0;
    transform: rotate(var(--iconBar__originalRotation));
  }

  100% {
    top: var(--iconBar__separation--negative);
  }
}

@keyframes afterToHamburguer {
  0% {
    top: 0;
    transform: rotate(var(--iconBar__negativeRotation));
  }

  20%, 40% {
    top: 0;
    transform: rotate(var(--iconBar__originalRotation));
  }

  100% {
    top: var(--iconBar__separation--positive);
  }
}

@keyframes originalToCross {
  0% {
    background-color: var(--iconBar__color);
  }

  40%, 100% {
    background-color: transparent;
  }
}

@keyframes beforeToCross {
  0% {
    top: var(--iconBar__separation--negative);
  }

  20%, 40% {
    top: 0;
    transform: rotate(var(--iconBar__originalRotation));
  }

  100% {
    top: 0;
    transform: rotate(var(--iconBar__positiveRotation));
  }
}

@keyframes afterToCross {
  0% {
    top: var(--iconBar__separation--positive);
  }

  20%, 40% {
    top: 0;
    transform: rotate(var(--iconBar__originalRotation));
  }

  100% {
    top: 0;
    transform: rotate(var(--iconBar__negativeRotation));
  }
}
</style>
