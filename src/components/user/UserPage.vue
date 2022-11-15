<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <div class="addClient">
            <div class="title">Users informations</div>
            <div class="input-field">
                <label>Name :</label>
                <div>{{user.name}}</div>
            </div>   
            <div class="input-field">
                <label>email :</label>
                <div>{{user.email}}</div>
            </div>
            <div class="input-field">
                <label>Type :</label>
                <div>{{user.usertype}}</div>
            </div> 
            <div class="input-field">
                <label>Command made :</label>
                <div v-if="numbercommand" class="nbr">
                    <div>{{numbercommand}}</div>
                    <button class="list" v-on:click="listCommand(user.id)">list</button>
                </div>
                <div v-else>0</div>
            </div>
            <div class="button-list">
                <GoBack />
                <button class="btn-lst" type="button" v-on:click="updateUser(user.id)" >Update</button>
                <button class="btn-lst" v-on:click="deleteUser(user.id)" >Delete</button>
            </div>         
            
        </div>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import SideBarComp from '../Sidebar.vue'
    import axios from 'axios';
    import GoBack from '../GoBack.vue'
    export default{
        name:'UserPage',
        components:{
            HeaderComp,
            SideBarComp,
            GoBack
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
                numbercommand:'',
                usertype:''
            }
        },
        methods:{
            async deleteUser(id){
                let result = await axios.delete("http://localhost:8000/api/user/"+id);
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListUser'})
                }
            },
            updateUser(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/updateUser/"+id})
            },
            listCommand(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/ListCommandUser/"+id})
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
            const res = await axios.get("http://localhost:8000/api/command/numbercommanduser/"+this.$route.params.iduser);
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