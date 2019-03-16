<template>
  <div>
    <Header :search="true" @addVideoFn="addVideoFn"></Header>
    <ol>
      <li v-for="a in num">{{a}}</li>
    </ol>
  </div>
</template>

<script>
  import Header from "../base/Header"

  export default {
    data() {
      return {
        num: 20,
      }

    },
    methods: {
      addVideoFn(v){
        console.log(v);
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>
