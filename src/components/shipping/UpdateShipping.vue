<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <form class="addClient">
            <div class="title">Update shipping</div>
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
                <input type="text" name="container" placeholder="conatiner number" v-model="shipping.container" />
            </div>      
            <router-link class="bk" to="/ListShipping/">Back</router-link>     
            <button type="button" v-on:click="updateShipping" >Update</button>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import SideBarComp from '../Sidebar.vue'
    import axios from 'axios';
    export default{
        name:'UpdateShipping',
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
            async updateShipping(){
                console.warn(this.shipping)
                var qs = require('qs');
                let result = await axios.patch("http://localhost:8000/api/shipping/"+this.$route.params.idshipping,
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
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.usertype= JSON.parse(user)[0].usertype;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/shipping/"+this.$route.params.idshipping);
            console.warn(result.data.data);
            this.shipping = result.data.data;
        }
    }
</script>