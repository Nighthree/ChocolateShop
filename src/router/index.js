import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import Login from '@/components/Login';
import Backstage from '@/components/Backstage';
import ProductList from '@/components/BackComponents/Pages/ProductList';
import OrderList from '@/components/BackComponents/Pages/OrderList';
import CouponList from '@/components/BackComponents/Pages/CouponList';
// import CustomerLogin from '@/components/HomeComponents/CustomerLogin';
import Products from '@/components/Products';
import Cart from '@/components/Cart';
import Order from '@/components/Order';
import Checkout from '@/components/Checkout'


Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    // {
    //   path: '/customerlogin',
    //   name: 'CustomerLogin',
    //   component: CustomerLogin,
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
        
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },{
      path: '/checkout/:orderId',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/backstage',
      name: 'Backstage',
      component: Backstage,
      children:[
        {
          path: 'productlist',
          name: 'ProductList',
          component: ProductList,
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