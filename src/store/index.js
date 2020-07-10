import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前的权限
    power:"visiter"
  },
  getters:{
    //判断是否为root登录，方便页面使用
    isroot(state){
      if (state.power=="root") {
        return true
      }else{
        return false
      }
    }
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
