<template>
    <div>
        <HeaderComp />
        <form class="addClient">
            <div class="title">Add new item </div>
            <div class="input-field">
                <label>Name :</label>
                <input type="text" name="name" placeholder="item name" v-model="item.name" /> 
            </div> 
            <div class="input-field">
                <label>Categories :</label>
                <select name="type" v-model="item.type">
                    <option v-for="item in type" :key="item.id" :value="item.idtype">{{item.name}}</option>
                </select>
            </div>
            <div class="input-field">
                <label>Price :</label>
                <input type="number" name="price" placeholder="item price" v-model="item.price" />
            </div> 
            <button type="button" v-on:click="addItem" >Add item</button>
            <router-link class="bk" to="/">Home</router-link>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    export default{
        name:'AddItem',
        data(){
            return {
                type:[],
                item : {
                    name:'',
                    type:'',
                    price:''
                }
            }
        },
        methods:{
            async loadData(){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                let result = await axios.get("http://localhost:8000/api/type/");
                this.type = result.data.data;
            },
            async addItem(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/Item/",
                    qs.stringify({
                        name:this.item.name,
                        type:this.item.type,
                        price:this.item.price
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListItem'})
                }
            }
        },
        components:{
            HeaderComp
        },
        mounted(){
            this.loadData();
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