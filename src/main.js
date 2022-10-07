// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers' // <---

createApp(App).use(router).mount('#app')