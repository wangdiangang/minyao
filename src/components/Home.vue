<template>
  <div>
    <Header :search="true"></Header>
    <div class="cur">只能输入以下歌曲
      <ol>
        <li v-for="(item,index) in getServerVideos" :key="index" class="singName">{{index}}</li>
      </ol>
    </div>
    <div class="line"></div>
    <div class="ps">PS:搜索框里面内容直接到
      <router-link to="videos">视频</router-link>
      内容里面，跨域访问网易云音乐的https://api.imjad.cn/cloudmusic/地址，有的视频服务器已经403拒绝响应了。
    </div>
  </div>
</template>

<script>
  import Header from "../base/Header"
  import {mapGetters} from "vuex"

  export default {
    data() {
      return {
        serverVideos: {},
      }

    },
    computed: {
      ...mapGetters([
        "getServerVideos"
      ])
    },
    created() {


    },
    methods: {},
    components: {
      Header
    }
  }
</script>

<style scoped>
  .cur {
    font-size: .6em;
    margin-bottom: 3rem;
  }

  .singName {
    font-size: 0.3em;
  }

  .line {
    width: 80%;
    border: .02rem solid #ccc;
    border-radius: .01rem;
    margin: 0 auto;
  }

  .ps {
    font-size: .3em;
  }

</style>
