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
      cartLength:'',
      searchTextItem:'',
    },
    products: [],
    paginations: {},
    cart:[],
  },
  actions: {
    getProducts(context, page) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_PRODUCTS', response.data.products);
        context.commit('GET_PAGINATIONS', response.data.pagination);
        context.commit('LOADING', false);
      });
    },
    getCart(context, payload) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_CART', response.data.data);
        context.commit('GET_CARTLENGTH', response.data.data.carts.length);
        context.commit('LOADING', false);
      });
    },
    delCart(context, id){
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      axios.delete(api).then(response => {
        context.dispatch('getCart');
      });
    },
    getSearchText(context, item){
      context.commit('GET_SEARCHTEXT', item);
    }
  },
  mutations: {
    LOADING(state, statu) {
      state.status.isLoading = statu;
    },
    GET_PRODUCTS(state, payload) {
      state.products = payload.reverse();
    },
    GET_PAGINATIONS(state, payload) {
      state.paginations = payload;
    },
    GET_CARTLENGTH(state, payload) {
      state.status.cartLength = payload;
    },
    GET_CART(state, payload){
      state.cart = payload;
    },
    GET_SEARCHTEXT(state, payload){
      state.status.searchTextItem = payload;
    }
  },

  getters,



});