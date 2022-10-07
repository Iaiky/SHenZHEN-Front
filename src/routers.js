import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
import AddClient from "./components/client/AddClient.vue";
import UpdateClient from "./components/client/UpdateClient.vue";
import ListClient from "./components/client/ListClient.vue";
import { createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name: "Home",
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "Login",
        component: LoginPage,
        path: "/login"
    },
    {
        name: "AddClient",
        component: AddClient,
        path: "/addClient"
    },
    {
        name: "UpdateClient",
        component: UpdateClient,
        path: "/updateClient/:idclient"
    },
    {
        name: "ListClient",
        component: ListClient,
        path: "/ListClient"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;