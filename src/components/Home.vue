<template>
    <div>
        <HeaderComp />
        <h1> Welcome to HomePage {{name}} </h1>
        <h1>Client</h1>
        <h1>Command</h1>
        <h1>Article</h1>
    </div>
</template>

<script>
    import HeaderComp from './Header.vue'
    import axios from 'axios';
    export default{
        name:'HomePage',
        data(){
            return {
                name:'',
                client:[],
            }
        },
        components:{
            HeaderComp
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.name= JSON.parse(user)[0].name;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get("http://localhost:8000/api/client/");
            console.warn(result)
            this.client = result.data.data;
        }
    }
</script>