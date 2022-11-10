<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <h1>Update Type page</h1>
        <form class="addClient">
            <div class="title">Update</div>
            <div class="input-field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter name" v-model="type.name" /> 
            </div>          
            <router-link class="bk" to="/Categorie">Back</router-link>
            <button type="button" v-on:click="updateType" >Update</button>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import SideBarComp from '../Sidebar.vue'
    import axios from 'axios';
    export default{
        name:'UpdateType',
        components:{
            HeaderComp,
            SideBarComp
        },
        data() {
            return {
                type :{
                    name :''
                },
                usertype:''
            }
        },
        methods:{
            async updateType(){
                console.warn(this.type)
                var qs = require('qs');
                let result = await axios.patch("http://localhost:8000/api/type/"+this.$route.params.idType,
                    qs.stringify({
                        name:this.type.name
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'Categorie'})
                }
            }
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.usertype= JSON.parse(user)[0].usertype;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/type/"+this.$route.params.idType);
            console.warn(result.data.data);
            this.type = result.data.data;
        }
    }
</script>