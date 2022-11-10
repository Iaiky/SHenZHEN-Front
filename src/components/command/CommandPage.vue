<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <div class="addClient">
            <div class="title">Command made by {{command.username}}</div>
            <div class="input-field">
                <label>N° of command :</label>
                <div>{{command.idcommand}}</div>
            </div>   
            <div class="input-field">
                <label>Date when we make the command :</label>
                <div>{{command.datecommand}}</div>
            </div>
            <div class="input-field">
                <label>Client :</label>
                <div>{{command.client}}</div>
            </div>
            <div class="input-field">
                <label>Items commanded :</label>
                <div>{{command.article}}</div>
            </div>  
            <div class="input-field">
                <label>Category :</label>
                <div>{{command.category}}</div>
            </div>   
            <div class="input-field">
                <label>Quantity :</label>
                <div>{{command.quantity}}</div>
            </div>
            <div class="input-field">
                <label>Price :</label>
                <div>{{command.price}}</div>
            </div>   
            <div class="input-field">
                <label>Sending date :</label>
                <div>{{command.dateenvoi}}</div>
            </div>
            <div class="input-field">
                <label>Arrival date :</label>
                <div>{{command.datearrive}}</div>
            </div>   
            <div class="input-field">
                <label>N° Container :</label>
                <div>{{command.container}}</div>
            </div>
            <div class="input-field">
                <label>Paiment status :</label>
                <div v-if="command.statut">Paid</div>
                <div v-else>Not paid</div>
            </div>
            <div class="button-list">
                <GoBack />
                <button type="button" v-on:click="updateCommand(command.idcommand)" >Update</button>
                <button v-on:click="deleteCommand(command.idcommand)" >Delete</button>
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
        name:'CommandPage',
        components:{
            HeaderComp,
            GoBack,
            SideBarComp
        },
        data() {
            return {
                command :{
                    idcommand :'',
                    datecommand:'',
                    client:'',
                    article:'',
                    category: '',
                    quantity:'',
                    price:'',
                    dateenvoi:'',
                    datearrive:'',
                    container:'',
                    statut: 0 ,
                    username: ''
                },
                usertype:''
            }
        },
        methods:{
            async deleteCommand(id){
                let result = await axios.delete("http://localhost:8000/api/command/"+id);
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListCommand'})
                }
            },
            updateCommand(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/updateCommand/"+id})
            }
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.usertype= JSON.parse(user)[0].usertype;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/command/"+this.$route.params.idcommand);
            this.command = result.data.data;
        }
    }
</script>

<style scoped>
    .button-list {
        display: flex;
    }
</style>