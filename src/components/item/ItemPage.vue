<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <div class="addClient">
            <div class="title">Item </div>
            <div class="input-field">
                <label>Name :</label>
                <div>{{item.name}}</div>
            </div>   
            <div class="input-field">
                <label>Type:</label>
                <div>{{item.type}}</div>
            </div>
            <div class="input-field">
                <label>Price :</label>
                <div>{{item.price}}</div>
            </div>  
            <div class="input-field">
                <label>number of command :</label>
                <div v-if="numbercommand" class="nbr">
                    <div>{{numbercommand}}</div>
                    <button class="list" v-on:click="listCommand(item.idarticle)">list</button>
                </div>
                <div v-else>0</div>
            </div>
            <div class="button-list">
                <GoBack />
                <button type="button" v-on:click="updateItem(item.idarticle)" >Update</button>
                <button v-on:click="deleteItem(item.idarticle)" >Delete</button>
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
        name:'ItemPage',
        components:{
            HeaderComp,
            GoBack,
            SideBarComp
        },
        data() {
            return {
                item :{
                    idarticle :'',
                    name :'',
                    type:'',
                    price:''
                },
                numbercommand:'',
                usertype:''
            }
        },
        methods:{
            async deleteItem(id){
                let result = await axios.delete("http://localhost:8000/api/item/"+id);
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListItem'})
                }
            },
            updateItem(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/updateItem/"+id})
            },
            listCommand(id){
                let user = localStorage.getItem('user-info');
                    if(!user){
                        this.$router.push({name:'SignUp'})
                    }
                    this.$router.push({path: "/ListCommandItem/"+id})
            }
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.usertype= JSON.parse(user)[0].usertype;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/item/list/"+this.$route.params.idItem);
            console.warn(result.data.data);
            this.item = result.data.data;
            const res = await axios.get("http://localhost:8000/api/command/numbercommanditem/"+this.$route.params.idItem);
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