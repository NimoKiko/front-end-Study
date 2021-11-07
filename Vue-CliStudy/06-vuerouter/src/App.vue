<template>
  <div id="app">
<!--  使用tag属性就可以将router-link标签渲染成其他标签  -->
<!--  只需要增加replace属性就能使用replace方法进行界面跳转  -->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" active-class="active">关于</router-link>-->

<!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
<!--    <router-link to="/about" tag="button" >关于</router-link>-->

<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    动态路由-->
    <router-link :to="'/user/'+userId">用户</router-link>
<!--    <router-link to="/profile">档案</router-link>-->
<!--    需要使用v-bind绑定to才能将其中的对象识别成对象-->
    <router-link :to="{path:'/profile' ,query: {name: '俊俊子', age:29, height:188}}">档案</router-link>

<!--    使用exclude属性可以将不需要设置keep-alive属性的路由排除在外-->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:'龚俊',
    }
  },
  methods: {
    homeClick() {
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log("aboutClick");
    }
  }
}
</script>

<style>
.active{
  color: #42b983;
}
</style>
