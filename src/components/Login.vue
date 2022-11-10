<template>
    <div id="app">
        <div class="login">
            <img class="logo" src="../assets/Logo-LK-Logistics.png"/>
            <h1>Login</h1>
            <input type="text" v-model="email" placeholder="Enter Email"/>
            <input type="Password" v-model="password" placeholder="Enter Password"/>
            <button v-on:click="login" class="signUp-btn">Log in</button>
            <p>Create an account <router-link to="/sign-up">Sign Up</router-link></p>
        </div>
    </div>  
</template>

<script>
    import axios from 'axios'
    export default{
        name:'LoginPage',
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            async login(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/user/auth",
                    qs.stringify({
                        email:this.email,
                        password:this.password
                    })
                );

                console.warn(result);
                if(result.status==200){
                    localStorage.setItem("user-info",JSON.stringify(result.data.data))
                    this.$router.push({name:'Home'})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'Home'})
            }
        }
    }
</script>

<style>
    
</style>