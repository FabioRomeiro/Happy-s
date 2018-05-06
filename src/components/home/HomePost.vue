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
    </div>
    <!-- comentarios -->
    <div>
      <ul>
        <li v-for="comentario in post.comentarios" :key="comentario.id">
          {{ comentario.message }}
        </li>
      </ul>
    </div>
    <!-- novo comentario -->
    <div>
      <textarea v-model="novoComentario.message"></textarea>
      <button @click="sendComentario(novoComentario)">comentar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePost',
  props: [
    'post'
  ],
  data () {
    return {
      novoComentario: {
        idPost: this.post.id,
        idUsuario: this.$store.state.user.id,
        message: '',
        like: 0
      }
    }
  },
  methods: {
    sendComentario (comentario) {

      this.$http
        .post('http://localhost:3000/comentarios', comentario)
        .then(() => {
          const novoComentario = Object.assign({}, comentario)
          this.post.comentarios.push(novoComentario)
          comentario.message = ''
        })
    }
  }
}
</script>

<style scoped>

</style>
