<template>
  <main>
    <perfil-lateral/>
    <div>
      <h2>PAGINA HOME</h2>
      <home-input @newPost="addNewPost"></home-input>
    </div>
    <div class="conteudo">
      <div class="feed"
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="busy"
           infinite-scroll-distance="10">
        <ul class="feed-posts">
          <li class="feed-posts-post" v-for="post in postsByDate" :key="post.id">
            <p class="post-topico">{{post.title}}</p>
            <p class="post-conteudo">{{post.message}}</p>
            <p>data {{ post.date |  moment('DD/MM/YYYY hh:mm:ss') }}</p>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import HomeInput from './HomeInput'
import PerfilLateral from '../perfilLateral/PerfilLateral.vue'

export default {
  created () {
    if (!this.isLogado) this.$router.push('login')
    this.loadMore()
  },
  data () {
    return {
      start: 0,
      limitByLoad: 10,
      busy: false,
      total: null,
      posts: []
    }
  },
  methods: {
    loadMore () {
      if (this.busy || this.posts.length === this.total) return
      this.busy = true
      this.$http
        .get(`http://localhost:3000/posts?_start=${this.start}&_limit=${this.limitByLoad}`)
        .then(response => {
          this.start += this.limitByLoad
          this.total = Number(response.headers.map['x-total-count'][0])
          return response.json()
        })
        .then(posts => {
          this.posts = this.posts.concat(posts)
          this.busy = false
        })
    },
    addNewPost (post) {
      this.posts.push(post)
    }
  },
  computed: {
    isLogado () {
      return this.$store.state.user
    },
    postsByDate () {
      return this.posts.slice(0).sort((a, b) => new Date(a.date) < new Date(b.date))
    }
  },
  components: {
    HomeInput,
    PerfilLateral
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
