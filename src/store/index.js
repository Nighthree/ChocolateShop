import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {}

export default new Vuex.Store({
  state: {
    status: {
      isLoading: false,
    },
  },
  actions: {
    updateLoading(context, statu) {
      context.commit('LOADING', statu );
    },
  },
  mutations:{
    LOADING(state, statu){
      state.status.isLoading = statu;
    },
  },

  getters,



});