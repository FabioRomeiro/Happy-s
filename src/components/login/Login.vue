<template>
  <div class="pagina-principal">
    <div @keyup.enter="efetuarLogin(user)" class="login-corpo">
        <h1 class="titulo">Happy's</h1>
        <div class="login-input">
          <section>
            <label for="email">E-mail</label>
            <input name="email" v-model="user.login" type="text" placeholder="">
          </section>
          <section>
            <label for="email">Senha</label>
            <input name="senha" v-model="user.password" type="password">
          </section>
          <button @click="efetuarLogin(user)">ENTRAR</button>
        </div>
    </div>
    <div class="banner-corpo"> 
      <div class="banner-image">
        <img src="../../assets/boi.svg" alt="boi">
      </div>
      <div class="banner-info">
        <h3>Um lugar para</h3>
        <span class="keyword"><vue-typer :text='[message[0], message[1]]' :shuffle='true'></vue-typer></span>
      </div>
      
      <!--FAZER COMPONENTE SEPARADO-->
      <!-- <h1>[NomeDoProjeto]</h1>
      <p>Momentos de tristeza e dificuldade são momentos de fragilidade.</p>
      <p class="banner-fade-palavras">
        <span>Uma</span> 
        <span class="keyword"><vue-typer :text='[message[0], message[1], message[2]]' :shuffle='true'></vue-typer></span>
      </p>
      <p>é sempre bem vinda nessas situações...</p>
      <p>Pensando na sua felicidade e tranquilidade, [a/o] [NomeDoProjeto] concentra estas pequenas palavras que te trarão um grande conforto</p>
      <p></p> -->
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  data () {
    return {
      user: {},
      message : ['ajudar', 'ser ajudado']
    }
  },
  methods: {
    efetuarLogin (user) {
      this.$http
        .get(`http://localhost:3000/users?login=${user.login}&password=${user.password}`)
        .then(response => response.json())
        .then(response => {
          if (response.length) {
            this.$store.commit('setUser', response[0])
            this.$router.push('home')
          }
        })
    }
  },
  components : {
    VueTyper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
