<template>
  <router-link :to="{ name: 'PetDetail', params: { id: futureBestFriendInfo.id }}" :class="`card background--color${index + 1}`">
    <div class="card__image">
      <img :src="futureBestFriendInfo.image_url" :alt="`${futureBestFriendInfo.name} portrait`">
    </div>
    <div class="card__overlay">
      <div>
        <h6 class="card__name">{{ futureBestFriendInfo.name }}</h6>
        <p class="card__location">{{ futureBestFriendInfo.location }}</p>
      </div>
      <div class="card__icons">
        <div v-if="futureBestFriendInfo.sex === 'Macho'">
          <img :src="maleIcon" alt="">
        </div>
        <div v-else>
          <img :src="femaleIcon" alt="">
        </div>
        <div v-if="futureBestFriendInfo.species === 'Perro'">
          <img :src="dogIcon" alt="">
        </div>
        <div v-else-if="futureBestFriendInfo.species === 'Gato'">
          <img :src="catIcon" alt="">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import maleIcon from '../assets/images/icons/icon_male.svg'
import femaleIcon from '../assets/images/icons/icon_female.svg'

import dogIcon from '../assets/images/icons/icon_dog.svg'
import catIcon from '../assets/images/icons/icon_cat.svg'

export default {
  name: 'PetCard',
  props: ['futureBestFriendInfo', 'index'],
  data () {
    return {
      maleIcon,
      femaleIcon,
      dogIcon,
      catIcon
    }
  }
}
</script>

<style lang="scss">
:root {
  --card-height: 281px;
  --card-width: 334px;
  --card-borderRadius: var(--spacing-4);
  --card-text-color: #263238;
  --card-overlay-height: 76px;
}

.card {
  display: block;
  height: var(--card-height);
  width: var(--card-width);
  border-radius: var(--card-borderRadius);
  color: var(--card-text-color);
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16),
              0px 2px 4px rgba(0, 0, 0, 0.12),
              0px 1px 8px rgba(0, 0, 0, 0.1);

  &__image {
    display: flex;
    justify-content: center;
    height: calc(var(--card-height) - var(--card-overlay-height));
    overflow: hidden;

    img {
      display: block;
      height: 100%;
      transition: transform 0.7s, filter 0.3s;
    }
  }

  &:hover .card__image img {
    filter: drop-shadow(5px 5px 5px #222);
    transform: scale(1.1);
  }

  &__overlay {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: var(--spacing-4);
    border-bottom-right-radius: var(--spacing-4);
    padding: var(--spacing-16);
    height: var(--card-overlay-height);
    background-color: var(--grayColor-white);
  }

  &__name {
    margin-bottom: var(--spacing-4);
    font-size: var(--fontSize-20);
    font-weight: 600;
    letter-spacing: 0.15px;
    line-height: 20px;
    text-decoration: none;
  }

  &__location {
    font-size: var(--fontSize-14);
    letter-spacing: 0.005em;
    line-height: 20px;
    opacity: 0.54;
  }

  &__icons {
    display: flex;

    & div:first-child {
      margin-right: var(--spacing-12);
    }
  }
}
</style>
