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
      post: {}
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
