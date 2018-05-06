<template>
  <div>
    <perfil-lateral/>
    <div class="admin-corpo container">
      <ul class="admin-corpo-menu">
        <li>
          <router-link to="/admin/funcionarios">Funcionarios</router-link>
        </li>
        <li>
          <router-link to="/admin/ranking">Ranking</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PerfilLateral from '../perfilLateral/PerfilLateral.vue'

export default {
  components: {
    PerfilLateral
  },
  created () {
    if (!this.usuarioLogado) this.$router.push('login')
    if (!this.usuarioLogado.isAdmin) return this.$router.push('login')
  },
  computed: {
    funcionariosRoute () {
      return '/admin/funcionarios'
    },
    usuarioLogado () {
      return this.$store.state.user
    },
    rankingRoute () {
      return '/admin/ranking'
    }
  }

}
</script>