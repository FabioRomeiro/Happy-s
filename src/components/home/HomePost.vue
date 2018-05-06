<template>
  <div>
    <!-- post -->
    <div class="post-container">
      <div class="post-user">
        <img src="" alt="user">
        <span>Nome do user</span>
      </div>
      <p class="post-conteudo">{{post.message}}</p>
      
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
    }
  },
  components: {
    HomeComentario
  }
}
</script>

<style scoped>

</style>
