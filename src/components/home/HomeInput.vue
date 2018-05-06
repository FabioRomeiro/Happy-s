<template>
  <div>
    <textarea v-model="post.message"></textarea>
    <div>
      <label>
        <input v-model="post.isAnonimo" type="checkbox">
        Anônimo
      </label>
      <button @click="sendPost(post)">Enviar</button>
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
        userId: this.$store.state.user.id
      }
    }
  },
  methods: {
    sendPost () {
      this.$http
        .post('http://localhost:3000/posts', this.post)
        .then(() => { this.post.message = '' })
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
