<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <div class="home">
            <div>
                <img class="homelogo" src="../assets/Logo-LK-Logistics.png" alt="logo" />
                <h1>User : {{name}}</h1>
                </div>
            <table class="table-home">
                <tr>
                    <td><button class="home-btn" v-on:click="redirectClient">Client</button></td>
                    <td><button class="home-btn" v-on:click="redirectCommand">Command</button></td>
                </tr>
                <tr>
                    <td><button class="home-btn" v-on:click="redirectArticle">Article</button></td>
                    <td><button class="home-btn" v-on:click="redirectShipping">Shipping</button></td>
                </tr>
            </table>
            
        </div>
    </div>
</template>

<script>
    import HeaderComp from './Header.vue'
    import SideBarComp from './Sidebar.vue'
    export default{
        name:'HomePage',
        data(){
            return {
                name:'',
                usertype:''
            }
        },
        methods:{
            redirectClient(){
                this.$router.push({name:'ListClient'})
            },
            redirectCommand(){
                this.$router.push({name:'ListCommand'})
            },
            redirectArticle(){
                this.$router.push({name:'ListItem'})
            },
            redirectShipping(){
                this.$router.push({name:'ListShipping'})
            }
        },
        components:{
            HeaderComp,
            SideBarComp
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.name= JSON.parse(user)[0].name;
            this.usertype= JSON.parse(user)[0].usertype;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
        }
    }
</script>

<style>
    .home {
        border-radius: 10px;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 0 3px 0 rgba(0,0 , 0, 0.3);
        padding: 30px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
    }
    .homelogo {
        width: 100px;
        margin-bottom: 5px;
        padding: 5px;
    }
    .table-home{
        padding-top: 20px;
        margin-top: 20px;
        height: 300px;
    }
    .table-home tr{
        padding: 0;
        margin: 0;
    }
    .home-btn{
        background-color: rgba(0, 136, 169, 1);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        width: 100%;
        height: 100%;
    }
</style>