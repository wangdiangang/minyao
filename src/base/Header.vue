<template>
  <header class="header">
    <i class="iconfanhui" v-if="back" @click="goback">返回</i>
    <span class="sousuo" v-if="search" @click="searchSong" v-show="!inputFlag"><i
      class="iconfont icon-sousuo "></i></span>
    这是头部
    <input type="text" placeholder="只能输入以下歌曲" class="input" v-if="inputFlag" @keyup.enter="add" @blur="add2" autofocus
           v-model="songValue">
    <!--autofocus自动获取焦点-->

  </header>
</template>

<script>
  import {apiGetVideo} from "../api/index"
  import {mapGetters} from "vuex"

  export default {
    name: "",
    data() {
      return {
        inputFlag: false,
        songValue: "",
      }

    },
    computed: {
      ...mapGetters([
        "getServerVideos"
      ])
    },
    created() {
      // console.log(this.getServerVideos);
    },
    props: ['back', "search"],
    methods: {
      goback() {
        this.$router.go(-1)
      },
      searchSong() {
        this.inputFlag = true
      },
      add() {
        this.inputFlag = false;
        for (let v in this.getServerVideos) {
          if (v == this.songValue) {
            apiGetVideo({
              "type": this.getServerVideos[v]["type"],
              "id": this.getServerVideos[v]["id"]
            }).then(res => {
              this.$store.commit("ADDVIDEOS", res)
            })
          }
        }
        this.songValue = ""
      },
      add2() {
        this.inputFlag = false;
        this.songValue = ""
      }

    },

  }
</script>

<style scoped>
  .sousuo {
    position: absolute;
    width: 1rem;
    height: 1rem;

    right: .3rem;
    display: inline-block;
  }

  .sousuo .icon-sousuo {
    width: 100%;
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    z-index: 99;
    background: yellowgreen;
    border-bottom: .03rem solid red;
    font-size: .7rem;
  }

  .iconfanhui {
    display: inline-block;
    position: absolute;
    top: .2rem;
    left: 0;
    width: .6rem;
    height: .4rem;
    background: #ff511c;
    font-size: .4em;
  }

  .input {
    z-index: 200;
    width: 60%;
    height: .5rem;
    border-radius: 1rem;
    font-size: .5em;
  }
</style>
