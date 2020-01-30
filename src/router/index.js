import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import Login from '@/components/Login';
import Backstage from '@/components/Backstage';
import Products from '@/components/BackComponents/Pages/Products';
import OrderList from '@/components/BackComponents/Pages/OrderList';
import CouponList from '@/components/BackComponents/Pages/CouponList'


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
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orderlist',
          name: 'OrderList',
          component: OrderList,
          meta: { requiresAuth: true },
        },
        {
          path: 'couponlist',
          name: 'CouponList',
          component: CouponList,
          meta: { requiresAuth: true },
        },

      ],
    },
  ],
});