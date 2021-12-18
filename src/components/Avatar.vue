<template>
  <div class="avatar" :class="{'avatar--background': withBackground}">
    <p>{{ currentUser.email }}</p>
    <div class="avatar__image">🦁</div>
    <button v-on:click="handleLogout">
      <img src="@/assets/images/icons/icon_logout.svg" alt="logout icon">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['currentUser', 'handleLogout', 'withBackground']
}
</script>

<style lang="scss">
.avatar {
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    height: 30px;
    width: 30px;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.7s;

    &:hover {
      animation: animation 1s ease-in-out 0s infinite;
    }

    img {
      padding-left: 2px;
      padding-top: 1px;
    }
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 52px;
    margin-left: var(--spacing-16);
    margin-right: var(--spacing-12);
    border-radius: 50%;
    background-color: var(--grayColor-light);
  }

  &--background {
    background-color: rgba(#FFFFFF, 0.5);
    padding: var(--spacing-12) var(--spacing-24);
    border-radius: var(--spacing-8);
  }
}

@keyframes animation {
  0%, 100% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1.05);
  }
}
</style>
