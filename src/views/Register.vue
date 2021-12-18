<template>
  <main class="page-register">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/images/logos/icon.svg" />
      <h1 class="main-title">Registro</h1>
      <p class="auth-intro">
        Regístrate en Petinder y encuentra a tu nuevo mejor amigo.
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
        <button v-on:click="register" class="btn btn-primary btn-lg">
          Registrar
        </button>
      </form>

      <p class="auth-bottom">
        ¿Ya tienes cuenta? <router-link class="alink" :to="{ name: 'Login' }">Inicia sesión</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'register',
  props: ['handleLogin'],
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function (e) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
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
