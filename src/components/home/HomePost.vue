<template>
  <div class="post">
    <!-- post -->
    <div class="post-content">
      <div class="post-content__user">
        <img src="../../assets/logo.png" alt="user">
        <span>{{ user.name }}</span>
      </div>
      <p class="post-content__text">{{post.message}}</p>
      <div class="post-content__info">
        <div class="group">
          <div>
            <button class="link" :class="{'active': jaCurtiu}" :disabled="jaCurtiu"
                    @click="curtir(post)">
              Curtir
              <span>{{ post.like }}</span>
            </button>
            <button class="link" @click="showComentar = true">Comentar</button>
          </div>
        </div>
        <label class="link">
          <input v-model="novoComentario.isAnonimo" type="checkbox">
          Anônimo
        </label>
      </div>
      <div class="post-content__new" v-if="showComentar">
        <!-- novo comentario -->
        <textarea v-model="novoComentario.message"></textarea>
        <div class="group">
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
    this.$http
      .get(`http://localhost:3000/users/${this.post.userId}`)
      .then(response => response.json())
      .then(response => {
        this.user = response
      })
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
      },
      user: {},
      showComentar: false
    }
  },
  methods: {
    sendComentario (comentario) {
      this.$http
        .post('http://localhost:3000/comentarios', comentario)
        .then(response => response.json())
        .then(novoComentario => {
          this.showComentar = false
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
  },
}
</script>

<style scoped lang="scss">
  .post {
    background-color: white;
  }
</style>
