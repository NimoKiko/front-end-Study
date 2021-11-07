<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <p>{{name}}</p>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>

import Cpn from "./Cpn.vue";

export default {
  name: "App",
  components:{
    Cpn
  },
  data(){
    return{
      message:'俊子大可爱',
      name: '安知我意'
    }
  },
  methods: {
    btnClick(){

    }
  }
}
</script>

<style scoped>
  .title{
    color: #ef3c00;
  }
</style>