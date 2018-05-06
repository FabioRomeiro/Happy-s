<template>
  <div>
    <perfil-lateral/>
    <ul>
      <li>
        <router-link to="/admin/funcionarios">Funcionarios</router-link>
      </li>
      <li>
        <router-link to="/admin/ranking">Ranking</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import PerfilLateral from '../perfilLateral/PerfilLateral.vue'

export default {
  components: {
    PerfilLateral
  },
  computed: {
    funcionariosRoute () {
      return '/admin/funcionarios'
    },
    rankingRoute () {
      return '/admin/ranking'
    }
  }

}
</script>

<style scoped>

</style>
