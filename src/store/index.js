import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    loginError: false,
    userData:'',
    passwordData:'',

  },
  getters: {
  },
  mutations: {
    setUser(state, user){
      state.userData = user
    },
    setPassword(state, password){
      state.passwordData = password
    },
    logout(state){
      state.logged = false
      router.push('/')
    },

    loginAuth(state){
      if(state.userData == 'admin' && state.passwordData == 'admin'){
        state.logged = true
        router.push('/home')
      }else{
        state.loginError = true
      }
    }
  },
    
    
  
  actions: {
  },
  modules: {
  }
})
