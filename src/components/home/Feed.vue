<template>
    <div class="feed">
        <ul class="feed-posts">
            <li class="feed-posts-post" v-for="post of posts" :key="post.id">
                <p class="post-topico">{{post.topico}}</p>
                <p class="post-conteudo">{{post.conteudo}}</p>
            </li>
        </ul>
    </div>    
</template>

<script>
    export default{
        data(){

            return{
                posts : [
                    {
                        "id" : 0,
                        "topico" : "Atropelei meu gato",
                        "conteudo" : "Estou muito triste pq atropelei meu gato"
                    },
                    {
                        "id" : 1,
                        "topico" : "Atropelei meu gato",
                        "conteudo" : "Estou muito triste pq atropelei meu gato"
                    },
                    {
                        "id" : 2,
                        "topico" : "Atropelei meu gato",
                        "conteudo" : "Estou muito triste pq atropelei meu gato"
                    }
                ]
            }
        }
    }
</script>
