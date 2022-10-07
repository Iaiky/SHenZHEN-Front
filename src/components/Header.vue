<template>
    <div class="header">
        <img class="headerlogo" src="../assets/Logo-LK-Logistics-blanc.png" alt="logo"/>
            <ul class="nav_links">
                <li><router-link to="/">Home</router-link></li>
                <li>
                    <a href="#">Client</a>
                    <div class="sub-menu-client">
                        <ul>
                            <li><router-link to="/ListClient">All</router-link></li>
                            <li><router-link to="/addClient">Add</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Command</a></li>
                <li><a href="#">Items</a></li>
            </ul>    
        <a class="cta" v-on:click="logout" href="#"><button>Logout</button></a>
    </div>
    
</template>

<script>
    export default {
        name:"HeaderComp",
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'Login'});
            }
        }
    }
</script>

<style>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }

    li, a, button {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #edf0f1;
        text-decoration: none;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5%;
        background-color: #24252A;
    }

    .headerlogo {
        cursor: pointer;
        width: 50px;
    }

    .nav_links {
        list-style: none;
    }

    .nav_links li {
        display: inline-block;
        padding: 10px 20px;
    }

    .nav_links li a {
        transition: all 0.3s ease 0s;
    }

    .nav_links li a:hover {
        color: #0088a9;
    }

    button {
        padding: 9px 25px;
        background-color: rgba(0, 136, 169, 1);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }

    button:hover {
        background-color: rgba(0, 136, 169, 0.8);
    }

    .sub-menu-client {
        display: none;
    }

    .sub-menu-client li{
        display: list-item;
    }

    .nav_links li:hover .sub-menu-client {
        display: block;
        position: absolute;
        background-color: #24252ad2;
        margin-top: 10px;
        margin-left: -15px;
    }

</style>