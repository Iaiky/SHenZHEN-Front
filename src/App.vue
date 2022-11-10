<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
    #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
    *{
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    .logo{
            width: 100px;
        }
    .register, .login {
        border-radius: 10px;
        width: 300px;
        box-shadow: 0 0 3px 0 rgba(0,0 , 0, 0.3);
        padding: 20px;
        margin: 8% auto 0;
        text-align: center;
    }
    .register h1 ,.login h1 {
        color: #000000;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .register input, .login input {
        border-radius: 20px;
        padding: 10px;
        margin: 10px 0;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        border: 1px solid #999;
        outline: none;
    }
    .register button, .login button{
        color: #fff;
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        font-size: 15px;
        margin: 10px 0;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .signUp-btn{
        background-color: #1c8adb;
    }
    .login a, .register a, .content-table tbody td a{
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #1c8adb;
    }
    .bk {
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #1c8adb;
        transition: all 0.3s ease 0s;
    }

    .bk:hover {
        color: #93d4e4;
    }

 
</style>
