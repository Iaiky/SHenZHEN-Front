<template>
    <div id="app">
        <div class="register">
            <img class="logo" src="../assets/Logo-LK-Logistics.png"/>
            <h1>Sign Up</h1>
            <input type="text" v-model="name" placeholder="Name"/>
            <input type="email" v-model="email" placeholder="Email"/>
            <input type="Password" v-model="password" placeholder="Password"/>
            usertype
            <select name="type" v-model="usertype">
                    <option value="superadmin">Superadmin</option>
                    <option value="admin">Admin</option>
            </select>
            <button v-on:click="signUp" class="signUp-btn">Sign Up</button>
            <p>Do you have an account? <router-link to="/login">Log in</router-link></p>
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
                password:'',
                usertype:''
            }
        },
        methods : {
            async signUp(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/user/",
                    qs.stringify({
                        name:this.name,
                        email:this.email,
                        password:this.password,
                        usertype:this.usertype
                    })
                );

                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'Login'})
                }
            }
        }
    }
</script>

<style>
</style>
