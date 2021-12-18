<template>
  <div class="hero__wrapper">
    <div class="hero">
      <div class="maxSizeWrapper">
        <div class="hero__vectors">
          <img src="../assets/images/heroBackground/heroBackground.svg" alt="">
        </div>
        <div class="hero__portrait">
          <img src="../assets/images/portraits/goofy_portrait.png" alt="">
        </div>
        <div class="hero__titles">
          <h1>Perretes y gatetes <span>en tu zona</span></h1>
          <p>Te ayudamos a encontrar el amigo fiel que necesitas. Lo tienes a una pata de distancia.</p>
        </div>
        <InputSearch />
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from '../components/InputSearch.vue'

export default {
  name: 'Hero',
  components: {
    InputSearch
  }
}
</script>

<style lang="scss">
.hero__wrapper {
  background-image: var(--gradient-hero);
}

.hero {
  position: relative;
  padding: var(--spacing-16);
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  max-width: var(--layout-maxWidth);
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    height: 667px;
  }

  &__vectors {
    position: absolute;
    right: -170px;
    bottom: -260px;
    width: 620px;

    img {
      display: block;
      width: 100%;
    }

    @media screen and (min-width: 600px) {
      width: 780px;
    }

    @media screen and (min-width: 1200px) {
      width: 1100px;
      bottom: -460px;
      right: -110px;
    }
  }

  &__portrait {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 260px;

    img {
      display: block;
      width: 100%;
    }

    @media screen and (min-width: 600px) {
      width: 400px;
      right: 20px;
    }

    @media screen and (min-width: 1200px) {
      width: 460px;
      right: 190px;
    }
  }

  &__titles {
    width: 300px;
    margin-top: 94px;

    h1 {
      margin-bottom: var(--spacing-16);
      font-family: var(--title-fontFamily);
      font-size: var(--fontSize-30);
      font-weight: 800;
      line-height: 120%;
      text-align: left;
    }

    span {
      color: var(--grayColor-white);
    }

    p {
      margin-bottom: var(--spacing-24);
      font-size: var(--fontSize-18);
      line-height: 26px;
      text-align: left;
    }

    @media screen and (min-width: 600px) {
      width: 500px;
      margin-top: 128px;

      h1 {
        font-size: var(--fontSize-48);
      }
    }

    @media screen and (min-width: 1000px) {
      width: 572px;
      margin-top: 164px;

      h1 {
        font-size: var(--fontSize-48);
      }
    }
  }
}
</style>
