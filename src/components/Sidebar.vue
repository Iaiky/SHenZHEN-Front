<template>
    <div class="sidebar">
        <nav>
            <ul>
                <li class="liste">
                    <router-link to="/" class="side-logo">
                        <img src="../assets/Logo-LK-Logistics.png" />
                        <span class="nav-item">Control</span>
                    </router-link>
                </li>
                <li class="liste">
                    <router-link to="#">
                        <i class="fa fa-user-circle-o"></i>
                        <span class="nav-item">
                            User
                        </span>
                    </router-link>
                </li>
                <li class="liste">
                    <router-link to="#">
                        <i class="fa fa-user-plus"></i>
                        <span class="nav-item">
                            Pending user
                        </span>
                    </router-link>
                </li>
                <li class="liste">
                    <router-link to="#">
                        <i class="fa fa-cart-plus"></i>
                        <span class="nav-item">Pending command</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:'SideBarComp',
    methods: {
    }
};
</script>

<style>
.sidebar{
    border-radius: 10px;
    box-shadow: 0 0 3px 0 rgba(0,0 , 0, 0.3);
}
.sidebar nav {
    position: absolute;
    top: 68px;
    bottom: 0;
    height: 100%;
    left: 0;
    background: rgb(255, 255, 255);
    width: 90px;
    overflow: hidden;
    transition: width 0.2s linear;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0,0 , 0, 0.3);
}
.side-logo{
    text-align: center;
    display: flex;
    transition: all 0.5s ease;
    margin: 10px 0 0 10px;
}
.side-logo img{
    width: 45px;
    height: 45px;
}
.side-logo span{
    font-weight: bold;
    padding-left: 15px;
    font-size: 18px;
    text-transform: uppercase;
}
.liste a{
    position: relative;
    color:rgb(0, 1, 2);
    font-size: 14px;
    display: flex;
    width: 300px;
    padding: 10px;
}
.liste .fa {
    position: relative;
    width: 70px;
    height:40px;
    top: 14px;
    font-size: 20px;
    text-align: center;
}
.nav-item{
    position: relative;
    top: 12px;
    margin-left: 10px;
}
.liste a:hover{
    background-color: rgba(0, 0, 0, 0.336);
}
nav:hover{
    width: 250px;
    transition: all 0.5s ease;
}
</style>