import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null
  },

  getters: {
    isAuth (state) {
      return !!state.token;
    }
  },

  mutations: {
    LOGIN(state, token) {
      if (!token) return;
      state.token = token;
      localStorage.setItem('token', token);
      api.setAuthInHeader(token);
    },
    LOGOUT(state) {
      state.token = null;
      delete localStorage.token;
      api.setAuthInHeader(null);
    }
  },

  actions: {
    LOGIN({commit}, params) {
      return api.auth.login(params)
        .then(response => commit('LOGIN', response.headers['x-auth-token']));
    }
  }
  
})

export default store