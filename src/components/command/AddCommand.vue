<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <form class="addClient">
            <div class="title">Add new command </div>
            <div>
                <label>Client</label>
                <vSelect label="name" :options="clients" :reduce="(client) => client.idclient" v-model="command.idclient" ></vSelect>
            </div>
            <div>
                <label>Article</label>
                <vSelect label="name" :options="items" :reduce="(item) => item.idarticle" v-model="command.idarticle" ></vSelect>
            </div>   
            <div>
                <label>N° of Shipping</label>
                <vSelect label="idshipping" :options="shippings" :reduce="(shipping) => shipping.idshipping" v-model="command.idshipping" ></vSelect>
            </div> 
            <div class="input-field">
                <label>Quantity</label>
                <input type="number" name="quantity" placeholder="Enter the quantity" v-model="command.quantity" />
            </div>
            <div class="input-field">
                <label>Paiement status :</label>
                <input type="checkbox" id="status" v-model="command.statut" />
            </div>
            <button type="button" v-on:click="addCommand" >Add command</button>
            <router-link class="bk" to="/">Home</router-link>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';
    import SideBarComp from '../Sidebar.vue'
    export default{
        name:'AddClient',
        components:{
            HeaderComp,
            vSelect,
            SideBarComp
        },
        data() {
            return {
                clients : [],
                items : [],
                shippings : [],
                command :{
                    idclient :'',
                    idarticle:'',
                    idshipping:'',
                    quantity:'',
                    statut: 0,
                    iduser:''
                },
                usertype:''
            }
        },
        methods:{
            async addCommand(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:8000/api/command/",
                    qs.stringify({
                        quantity: this.command.quantity,
                        statut: this.command.statut,
                        idclient: this.command.idclient,
                        idarticle: this.command.idarticle,
                        idshipping: this.command.idshipping,
                        iduser: this.command.iduser
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListCommand'})
                }
            },
            async loadData(){
                let user = localStorage.getItem('user-info');
                this.usertype= JSON.parse(user)[0].usertype;
                this.command.iduser= JSON.parse(user)[0].id;
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                let result = await axios.get("http://localhost:8000/api/client/list");
                this.clients = result.data.data;

                let response = await axios.get("http://localhost:8000/api/item/itemlist");
                this.items = response.data.data;

                let res = await axios.get("http://localhost:8000/api/shipping/list");
                this.shippings = res.data.data;
            }
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