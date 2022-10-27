<template>
    <div>
        <HeaderComp />
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
            <router-link class="bk" to="/ListCommand/">Back</router-link>
            <button type="button" v-on:click="updateCommand" >Update command</button>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    import vSelect from 'vue-select'
    export default{
        name:'UpdateCommand',
        components:{
            HeaderComp,
            vSelect
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
                }
            }
        },
        methods:{
            async updateCommand(){
                var qs = require('qs');
                let result = await axios.patch("http://localhost:8000/api/command/"+this.$route.params.idcommand,
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
        async mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/command/update/"+this.$route.params.idcommand);
            console.warn(result);
            this.command = result.data.data;
            this.loadData();
        }
    }
</script>