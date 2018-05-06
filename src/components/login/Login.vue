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
        <div class="banner-slogan">
          <h3>Um lugar para</h3>
          <span class="keyword"><vue-typer :text='[message[0], message[1]]'></vue-typer></span>
        </div>
        <div class="banner-cadastro-form">
          <div class="form-nome">
            <input type="text" placeholder="Nome">
            <input type="text" placeholder="Sobrenome">
          </div>
          <input type="email" placeholder="Email">
          <input type="password" placeholder="senha">
          <div class="form-botao">
            <button>CADASTRE-SE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  data () {
    return {
      user: {},
      message: ['ajudar!', 'ser ajudado!']
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
  components: {
    VueTyper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $duracao: 800ms;

  .login-corpo {
    animation: intro-menu;
    animation-play-state: unset;
    animation-duration: $duracao;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @keyframes intro-menu {
      0% {
        transform: translateY(-200px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .banner-image {
    animation: intro-boi;
    animation-play-state: unset;
    animation-duration: $duracao;

    @keyframes intro-boi {
      0% {
        transform: translateX(-500px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  .banner-info {
    animation: intro-info;
    animation-play-state: unset;
    animation-duration: $duracao;

    @keyframes intro-info {
      0% {
        transform: translateX(500px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
</style>
