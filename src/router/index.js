import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import Login from '@/components/Login';
import Backstage from '@/components/Backstage';
import ProductList from '@/components/BackComponents/Pages/ProductList';
import OrderList from '@/components/BackComponents/Pages/OrderList';
import CouponList from '@/components/BackComponents/Pages/CouponList';
import Products from '@/components/Products';
import Product from '@/components/Product'
import Order from '@/components/Order';
import Checkout from '@/components/Checkout';
import About from '@/components/About';
import Know from '@/components/Know';
import Coupon from '@/components/Coupon';


Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
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
    {
      path: '/product/:productId',
      name: 'Product',
      component: Product,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    }, 
    {
      path: '/checkout/:orderId',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/know',
      name: 'Know',
      component: Know,
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon,
    },
    {
      path: '/backstage',
      name: 'Backstage',
      component: Backstage,
      children: [
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