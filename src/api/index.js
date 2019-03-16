import axios from "axios";




axios.interceptors.response.use(function (res) {
  return res.data.data
})


export const getVideo = params => {
  return axios.get("https://api.imjad.cn/cloudmusic/", {
    params: {
      "type": params["type"],
      "id": params['id']
    }
  })
}

