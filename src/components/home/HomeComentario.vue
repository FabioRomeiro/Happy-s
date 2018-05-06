<template>
  <div class="home-comentario-corpo">
    <img v-if="!comentario.isAnonimo" src="../../assets/logo.png" alt="foto">
    <img v-if="comentario.isAnonimo" src="../../assets/profile/0.jpg" alt="foto">
    <div>
      <div class="home-comentario-item">
        <h4 v-if="!comentario.isAnonimo">{{ user.name }}</h4>
        <h4 v-if="comentario.isAnonimo">Anônimo</h4>
        <p>{{ comentario.message }}</p>
      </div>
      <button class="link" :class="{'active': jaCurtiu}" :disabled="jaCurtiu" @click="curtir(comentario)">
        curtir {{ comentario.like }}
      </button>
    </div>
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
      user: {}
    }
  },
  methods: {
    getOwnerUsuario () {
      this.$http
        .get(`http://localhost:3000/users/${this.comentario.idUsuario}`)
        .then(response => response.json())
        .then(response => {
          this.user = response
        })
    },
    curtir (comentario) {
      if (this.jaCurtiu) return
      comentario.like += 1
      comentario.curtidores.push(this.userLogado.id)
      this.$http
        .put(`http://localhost:3000/comentarios/${comentario.id}`, comentario)
    }
  },
  computed: {
    jaCurtiu () {
      return this.comentario.curtidores.some(id => id === this.userLogado.id)
    },
    userLogado () {
      return this.$store.state.user
    }
  },
  created () {
    this.getOwnerUsuario()
  }
}
</script>

<style scoped>
  img {
    border: 2px solid #a5a5a5;
  }
</style>
