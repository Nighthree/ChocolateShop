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
    },
    products: [],
    paginations: {},
    cartLength:'',
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
    getCartLength(context, payload) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_CARTLENGTH', response.data.data.carts.length);
        context.commit('LOADING', false);
      });
    },
    delCart(context, id){
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      axios.delete(api).then(response => {
        context.dispatch('getCartLength');
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
    GET_CARTLENGTH(state, payload) {
      state.cartLength = payload;
    },
  },

  getters,



});