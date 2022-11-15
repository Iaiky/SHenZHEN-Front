//authentication
import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
//users
import ListUser from "./components/user/ListUser.vue";
import ListPendingUser from "./components/user/ListPendingUser.vue";
import UserPage from "./components/user/UserPage.vue";
import ListCommandUser from "./components/user/ListCommandUser.vue";
import UpdateUser from "./components/user/UpdateUser.vue";
//client
import AddClient from "./components/client/AddClient.vue";
import UpdateClient from "./components/client/UpdateClient.vue";
import ListClient from "./components/client/ListClient.vue";
import ClientPage from "./components/client/ClientPage.vue";
import ListCommandClient from "./components/client/ListCommandClient.vue";
//Item
import AddItem from "./components/item/AddItem.vue";
import ListItem from "./components/item/ListItem.vue";
import UpdateItem from "./components/item/UpdateItem.vue";
import ItemPage from "./components/item/ItemPage.vue";
import ListCommandItem from "./components/item/ListCommandItem.vue";
//categorie type
import UpdateType from "./components/item/UpdateType.vue";
import Categorie from "./components/item/Categorie.vue";
//shipping
import AddShipping from "./components/shipping/AddShipping.vue";
import ListShipping from "./components/shipping/ListShipping.vue";
import UpdateShipping from "./components/shipping/UpdateShipping.vue";
import ShippingPage from "./components/shipping/ShippingPage.vue";
import ListCommandShipping from "./components/shipping/ListCommandShipping.vue";
//command
import AddCommand from "./components/command/AddCommand.vue";
import UpdateCommand from "./components/command/UpdateCommand.vue";
import ListCommand from "./components/command/ListCommand.vue";
import CommandPage from "./components/command/CommandPage.vue";
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

    //User
    {
        name: "ListUser",
        component: ListUser,
        path: "/ListUser"
    },
    {
        name: "ListPendingUser",
        component: ListPendingUser,
        path: "/ListPendingUser"
    },
    {
        name: "UserPage",
        component: UserPage,
        path: "/UserPage/:iduser"
    },
    {
        name: "ListCommandUser",
        component: ListCommandUser,
        path: "/ListCommandUser/:iduser"
    },
    {
        name: "UpdateUser",
        component: UpdateUser,
        path: "/updateUser/:iduser"
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
    {
        name: "ClientPage",
        component: ClientPage,
        path: "/ClientPage/:idclient"
    },
    {
        name: "ListCommandClient",
        component: ListCommandClient,
        path: "/ListCommandClient/:idclient"
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
    {
        name: "ItemPage",
        component: ItemPage,
        path: "/ItemPage/:idItem"
    },
    {
        name: "ListCommandItem",
        component: ListCommandItem,
        path: "/ListCommandItem/:idItem"
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
    },
    {
        name: "ShippingPage",
        component: ShippingPage,
        path: "/ShippingPage/:idshipping"
    },
    {
        name: "ListCommandShipping",
        component: ListCommandShipping,
        path: "/ListCommandShipping/:idshipping"
    },

    //command
    {
        name: "AddCommand",
        component: AddCommand,
        path: "/addCommand"
    },
    {
        name: "UpdateCommand",
        component: UpdateCommand,
        path: "/updateCommand/:idcommand"
    },
    {
        name: "ListCommand",
        component: ListCommand,
        path: "/ListCommand"
    },
    {
        name: "CommandPage",
        component: CommandPage,
        path: "/CommandPage/:idcommand"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;