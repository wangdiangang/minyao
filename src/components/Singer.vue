<template>
  <div>
    <Header :back="goback"></Header>
    <div class="singLove">
      <router-link to="/singerPaihang">排行榜</router-link>
      <router-link to="/singerPaihang">我的所爱</router-link>
      <router-link to="/singerPaihang">这是啥啊</router-link>
      <router-link to="/singerPaihang">先搞出来</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "../base/Header"

  export default {
    data() {
      return {
        goback:true
      }
    },
    name: "",
    components: {
      Header
    }
  }
</script>

<style scoped>
.singLove{
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  height: 1rem;
  background: #888384;
}
  .singLove a{
    font-size:.4em;
    color: #f9ffe2;
  }
</style>
