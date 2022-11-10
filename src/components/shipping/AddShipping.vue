<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <form class="addClient">
            <div class="title">Add shipping </div>
            <div class="input-field">
                <label>Sending date :</label>
                <input type="date" name="dateenvoi" placeholder="Sending date of items" v-model="shipping.dateenvoi" />
            </div>   
            <div class="input-field">
                <label>Arrival date :</label>
                <input type="date" name="dateenvoi" placeholder="Arrival date of items" v-model="shipping.datearrive" />
            </div>
            <div class="input-field">
                <label>N° Container :</label>
                <input type="text" name="container" placeholder="container number" v-model="shipping.container" />
            </div>           
            <button type="button" v-on:click="addShipping" >Add</button>
            <router-link class="bk" to="/">Home</router-link>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import SideBarComp from '../Sidebar.vue'
    import axios from 'axios';
    export default{
        name:'AddShipping',
        components:{
            HeaderComp,
            SideBarComp
        },
        data() {
            return {
                shipping :{
                    dateenvoi :'',
                    datearrive:'',
                    container:''
                },
                usertype:''
            }
        },
        methods:{
            async addShipping(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/shipping/",
                    qs.stringify({
                        dateenvoi:this.shipping.dateenvoi,
                        datearrive:this.shipping.datearrive,
                        container:this.shipping.container
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListShipping'})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            this.usertype= JSON.parse(user)[0].usertype;
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
</style>