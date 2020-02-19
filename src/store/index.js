import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const getters = {}

export default new Vuex.Store({
  strict: true,
  state: {
    status: {
      isLoading: false, //有用到
      categories: [], //有用到
      searchTextItem: '',
      addCartLoading: '',
    },
    products: [],
    cart: {
      carts: [],
    },
    cartData: [],
  },
  actions: {
    getProducts(context, page) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products/all`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_PRODUCTS', response.data.products);
        context.commit('GET_CATEGORIES', response.data.products);
        context.commit('LOADING', false);
      });
    },
    getSearchText(context, item) {
      context.commit('GET_SEARCHTEXT', item);
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
    GET_CATEGORIES(state, payload){
      const categoryItem = [];
      payload.forEach(function(item){
        categoryItem.push(item.category);
      });
      state.status.categories =  Array.from(new Set(categoryItem));
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