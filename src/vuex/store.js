
import Vue from "vue"
import Vuex from "vuex"
// import mutations from "mutations"
Vue.use(Vuex)
const state={
  videos:[]


}
const mutations={
  ADDVIDEOS(state,obj){
    return state.videos.push(obj)
  }
}

const actions={
   addVideos({commit},res){
     // commit("ADDVIDEOS",res)
   }
}

const getters={
   getVideos(state){
   return state.videos
   }
}









export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
