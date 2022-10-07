<template>
    <div>
        <HeaderComp />
        <h1>Update client page</h1>
        <form class="addClient">
            <div class="title">Add new client </div>
            <div class="input-field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter client name" v-model="client.name" />
            </div>   
            <div class="input-field">
                <label>Last Name</label>
                <input type="text" name="forename" placeholder="Enter client Last name" v-model="client.forename" />
            </div>
            <div class="input-field">
                <label>Address</label>
                <input type="text" name="address" placeholder="Enter client address" class="textarea" v-model="client.address" />
            </div>
            <div class="input-field">
                <label>Phone number</label>
                <input type="text" name="tel" placeholder="Enter client phone number" v-model="client.tel" />
            </div>           
            <button type="button" v-on:click="updateClient" >Update</button>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import axios from 'axios';
    export default{
        name:'UpdateClient',
        components:{
            HeaderComp
        },
        data() {
            return {
                client :{
                    name :'',
                    forename:'',
                    address:'',
                    tel:''
                }
            }
        },
        methods:{
            async updateClient(){
                console.warn(this.client)
                var qs = require('qs');
                let result = await axios.patch("http://localhost:8000/api/client/"+this.$route.params.idclient,
                    qs.stringify({
                        name:this.client.name,
                        forename:this.client.forename,
                        address:this.client.address,
                        tel:this.client.tel
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListClient'})
                }
            }
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/client/"+this.$route.params.idclient);
            // console.warn(this.$route.params.idclient)
            console.warn(result.data.data);
            this.client = result.data.data;
        }
    }
</script>