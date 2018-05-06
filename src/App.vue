<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    if (!this.isLogado) this.$router.push('login')
  },
  computed: {
    isLogado () {
      return this.$store.state.user
    }
  }
}
</script>

<style>

</style>
