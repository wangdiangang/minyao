<!--import index from "../router";-->
<template>
  <div>
    <Header @addVideoFn="addVideoFn"></Header>
    <ol>
      <li class="videoBox" v-for="(item,index) in getVideos" :key="index">
        <video :src="item.brs[720]" class="video" preload controls></video>
        <span class="desc">{{item.desc||"默认描述文字"}}</span> <span>00:00</span>
        <span>作者:{{item.artistName}}</span> <span>留言版</span>
      </li>
    </ol>

  </div>
</template>

<script>
  import Header from "../base/Header"
  import {getVideo} from "../api/index"
  import {mapGetters} from "vuex"

  export default {
    computed: {
      ...mapGetters([
        "getVideos"
      ])
    },
    data() {
      return {}
    },
    name: "",
    components: {
      Header
    },

    methods: {
      addVideoFn(video) {
        this.videos.push(video)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .videoBox {
    position: relative;
    width: 90%;
    height: 3rem;
    margin: .6rem auto;
    font-size: .03rem;
    box-shadow: inset .8rem -.8rem .3rem .3rem rgba(255, 251, 194, 0.46);

  }

  .videoBox span {
    position: absolute;
  }

  .videoBox span:nth-of-type(1) {
    top: .02rem;
    left: .2rem;
    color: rgba(3, 5, 255, 0.53);
  }

  .videoBox span:nth-of-type(2) {
    top: .02rem;
    right: .2rem;
    color: red;
  }

  .videoBox span:nth-of-type(3) {
    bottom: -.45rem;
    left: .2rem;
    color: red;
  }

  .videoBox span:nth-of-type(4) {
    bottom: -.4502rem;
    right: .2rem;
    color: red;
  }

  .video {
    width: 80%;
    margin: 0 auto;

  }

  .desc {
    overflow: hidden;
    height: .3rem;
  }
</style>
