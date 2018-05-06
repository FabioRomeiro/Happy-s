<template>
  <div class="home-input">
    <div class="home-input__container">
      <div class="home-input__enter">
        <textarea v-model="post.message" placeholder="O que você gostaria de compartilhar?"></textarea>
      </div>
      <div class="home-input__options">
        <label>
          <input class="home-options-check" v-model="post.isAnonimo" type="checkbox">
          Anônimo
        </label>
        <button @click="sendPost(post)">PUBLICAR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInput',
  data () {
    return {
      post: {
        message: '',
        isAnonimo: false,
        userId: this.$store.state.user.id,
        comentarios: [],
        curtidores: [],
        like: 0
      }
    }
  },
  methods: {
    sendPost (post) {
      post.date = new Date()
      this.$http
        .post('http://localhost:3000/posts', post)
        .then(response => response.json())
        .then(newPost => {
          this.$emit('newPost', newPost)
          this.post.message = ''
          this.post.title = ''
        })
    }
  },
  computed: {
    getUserLogadoId () {
      return this.$store.state.user.id
    }
  }
}
</script>

<style scoped>

</style>
