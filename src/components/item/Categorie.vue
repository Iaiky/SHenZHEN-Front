<template>
    <div>
        <HeaderComp />
        <h1> Welcome to categories list page</h1>
        <h2>All Categories</h2>
        <table class="content-table">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in types" :key="item.id">
                    <td>{{item.idtype}}</td>
                    <td>{{item.name}}</td>
                    <td>
                        <router-link :to="'/updateType/'+item.idtype" >Update</router-link>
                        <button v-on:click="deleteType(item.idtype)" >Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <form class="addClient">
            <div class="input-field">
                <label>Name</label>
                <input type="text" name="name" placeholder="new category name" v-model="type.name" /> 
            </div>
            <button type="button" v-on:click="addType" >Add categorie</button>
        </form> 
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    export default{
        name:'CategorieType',
        data(){
            return {
                type:{
                    name:''
                },
                types:[]
            }
        },
        components:{
            HeaderComp
        },
        methods:{
            async deleteType(id){
                let result = await axios.delete("http://localhost:8000/api/type/"+id);
                console.warn(result);
                if(result.status==200){
                    this.loadData();
                }
            },
            async loadData(){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                let result = await axios.get("http://localhost:8000/api/type/");
                this.types = result.data.data;         
            },
            async addType(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/type/",
                    qs.stringify({
                        name:this.type.name,
                    })
                );
                console.warn(result);
                // location.reload();
                this.loadData();
            }
        },
        async mounted(){
            this.loadData();
        }
    }
</script>

<style>
    .content-table{
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        min-width: 500px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        display: inline-block;
    }

    .content-table thead tr {
        background-color: #1c8adb;
        color: #ffffff;
        text-align: left;
        font-weight: bold;
    }

    .content-table th,
    .content-table td {
        padding: 12px 15px;
    }

    .content-table tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    .content-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .content-table tbody tr:last-of-type {
        border-bottom: 2px solid #1c8adb;
    }

    .content-table tbody tr:hover {
        font-weight: bold;
        color: #1c8adb;
    }

    .content-table tbody tr td button {
        color: #fff;
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        font-size: 15px;
        margin: 5px 0;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: red;
    }

    .content-table tbody tr td button:hover {
        background-color: rgb(194, 5, 5);
    }

    .content-table tbody td a:hover {
        background-color: #7c747454;
    }
</style>