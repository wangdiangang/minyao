import Vue from "vue"
import Vuex from "vuex"
// import mutations from "mutations"
Vue.use(Vuex)
const state = {
  videos: [],
  serverVideos: {
    "房东的猫": {
      "type": "mv",
      "id": "5686040"
    },
    "旅行的意义": {
      "type": "mv",
      "id": "5293224"
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
