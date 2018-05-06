<template>
  <main class="admin-funcionarios-corpo">
    <div class="funcionarios-pesquisa">
      <input v-model="search" placeholder="Pesquisar" type="text">
      <ul class="funcionarios-lista">
        <li @click="setUsuarioLogado(user)"
            v-for="user in filtroUsuarios"
            :key="user.id">{{user.name }}</li>
      </ul>
    </div>
    <div v-if="usuarioSelecionado" class="funcionario-selecionado">
      <div class="selecionado-info">
        <img src="../../assets/logo.png" alt="foto do usuario">
        <div class="selecionado-info-ocupacao">
          <h4>{{ usuarioSelecionado.name }}</h4>
          <p>{{ usuarioSelecionado.cargo }}</p>
        </div>
      </div>
      <div class="funcionario-dados">
        <div class="dado">
          <span class="numero">{{ curtidasNoPost }}</span>
          <p>Curtidas no post</p>
          
        </div>
        <div class="dado">
          <span class="numero">{{ curtidasEmComentario }}</span>
          <p>Curtidas em comentarios</p>
          
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AdminFuncionarios',
  created () {
    if (!this.usuarioLogado) return this.$router.push('login')
    if (!this.usuarioLogado.isAdmin) return this.$router.push('login')
    this.getUsers()
  },
  data () {
    return {
      search: '',
      users: [],
      usuarioSelecionado: null,
      posts: [],
      comentarios: []
    }
  },
  computed: {
    usuarioLogado () {
      return this.$store.state.user
    },
    filtroUsuarios () {
      if (!this.search) return
      const regex = new RegExp(this.search, 'g')
      return this.users.filter(user => user.name.match(regex))
    },
    curtidasNoPost () {
      return this.posts.reduce((acc, post) => {
        acc += post.like
        return acc
      }, 0)
    },
    curtidasEmComentario () {
      return this.posts.reduce((acc, comentario) => {
        acc += comentario.like
        return acc
      }, 0)
    }
  },
  methods: {
    getUsers () {
      this.$http
        .get(`http://localhost:3000/users`)
        .then(response => response.json())
        .then(response => { this.users = response })
    },
    setUsuarioLogado (user) {
      this.usuarioSelecionado = user
      this.$http
        .get(`http://localhost:3000/posts?userId=${user.id}`)
        .then(response => response.json())
        .then(response => { this.posts = response })
      this.$http
        .get(`http://localhost:3000/comentarios?idUsuario=${user.id}`)
        .then(response => response.json())
        .then(response => { this.comentarios = response })
    }
  }
}
</script>

<style scoped>

</style>
