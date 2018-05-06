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
    <div class="perfil-lateral-user">
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
      userInfo: {
        'id': 0,
        'login': 'flromeiroc',
        'password': 'teste123',
        'name': 'Fabio',
        'sentimentos': 65
      }
    }
  },
  computed: {
    usuarioLogado () {
      return this.$store.state.user
    }
  }
}
</script>

<style>
  .perfil-lateral {
    position: relative;
  }
</style>
