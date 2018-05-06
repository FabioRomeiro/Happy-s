<template>
  <div>
    <!-- post -->
    <div class="post-container">
      <div class="post-user">
        <img src="../../assets/logo.png" alt="user">
        <span>Nome do user</span>
      </div>
      <p class="post-conteudo">{{post.message}}</p>

      <div class="post-opinar">
        <button class="post-like" :disabled="jaCurtiu" @click="curtir(post)">Curtir</button>
        <div class="post-novo-comentario">
          <!-- novo comentario -->

          <div class="novo-comentario-position">
            <label>
              <input v-model="novoComentario.isAnonimo" type="checkbox">
              Anônimo
            </label>
          </div>

          <textarea v-model="novoComentario.message"></textarea>
          <button @click="sendComentario(novoComentario)">Comentar</button>
        </div>
      </div>

    </div>
    <!-- comentarios -->
    <div class="posts-comentarios">
      <ul>
        <li v-for="comentario in post.comentarios" :key="comentario.id">
          <home-comentario :comentario="comentario"></home-comentario>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import HomeComentario from './HomeComentario'

export default {
  name: 'HomePost',
  props: [
    'post'
  ],
  created () {
    this.getComentarios()
  },
  data () {
    return {
      novoComentario: {
        idPost: this.post.id,
        idUsuario: this.$store.state.user.id,
        message: '',
        like: 0,
        isAnonimo: false,
        curtidores: []
      }
    }
  },
  methods: {
    sendComentario (comentario) {
      this.$http
        .post('http://localhost:3000/comentarios', comentario)
        .then(response => response.json())
        .then(novoComentario => {
          this.post.comentarios.push(novoComentario)
          comentario.message = ''
        })
    },
    getComentarios () {
      this.$http
        .get('http://localhost:3000/comentarios')
        .then(response => response.json())
        .then(response => { this.post.comentarios = response })
    },
    curtir (post) {
      if (this.jaCurtiu) return
      post.like += 1
      post.curtidores.push(this.userLogado.id)
      this.$http
        .put(`http://localhost:3000/posts/${post.id}`, post)
    }
  },
  computed: {
    jaCurtiu () {
      return this.post.curtidores.some(id => id === this.userLogado.id)
    },
    userLogado () {
      return this.$store.state.user
    }
  },
  components: {
    HomeComentario
  }
}
</script>

<style scoped>

</style>
