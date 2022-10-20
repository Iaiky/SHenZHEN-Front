//authentication
import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
//client
import AddClient from "./components/client/AddClient.vue";
import UpdateClient from "./components/client/UpdateClient.vue";
import ListClient from "./components/client/ListClient.vue";
//Item
import AddItem from "./components/item/AddItem.vue";
import ListItem from "./components/item/ListItem.vue";
import UpdateItem from "./components/item/UpdateItem.vue";
//categorie type
import UpdateType from "./components/item/UpdateType.vue";
import Categorie from "./components/item/Categorie.vue";
//shipping
import AddShipping from "./components/shipping/AddShipping.vue";
import ListShipping from "./components/shipping/ListShipping.vue";
import UpdateShipping from "./components/shipping/UpdateShipping.vue";
import { createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name: "Home",
        component: HomePage,
        path: "/"
    },

    //Authentication
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

    //client
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
    },

    //Item
    {
        name: "AddItem",
        component: AddItem,
        path: "/addItem"
    },
    {
        name: "ListItem",
        component: ListItem,
        path: "/ListItem"
    },
    {
        name: "UpdateItem",
        component: UpdateItem,
        path: "/updateItem/:idItem"
    },

    //Type
    {
        name: "UpdateType",
        component: UpdateType,
        path: "/updateType/:idType"
    },
    {
        name: "Categorie",
        component: Categorie,
        path: "/Categorie"
    },

    //Shipping
    {
        name: "AddShipping",
        component: AddShipping,
        path: "/addShipping"
    },
    {
        name: "UpdateShipping",
        component: UpdateShipping,
        path: "/updateShipping/:idshipping"
    },
    {
        name: "ListShipping",
        component: ListShipping,
        path: "/ListShipping"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;