<template>
  <main>
    <div>
      <h2>PAGINA HOME</h2>
      <home-input></home-input>
    </div>
    <perfil-lateral/>
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
