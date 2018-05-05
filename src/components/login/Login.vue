<template>
  <div @keyup.enter="efetuarLogin(user)">
      <h2>PAGINA DE LOGIN</h2>
      <input v-model="user.login" type="text" placeholder="login">
      <input v-model="user.password" type="password" placeholder="password">
      <button @click="efetuarLogin(user)">Login</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    efetuarLogin (user) {
     this.$http
      .get(`http://localhost:3000/users?login=${user.login}&password=${user.password}`)
      .then(response => response.json())
      .then(response => {
        if (response.length) this.$router.push('home')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
