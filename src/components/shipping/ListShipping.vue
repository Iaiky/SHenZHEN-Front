<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div><br/>
        <h1> Shippings</h1>
        <table class="content-tables">
            <thead>
                <tr>
                <td>id</td>
                <td>Sending date</td>
                <td>Arrival date</td>
                <td>N° container</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in shipping" :key="item.id" v-on:click="shippingPage(item.idshipping)">
                    <td>{{item.idshipping}}</td>
                    <td>{{item.dateenvoi}}</td>
                    <td>{{item.datearrive}}</td>
                    <td>{{item.container}}</td>
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
        name:'ListShippingPage',
        data(){
            return {
                shipping:[],
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
                let result = await axios.get("http://localhost:8000/api/shipping/");
                this.shipping = result.data.data;
            },
            shippingPage(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/ShippingPage/"+id})
            }
        },
        async mounted(){
            this.loadData();
        }
    }
</script>

<style>
    .content-tables{
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        min-width: 400px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        display: inline-block;
    }

    .content-tables thead tr {
        background-color: #1c8adb;
        color: #ffffff;
        text-align: left;
        font-weight: bold;
    }

    .content-tables th,
    .content-tables td {
        padding: 12px 15px;
    }

    .content-tables tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    .content-tables tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .content-tables tbody tr:last-of-type {
        border-bottom: 2px solid #1c8adb;
    }

    .content-tables tbody tr:hover {
        font-weight: bold;
        color: #1c8adb;
    }

    .content-tables tbody tr td button {
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

    .content-tables tbody tr td button:hover {
        background-color: rgb(194, 5, 5);
    }

    .content-tables tbody td a:hover {
        background-color: #7c747454;
    }
</style>