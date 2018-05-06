<template>
  <div>
    <ul class="admin-ranking-corpo">
      <li class="ranking-headers">
        <span>Nome</span>
        <span>Curtidas</span>
        <span>Comentários</span>
        <span>Balanço</span>
      </li>
      <li v-for="user in users" :key="user.id">
        <p class="ranking-nome">{{ user.name }}</p>
        <p>{{ getAllLikes(user) }}</p>
        <p>{{ getAllComentarios(user) }}</p>
        <p>{{ getAllLikes(user) - getAllComentarios(user) }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminRanking',
  data () {
    return {
      users: [],
      posts: [],
      comentarios: []
    }
  },
  methods: {
    getAllLikes (user) {
      let like = this.posts.reduce((acc, post) => {
        acc += post.like
        return acc
      }, 0)
      like += this.comentarios.reduce((acc, comentario) => {
        acc += comentario.like
        return acc
      }, like)
      return like
    },
    getAllComentarios (user) {
      return this.comentarios.reduce((acc, comentario) => {
        if (comentario.idUsuario === user.idUsuario) acc++
        return acc
      }, 0)
    }
  },
  created () {
    this.$http
      .get(`http://localhost:3000/posts`)
      .then(response => response.json())
      .then(response => { this.posts = response })
    this.$http
      .get(`http://localhost:3000/users`)
      .then(response => response.json())
      .then(response => { this.users = response })
    this.$http
      .get(`http://localhost:3000/comentarios`)
      .then(response => response.json())
      .then(response => { this.comentarios = response })
  }
}
</script>

<style scoped>

</style>
