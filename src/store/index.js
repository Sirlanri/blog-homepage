import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前的权限
    power:"visiter"
  },
  mutations: {
    raisePower(state){
      state.power = "root"
    }
  },
  actions: {
  },
  modules: {
  }
})
