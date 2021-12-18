<template>
  <Header
    v-if="isNotFound"
    @toogleMenu="toogleMenu"
    :positionIsTop="positionIsTop"
    :isHome="isHome"
    :isLoggedIn="isLoggedIn"
    :currentUser="currentUser"
    :handleLogout="handleLogout"
    :show="showMobileMenu"
  />
  <MobileMenu
    v-if="isNotFound"
    :show="showMobileMenu"
    :isLoggedIn="isLoggedIn"
    :currentUser="currentUser"
    :handleLogout="handleLogout"
  />
  <router-view :key="$route.fullPath" :isLoggedIn="isLoggedIn" :handleLogin="handleLogin" />
  <Footer :copies="footerCopies" v-if="isNotFound" />
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import Header from '@/components/Header.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    MobileMenu,
    Footer
  },
  data () {
    return {
      footerCopies: ['Términos y condiciones de uso', 'Política de privacidad', 'Cookies', 'FAQ'],
      showMobileMenu: false,
      positionIsTop: true,
      isLoggedIn: false,
      currentUser: {}
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toogleMenu () {
      this.showMobileMenu = !this.showMobileMenu
    },
    handleScroll (e) {
      const yPosition = e.target.scrollingElement.scrollTop

      if (yPosition > 10) {
        this.positionIsTop = false
      } else {
        this.positionIsTop = true
      }
    },
    handleLogin (email) {
      if (email) {
        this.isLoggedIn = true
      }

      this.currentUser = {
        ...this.currentUser,
        email
      }
    },
    handleLogout () {
      const auth = getAuth()
      signOut(auth).then(() => {
        this.isLoggedIn = false
        this.currentUser = {}
        this.$router.push({ name: 'Home' })
      }).catch(console.log)
    }
  },
  computed: {
    isNotFound () {
      return this.$route.name !== 'NotFound'
    },
    isHome () {
      return this.$route.name === 'Home'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: var(--base-fontFamily);
}
</style>
