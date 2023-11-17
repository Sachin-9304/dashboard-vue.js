import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import TheNavbar from './components/UI/TheNavbar.vue'
import UserDetails from './components/layouts/UserDetails.vue'
import AccountCreation from './components/layouts/AccountCreation.vue'
import BaseCard from './components/UI/BaseCard.vue' 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/details', component:UserDetails
        },
        {
            path:'/creation',component:AccountCreation
        }
    ]
});

const app=createApp(App)
app.use(router);
app.component('the-navbar',TheNavbar)
app.component('base-card',BaseCard)
app.mount('#app');
