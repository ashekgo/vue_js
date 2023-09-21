import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import CarsView from '../views/CarsView.vue'

import GoldClub from "../views/Pages/GoldClub.vue";
import Offers from "../views/Pages/Offers.vue";
import About from "../views/Pages/About.vue";
import Contact from "../views/Pages/Contact.vue";

const routes = [
    {
        path : '/',
        name : 'home',
        component : HomeView
    },
    {
        path : '/gold-club',
        name : 'gold-club',
        component : GoldClub
    },,
    {
        path : '/offers',
        name : 'offers',
        component : Offers
    },,
    {
        path : '/about',
        name : 'about',
        component : About
    },,
    {
        path : '/contact',
        name : 'contact',
        component : Contact
    },
    {
      path: '/car/:id',
      name: 'car',
      component: CarsView
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: () => import('../views/NotFoundView.vue')
    },
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router