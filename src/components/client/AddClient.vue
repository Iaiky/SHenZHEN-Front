<template>
    <div>
        <HeaderComp />
        <form class="addClient">
            <div class="title">Add new client </div>
            <div class="input-field">
                <label>Name :</label>
                <input type="text" name="name" placeholder="name" v-model="client.name" />
            </div>   
            <div class="input-field">
                <label>Last Name :</label>
                <input type="text" name="forename" placeholder="Last name" v-model="client.forename" />
            </div>
            <div class="input-field">
                <label>Address :</label>
                <input type="text" name="address" placeholder="address" class="textarea" v-model="client.address" />
            </div>
            <div class="input-field">
                <label>Phone number :</label>
                <input type="text" name="tel" placeholder="phone number" v-model="client.tel" />
            </div>           
            <button type="button" v-on:click="addClient" >Add client</button>
            <router-link class="bk" to="/">Home</router-link>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    export default{
        name:'AddClient',
        components:{
            HeaderComp
        },
        data() {
            return {
                client :{
                    name :'',
                    forename:'',
                    address:'',
                    tel:''
                }
            }
        },
        methods:{
            async addClient(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/client/",
                    qs.stringify({
                        name:this.client.name,
                        forename:this.client.forename,
                        address:this.client.address,
                        tel:this.client.tel
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListClient'})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
        }
    }
</script>

<style>
    .addClient {
        border-radius: 10px;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 0 3px 0 rgba(0,0 , 0, 0.3);
        padding: 30px;
        margin: 20px auto;
    }

    .addClient .title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 25px;
        color: black;
        text-transform: uppercase;
    }

    .addClient .input-field {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
    }

    .addClient .input-field label {
        width: 200px;
        color: #757575;
        margin-right: 10px;
        font-size: 14px;
    }

    .addClient .input-field input {
        border-radius: 3px;
        padding: 10px;
        margin: 10px 0;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        border: 1px solid #999;
        outline: none;
    }

    .addClient .input-field .textarea {
        height: 100px;
    }

    .addClient button {
        color: #fff;
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        font-size: 15px;
        margin: 10px 0;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .bk {
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #1c8adb;
        transition: all 0.3s ease 0s;
    }

    .bk:hover {
        color: #93d4e4;
    }
</style>