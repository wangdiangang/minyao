<template>
  <footer class="footer">


    <router-link to="/home">
      <i class="iconfont icon-icon"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/singer">
      <i class="iconfont icon-duorenhuiyi"></i>
      <span>歌手</span>
    </router-link>

    <router-link to="/videos">
      <i class="iconfont icon-shipin"></i>
      <span>视频</span>
    </router-link>

    <router-link to="/mine">
      <i class="iconfont icon-geren3"></i>
      <span>我的</span>
    </router-link>


  </footer>
</template>

<script>

  export default {
    name: "",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .footer {
    background: #0305ff;
    width: 100%;
    /*height: 1.5rem;*/
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    border-top: .02rem solid red;
    font-size: .5rem;
    align-items: center;
    z-index: 100;

  }

  a {
    color: white;
    /*font-size: .2rem;*/
    display: flex;
    flex: 1;
    flex-direction: column;

  }

  .router-link-active {
    color: #ff511c;
    border-bottom: yellow .02rem solid;

  }
  .iconfont{
    font-size: 1.5em;
  }

</style>
