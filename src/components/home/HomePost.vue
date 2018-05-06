<template>
  <div>
    <!-- post -->
    <div>
      <div class="post-user">
        <img src="" alt="user">
        <span>Nome do user</span>
      </div>
      <p class="post-conteudo">{{post.message}}</p>
      <p>data {{ post.date |  moment('DD/MM/YYYY hh:mm:ss') }}</p>
      <p>like: {{ post.like }}</p>
      <button :disabled="jaCurtiu" @click="curtir(post)">curtir o post</button>

      <div class="post-opinar">
        <div class="post-novo-comentario">
          <!-- novo comentario -->
          <textarea v-model="novoComentario.message"></textarea>

          <div class="novo-comentario-position">
            <label>
              <input v-model="novoComentario.isAnonimo" type="checkbox">
              Anônimo
            </label>
            <button @click="sendComentario(novoComentario)">comentar</button>
          </div>

        </div>
      </div>

    </div>
    <!-- comentarios -->
    <div>
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
