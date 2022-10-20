<template>
    <div>
        <HeaderComp />
        <h1> Welcome to list of Item page,</h1>
        <h2>All Items</h2>
        <table class="content-table">
            <thead>
                <tr>
                <td>id</td>
                <td>Name</td>
                <td>categories</td>
                <td>price</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{item.idarticle}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.price}}</td> 
                    <td>
                        <router-link :to="'/updateItem/'+item.idarticle" >Update</router-link>
                        <button v-on:click="deleteItem(item.idarticle)" >Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    export default{
        name:'ListItem',
        data(){
            return {
                items:[]
            }
        },
        components:{
            HeaderComp
        },
        methods:{
            async deleteItem(id){
                let result = await axios.delete("http://localhost:8000/api/item/"+id);
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
                let result = await axios.get("http://localhost:8000/api/item/list");
                this.items = result.data.data;         
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