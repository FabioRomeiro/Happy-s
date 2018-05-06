<template>
  <aside class="perfil-lateral">
    <h1 class="titulo">Happy's</h1>
    <div class="perfil-notificacoes">
      <div class="notificacoes-icone">
        <span>Mensagens</span>
        <img src="../../assets/msg.svg" alt="mensagens">
      </div>
      <div class="notificacoes-icone">
        <span>Notificações</span>
        <img src="../../assets/notificacao.svg" alt="notificacoes">
      </div>
    </div>
    <div @click="avisaLogout()" class="perfil-lateral-user">
      <span @click="logout()" class="logout" v-if="visivel">Sair da Seção?</span>
      <h3 class="perfil-lateral-username">
        {{usuarioLogado.name}}
      </h3>
      <img class="perfil-lateral-logo" src="../../assets/logo.png" alt="logo da plataforma">
    </div>
  </aside>
</template>

<script>
export default{
  data () {
    return {
      visivel : false
    }
  },
  computed: {
    usuarioLogado () {
      return this.$store.state.user
    }
  },
  methods:{
    avisaLogout(){
      this.visivel = !this.visivel
      return this.visivel;
    },
    logout(){
      this.$store.commit('setUser',null);
      this.route.push('login');
    }
  }
}
</script>

<style>
  .perfil-lateral {
    position: relative;
  }
</style>
