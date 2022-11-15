<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <form class="addClient">
            <div class="title">Update user informations </div>
            <div class="input-field">
                <label>Name :</label>
                <input type="text" name="name" placeholder="Enter client name" v-model="user.name" />
            </div>   
            <div class="input-field">
                <label>email :</label>
                <input type="text" name="forename" placeholder="Enter client Last name" v-model="user.email" />
            </div>
            <select name="type" v-model="user.usertype">
                    <option value="superadmin">Superadmin</option>
                    <option value="admin">Admin</option>
            </select><br/><br/>
            <div class="button-list">
                <router-link class="bk" to="/ListUser/">Back</router-link>
                <button type="button" v-on:click="updateUser" >Update</button>
            </div>             
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import SideBarComp from '../Sidebar.vue'
    import axios from 'axios';
    export default{
        name:'UpdateClient',
        components:{
            HeaderComp,
            SideBarComp
        },
        data() {
            return {
                user :{
                    id :'',
                    name :'',
                    email:'',
                    password:'',
                    usertype:'',
                    validation:''
                },
                usertype:''
            }
        },
        methods:{
            async updateUser(){
                console.warn(this.client)
                var qs = require('qs');
                let result = await axios.patch("http://localhost:8000/api/user/"+this.$route.params.iduser,
                    qs.stringify({
                        name:this.user.name,
                        email:this.user.email,
                        usertype:this.user.usertype,
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListUser'})
                }
            }
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.usertype= JSON.parse(user)[0].usertype;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/user/"+this.$route.params.iduser);
            // console.warn(this.$route.params.idclient)
            console.warn(result.data.data);
            this.user = result.data.data;
        }
    }
</script>