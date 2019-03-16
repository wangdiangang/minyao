<template>
  <div>
    <Header :back="goback"></Header>
    <div class="singLove">
      <span to="/singerPaihang">排行榜</span>
      <span>每日推荐</span>
      <span>私人收藏</span>
      <span>我的喜爱</span>
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
  .singLove span{
    font-size:.4em;
    color: #f9ffe2;
  }
</style>
