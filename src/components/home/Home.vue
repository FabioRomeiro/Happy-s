<template>
  <main>
    <perfil-lateral/>
    <div>
      <h2>PAGINA HOME</h2>
      <home-input></home-input>
    </div>
    <div class="conteudo">
      <feed/>
    </div>
  </main>
</template>

<script>
import HomeInput from './HomeInput'
import PerfilLateral from '../perfilLateral/PerfilLateral.vue'
import Feed from './Feed.vue'

export default {
  created () {
    if (!this.isLogado) this.$router.push('login')
  },
  computed: {
    isLogado () {
      return this.$store.state.user
    }
  },
  components: {
    HomeInput,
    PerfilLateral,
    Feed
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
