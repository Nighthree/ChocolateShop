import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const getters = {}

export default new Vuex.Store({
  strict: true,
  state: {
    status: {
      isLoading: false,
      categories: [],
      addCartLoading: '',
      watchMoreLoading:'',
    },
    products: [],
    paginations: {},
    cart: [],
    product:{
      num:'',
    },

  },
  actions: {
    getProducts(context, page) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_PRODUCTS', response.data.products);
        context.commit('GET_CATEGORIES', response.data.products);
        context.commit('GET_PAGINATIONS', response.data.pagination);
        context.commit('LOADING', false);
      });
    },
    getCart(context, payload) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_CART', response.data.data);
        context.commit('LOADING', false);
      });
    },
    addCart(context, { id, qty }) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      context.commit('GET_ADDCARTID', id);
      const item = {
        product_id: id,
        qty
      };
      axios.post(api, { data: item }).then(response => {
        context.dispatch('getCart');
        context.commit('GET_ADDCARTID', '');
      });
    },
    OpenProductModal(context, id) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${id}`;
      context.commit('GET_WATCHMORE', id);
      axios.get(api).then(response => {
        context.commit('GET_ONEPRODUCT', response.data.product);
        console.log(response.data.product);
        
        context.commit('GET_WATCHMORE', '');
      });
    },
  },
  mutations: {
    LOADING(state, statu) {
      state.status.isLoading = statu;
    },
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    GET_CATEGORIES(state, payload) {
      const categoryItem = [];
      payload.forEach(function (item) {
        categoryItem.push(item.category);
      });
      state.status.categories = Array.from(new Set(categoryItem));
    },
    GET_PAGINATIONS(state, payload) {
      state.paginations = payload;
    },
    GET_CART(state, payload) {
      state.cart = payload;
    },
    GET_ADDCARTID(state, payload) {
      state.status.addCartLoading = payload;
    },
    GET_WATCHMORE(state, payload){
      state.status.watchMoreLoading = payload;
    },
    GET_ONEPRODUCT(state, payload){
      state.product = payload;
    },
  },

  getters,



});