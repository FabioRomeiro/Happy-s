<template>
  <div>
    <div>
      <h4>comentario do {{ usuario.name }}</h4>
      <p>message: {{ comentario.message }}</p>
      <p>like: {{ comentario.like }}</p>
      <p>anonimo: {{ comentario.isAnonimo }}</p>
    </div>
    <button :disabled="jaCurtiu" @click="curtir(comentario)">curtir comentario</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComentario',
  props: [
    'comentario'
  ],
  data () {
    return {
      usuario: {}
    }
  },
  methods: {
    getUsuario () {
      this.$http
        .get(`http://localhost:3000/users/${this.comentario.idUsuario}`)
        .then(response => response.json())
        .then(response => {
          this.usuario = response
        })
    },
    curtir (comentario) {
      if (this.jaCurtiu) return
      comentario.like += 1
      comentario.curtidores.push(this.usuario.id)
      this.$http
        .put(`http://localhost:3000/comentarios/${comentario.id}`, comentario)
    }
  },
  computed: {
    jaCurtiu () {
      return this.comentario.curtidores.some(id => id === this.usuario.id)
    }
  },
  created () {
    this.getUsuario()
  }
}
</script>

<style scoped>

</style>
