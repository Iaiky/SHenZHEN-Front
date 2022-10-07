<template>
    <div id="app">
        <div class="register">
            <img class="logo" src="../assets/Logo-LK-Logistics.png"/>
            <h1>Sign Up</h1>
            <input type="text" v-model="name" placeholder="Enter Name"/>
            <input type="text" v-model="email" placeholder="Enter Email"/>
            <input type="Password" v-model="password" placeholder="Enter Password"/>
            <button v-on:click="signUp" class="signUp-btn">Sign Up</button>
            <p>Do you have an account? <router-link to="/login">Login</router-link></p>
        </div>
    </div>  
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'SignUp',
        data(){
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods : {
            async signUp(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/user/",
                    qs.stringify({
                        name:this.name,
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
