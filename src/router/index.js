import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';


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
  ],
});