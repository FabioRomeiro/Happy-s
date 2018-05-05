<template>
  <div class="home-corpo">
      <!-- <perfil-lateral/> -->
      <div class="conteudo">
        <feed/>
      </div>
  </div>
</template>

<script>
import PerfilLateral from '../perfilLateral/PerfilLateral.vue';
import Feed from './Feed.vue';
  export default {
  components : {
  'perfil-lateral' : PerfilLateral,
  'feed' : Feed
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
