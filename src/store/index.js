import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
  },
  getters: {
  },
  mutations: {
    logout(state){
      state.logged = false
      router.push('/')
    },
  },
  actions: {
  },
  modules: {
  }
})
