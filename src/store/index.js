import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前的权限
    power:"visiter",
    friendId:"",
    picAddress:""
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
    },
    logout(state){
      state.power = "visiter"
    },
    //记录当前修改/删除友链的ID
    changeId(state,id){
      state.friendId=id
    },
    //修改当前的picAddress
    changePicAddress(state,address){
      state.picAddress=address
    }
  },
  actions: {
  },
  modules: {
  }
})
