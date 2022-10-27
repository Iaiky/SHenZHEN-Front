<template>
    <div>
        <HeaderComp />
        <div class="addClient">
            <div class="title">Info Shipping </div>
            <div class="input-field">
                <label>N° ID :</label>
                <div>{{shipping.idshipping}}</div>
            </div>   
            <div class="input-field">
                <label>Sending date :</label>
                <div>{{shipping.dateenvoi}}</div>
            </div>
            <div class="input-field">
                <label>Arrival date :</label>
                <div>{{shipping.datearrive}}</div>
            </div>
            <div class="input-field">
                <label>N° of container :</label>
                <div>{{shipping.container}}</div>
            </div>  
            <div class="input-field">
                <label>Command in the shipping :</label>
                <div v-if="numbercommand" class="nbr">
                    <div>{{numbercommand}}</div>
                    <button class="list" v-on:click="listCommand(shipping.idshipping)">list</button>
                </div>
                <div v-else>0</div>
            </div>
            <div class="button-list">
                <GoBack />
                <button type="button" v-on:click="updateShipping(shipping.idshipping)" >Update</button>
                <button v-on:click="deleteShipping(shipping.idshipping)" >Delete</button>
            </div>         
            
        </div>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    import GoBack from '../GoBack.vue'
    export default{
        name:'ShippingPage',
        components:{
            HeaderComp,
            GoBack
        },
        data() {
            return {
                shipping :{
                    idshipping :'',
                    dateenvoi :'',
                    datearrive:'',
                    container:''
                },
                numbercommand:''
            }
        },
        methods:{
            async deleteShipping(id){
                let result = await axios.delete("http://localhost:8000/api/shipping/"+id);
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListShipping'})
                }
            },
            updateShipping(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/updateShipping/"+id})
            },
            listCommand(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/ListCommandShipping/"+id})
            }
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/shipping/"+this.$route.params.idshipping);
            console.warn(result.data.data);
            this.shipping = result.data.data;
            const res = await axios.get("http://localhost:8000/api/command/numbercommandshipping/"+this.$route.params.idshipping);
            this.numbercommand = res.data.data.numbercommand;
        }
    }
</script>

<style scoped>
    .button-list {
        display: flex;
    }
    .nbr {
        display:contents;
    }
    .list{
        background-color: rgb(255, 255, 255);
        color: rgba(0, 136, 169, 1);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        width: 50%;
    }
    .list:hover{
        background-color: rgb(242, 252, 255);;
    }
</style>