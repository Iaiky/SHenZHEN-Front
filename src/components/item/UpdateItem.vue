<template>
    <div>
        <HeaderComp />
        <div v-if="usertype">
            <SideBarComp />
        </div>
        <form class="addClient">
            <div class="title">Update Item </div>
            <div class="input-field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter item name" v-model="item.name" /> 
            </div>  
            <div class="input-field">
                <label>Categories</label>
                <select name="type" v-model="item.type">
                    <option v-for="items in type" :key="items.id" :value="items.idtype">{{items.name}}</option>
                </select>
            </div>
            <div class="input-field">
                <label>Price</label>
                <input type="number" name="price" placeholder="Enter item price" v-model="item.price" />
            </div>            
            <router-link class="bk" to="/ListItem/">Back</router-link>
            <button type="button" v-on:click="updateItem" >Update item</button>
        </form>
    </div>
</template>

<script>
    import HeaderComp from '../Header.vue'
    import SideBarComp from '../Sidebar.vue'
    import axios from 'axios';
    export default{
        name:'UpdateItem',
        components:{
            HeaderComp,
            SideBarComp
        },
        data() {
            return {
                item :{
                    name :'',
                    type:'',
                    price:''
                },
                type :[],
                usertype:''
            }
        },
        methods:{
            async updateItem(){
                console.warn(this.item)
                var qs = require('qs');
                let result = await axios.patch("http://localhost:8000/api/item/"+this.$route.params.idItem,
                    qs.stringify({
                        name:this.item.name,
                        type:this.item.type,
                        price:this.item.price
                    })
                );
                console.warn(result);
                if(result.status==200){
                    this.$router.push({name:'ListItem'})
                }
            },
            async loadData(){
                let result = await axios.get("http://localhost:8000/api/type/");
                this.type = result.data.data;
            }
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.usertype= JSON.parse(user)[0].usertype;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            const result = await axios.get("http://localhost:8000/api/item/"+this.$route.params.idItem);
            // console.warn(this.$route.params.idclient)
            console.warn(result.data.data);
            this.item = result.data.data;
            this.loadData();
        }
    }
</script>