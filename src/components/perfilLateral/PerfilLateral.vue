<template>
  <aside class="perfil-lateral">
    <img class="perfil-lateral-logo" src="../../assets/logo.png" alt="logo da plataforma">
    <h3 class="perfil-lateral-username">tal</h3>
    <ul class="perfil-lateral-infos">
        <li>Quantidade de posts escritos: 545</li>
        <li>Quantidade de curtidas recebidas: {{users}}</li>
    </ul>
  </aside>
</template>

<script>
    export default{
        data(){
            return{
                users : []
            }
        },
        created(){
            
        }
    }
</script>
