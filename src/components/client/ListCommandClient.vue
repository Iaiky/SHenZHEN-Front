<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <h1> List of command :</h1>
        <table class="content-table">
            <thead>
                <tr>
                <td>idCommand</td>
                <td>Date command</td>
                <td>Client</td>
                <td>Item</td>
                <td>Category</td>
                <td>Quantity</td>
                <td>Price </td>
                <td>Sending date</td>
                <td>Arrival date</td>
                <td>Container</td>
                <td>Paiement status</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in command" :key="item.id" v-on:click="commandPage(item.idcommand)">
                    <td>{{item.idcommand}}</td>
                    <td>{{item.datecommand}}</td>
                    <td>{{item.client}}</td>
                    <td>{{item.article}}</td>
                    <td>{{item.category}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.dateenvoi}}</td>
                    <td>{{item.datearrive}}</td>
                    <td>{{item.container}}</td>
                    <td v-if="item.statut">paid</td><td v-else>Not paid</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import SideBarComp from '../Sidebar.vue'
    import axios from 'axios';
    export default{
        name:'ListCommandClient',
        data(){
            return {
                command:[],
                usertype:''
            }
        },
        components:{
            HeaderComp,
            SideBarComp
        },
        methods:{
            async loadData(){
                let user = localStorage.getItem('user-info');
                this.usertype= JSON.parse(user)[0].usertype;
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                let result = await axios.get("http://localhost:8000/api/command/commandclientlist/"+this.$route.params.idclient);
                this.command = result.data.data;
                console.warn(this.command[0].client)
            },
            commandPage(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/CommandPage/"+id})
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
        margin-left: 100px;
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