<template>
  <div>
    <perfil-lateral/>
    <main class="container">
      <home-input @newPost="addNewPost"></home-input>
      <div class="conteudo">
        <div class="feed"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="10">
          <ul class="feed-posts">
            <li class="feed-posts-post" v-for="post in postsByDate" :key="post.id">
              <home-post :post="post"></home-post>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HomeInput from './HomeInput'
import HomePost from './HomePost'
import PerfilLateral from '../perfilLateral/PerfilLateral.vue'

export default {
  created () {
    if (!this.usuarioLogado) this.$router.push('login')
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
    usuarioLogado () {
      return this.$store.state.user
    },
    postsByDate () {
      return this.posts.slice(0).sort((a, b) => new Date(a.date) < new Date(b.date))
    }
  },
  components: {
    HomeInput,
    PerfilLateral,
    HomePost
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    background-color: white;
    margin: 0 auto;
    max-width: 1200px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
</style>
