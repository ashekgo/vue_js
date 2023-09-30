import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Todo from '../views/Todo.vue';
import Completed from '../views/Completed.vue';
import Login from '../views/Login.vue';
import authStore from '../store/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/completed',
      name: 'completed',
      component: Completed,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = authStore();
  
  if(to.meta.requiresAuth && auth.isAuthenticated != true){
    next('/login');
  }else{
    next();
  }
});

export default router
