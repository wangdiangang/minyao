<template>
  <div id="app">
    <BottomNav></BottomNav>
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>


  </div>
</template>

<script>
  import BottomNav from "./base/BottomNav"

  export default {
    created() {
      this.getHtml()
    },
    name: 'App',
    components: {
      BottomNav
    },
    methods: {
      getHtml() {
        let htmls = document.documentElement;
        let AX;
        let changeAX
        htmls.addEventListener("touchstart", function (e) {
          AX = e.changedTouches[0].clientX
        });
        htmls.addEventListener("touchmove", function (e) {
          changeAX = e.changedTouches[0].clientX - AX
        });
        htmls.addEventListener("touchend", () => {
          let thisGo = this.$router;
          AX > changeAX ? thisGo.go(-1) : thisGo.go(1)
        })
      },
    }
  }
</script>

<style>
  @import "css/reset.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }


</style>
