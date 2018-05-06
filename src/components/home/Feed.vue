<template>
  <div class="feed"
       v-infinite-scroll="loadMore"
       infinite-scroll-disabled="busy"
       infinite-scroll-distance="10">
    <ul class="feed-posts">
      <li class="feed-posts-post" v-for="post in posts" :key="post.id">
        <p class="post-topico">{{post.title}}</p>
        <p class="post-conteudo">{{post.message}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      posts: [],
      start: 0,
      limitByLoad: 10,
      busy: false,
      total: null
    }
  },
  created () {
    this.loadMore()
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
    }
  }
}
</script>

<style>
</style>
