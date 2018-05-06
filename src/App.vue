<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    if (!this.usuarioLogado) return this.$router.push('login')
    if (this.usuarioLogado.isAdmin) return this.$router.push('admin')
  },
  computed: {
    usuarioLogado () {
      return this.$store.state.user
    }
  }
}
</script>

<style>

</style>
