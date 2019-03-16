<template>
  <header class="header">
    <i class="iconfanhui" v-if="back" @click="goback">返回</i>
    <span class="sousuo" v-if="search" @click="searchSong" v-show="!inputFlag"><i class="iconfont icon-sousuo " ></i></span>
    这是头部
    <input type="text" placeholder="房东的猫||旅行的意义||盗将行||成都" class="input" v-if="inputFlag" @keyup.enter="add" @blur="add2"
           v-model="songValue">
  </header>
</template>

<script>
  import {getVideo} from "../api/index"

  export default {
    name: "",
    data() {
      return {
        inputFlag: false,
        songValue: "",
        videos: {
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
          "盗将行": {
            "type": "mv",
            "id": "290244"
          },
        }
      }

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
        for (let v in this.videos) {
          if (v == this.songValue) {
            getVideo({
              "type": this.videos[v]["type"],
              "id": this.videos[v]["id"]
            }).then(res => {
              this.$store.commit("ADDVIDEOS",res)
            })
          }
        }
        this.songValue=""
      },
      add2(){
        this.inputFlag = false;
        this.songValue=""
      }

    },
    created() {
      // console.log(this.$store.state.videos[0]);
      // console.log(this.$store.state.videos[1]);
      // console.log(this.$store.state.videos[2]);
      // console.log(this.$store.state.videos[3]);
      // console.log(this.$store.state.videos[4]);
      // console.log(this.$store.state.videos[5]);

    }
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
