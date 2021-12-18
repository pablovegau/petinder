<template>
  <div class="actions__wrapper">
      <div id="actions" class="actions">
        <a v-for="({ title, subtitle }, index) in actions" :key="title" class="action" href="/">
          <div class="action__icon"><img :src="actions[index].icon" :alt="`Action icon for ${title}`"></div>
          <div>
            <h3 class="action__title">{{ title }}</h3>
            <p class="action__subtitle">{{ subtitle }}</p>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
import apadrinaIcon from '../assets/images/icons/icon_apadrina.svg'
import adoptaIcon from '../assets/images/icons/icon_adopta.svg'
import socioIcon from '../assets/images/icons/icon_socio.svg'
import donacionesIcon from '../assets/images/icons/icon_donaciones.svg'
import empresasIcon from '../assets/images/icons/icon_empresas.svg'

export default {
  name: 'Actions',
  data () {
    return {
      actions: [
        {
          icon: apadrinaIcon,
          title: 'Apadrina',
          subtitle: 'Mientras llega la adopción'
        },
        {
          icon: adoptaIcon,
          title: 'Adopta',
          subtitle: 'El amigo que necesitas'
        },
        {
          icon: socioIcon,
          title: 'Hazte socio',
          subtitle: 'Solo 10€/mes'
        },
        {
          icon: donacionesIcon,
          title: 'Donaciones',
          subtitle: 'Con poco haces mucho'
        },
        {
          icon: empresasIcon,
          title: 'Empresas solidarias',
          subtitle: 'Descubre como colaborar'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.actions__wrapper {
  width: 100%;
  background: var(--gradient-actions);
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--layout-maxWidth);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: var(--spacing-40);
  padding-top: var(--spacing-40);

  @media screen and (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & .action:not(:last-child) {
      margin-bottom: 0;
    }
  }
}

.action {
  display: flex;
  align-items: center;
  border-radius: var(--spacing-8);
  padding-bottom: var(--spacing-16);
  padding-top: var(--spacing-16);
  width: 288px;
  color: var(--grayColor-black);
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 73px;
    width: 73px;
    border-radius: 50%;
    margin-right: var(--spacing-16);
    background-color: var(--grayColor-white);
  }

  &__title {
    margin-bottom: var(--spacing-8);
    font-size: var(--fontSize-18);
    font-weight: 700;
    letter-spacing: -1.5%;
  }

  @media screen and (min-width: 1100px) {
    flex-direction: column;

    &__icon {
      margin-right: 0;
      margin-bottom: var(--spacing-16);
    }

    &__title {
      text-align: center;
      margin-right: 0;
    }
  }
}
</style>
