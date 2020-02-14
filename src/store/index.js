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
      searchTextItem: '',
      addCartLoading: '',
    },
    products: [],
    paginations: {},
    cart: {
      carts: [],
    },
    cartData: [],
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
        context.commit('GET_CARTDATA', response.data.data.carts);
        context.commit('LOADING', false);
      });
    },
    addCart(context, { id, qty }) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      context.commit('GET_ADDCARTLOADING', id);
      const cart = {
        product_id: id,
        qty: qty
      };
      axios.post(api, { data: cart }).then(response => {
        context.dispatch('getCart');
        context.commit('GET_ADDCARTLOADING', '');
      });
    },
    delCart(context, id) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      axios.delete(api).then(response => {
        context.dispatch('getCart');
      });
    },
    getSearchText(context, item) {
      context.commit('GET_SEARCHTEXT', item);
    },
    pushLoadingStatu(context, payload) {
      context.commit('LOADING', payload);
    },
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
    GET_CART(state, payload) {
      state.cart = payload;
    },
    GET_CARTDATA(state, payload) {
      state.cartData = payload.sort(function (a, b) {
        return a.qty- b.qty;
      });
    },
    GET_SEARCHTEXT(state, payload) {
      state.status.searchTextItem = payload;
    },
    GET_ADDCARTLOADING(state, payload) {
      state.status.addCartLoading = payload;
    },
  },

  getters,



});