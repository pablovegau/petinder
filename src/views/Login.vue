<template>
  <main class="page-login">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/images/logos/icon.svg" />
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">
        Inicia sesión en Petinder y encuentra a tu nuevo mejor amigo.
      </p>

      <form>
        <div class="form-group">
          <label class="form-label" for="username">Email</label>
          <input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            class="form-control"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <button v-on:click="login" class="btn btn-primary btn-lg">
          Iniciar sesión
        </button>
      </form>

      <p class="auth-bottom">
        ¿No tienes cuenta? <router-link class="alink" :to="{ name: 'Register' }">Regístrate</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'login',
  props: ['handleLogin'],
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function (e) {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.handleLogin(userCredential.user.email)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })

      e.preventDefault()
    }
  }
}
</script>
