<template>
  <div class="footer__background">
    <footer class="footer">
      <div class="footer__left">2021 Petinder</div>
      <ul class="footer__right">
        <li v-for="copy in copies" :key="copy">
          <a href="">{{ copy }}</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['copies']
}
</script>

<style lang="scss">
  .footer {
    display: flex;
    flex-direction: column-reverse;
    padding: var(--spacing-24) var(--spacing-32);
    color: var(--grayColor-white);
    font-size: var(--fontSize-14);
    max-width: var(--layout-maxWidth);
    margin-left: auto;
    margin-right: auto;

    &__right {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--spacing-32);
    }

    & li:not(:last-child) {
      margin-bottom: var(--spacing-8);
    }

    a {
      display: block;
      color: var(--grayColor-white);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    @media screen and (min-width: 750px) {
      flex-direction: row;
      justify-content: space-between;

      &__right {
        flex-direction: row;
        margin-bottom: 0;
      }

      & li:not(:last-child) {
        margin-bottom: 0;
        margin-right: var(--spacing-24);
      }
    }
  }

  .footer__background {
    background-color: var(--color-purple);
    width: 100%;
  }
</style>
