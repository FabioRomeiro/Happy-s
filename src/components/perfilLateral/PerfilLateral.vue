<template>
  <aside class="perfil-lateral">
    <img class="perfil-lateral-logo" src="../../assets/logo.png" alt="logo da plataforma">
    <h3 class="perfil-lateral-username">{{userInfo.name}}</h3>
    <ul class="perfil-lateral-infos">
        <li>Posts escritos: 545</li>
        <li>Sentimentos recebidos: {{userInfo.sentimentos}}</li>
    </ul>
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
  }
}
</script>

<style>
</style>
