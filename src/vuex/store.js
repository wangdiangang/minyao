import Vue from "vue"
import Vuex from "vuex"
// import mutations from "mutations"
Vue.use(Vuex)
const state = {
  videos: [],
  serverVideos: {
    "旅行的意义": {
      "type": "mv",
      "id": "5293224"
    },
    "家乡": {
      "type": "mv",
      "id": "5556383"
    },
    "成都": {
      "type": "mv",
      "id": "5619601"
    },
    "盗将行": {
      "type": "mv",
      "id": "10798236"
    },
    "平凡之路": {
      "type": "mv",
      "id": "290244"
    },
    "断桥残雪": {
      "type": "mv",
      "id": "5436128 "
    },
    "童话镇": {
      "type": "mv",
      "id": "5513147"
    },
    "九张机": {
      "type": "mv",
      "id": "5581665"
    },
    "追光者": {
      "type": "mv",
      "id": "5563801"
    },
  },
  serverAideos:{
    "家乡": {
      "type": "song",
      "id": "238858"
    },
  }
}
const mutations = {
  ADDVIDEOS(state, obj) {
    return state.videos.push(obj)
  }
}

const actions = {
  addVideos({commit}, res) {
    // commit("ADDVIDEOS",res)
  }
}

const getters = {
  getVideos(state) {
    return state.videos
  },
  getServerVideos(state) {
    return state.serverVideos
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
