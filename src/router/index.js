import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import Login from '@/components/Login';
import Backstage from '@/components/Backstage';


Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/backstage',
      name: 'Backstage',
      component: Backstage,
    },
  ],
});