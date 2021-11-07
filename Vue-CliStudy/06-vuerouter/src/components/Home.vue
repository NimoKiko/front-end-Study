<template>
<div>
  <h2>我是首页</h2>
  <p>
    算起来做了7年的技术管理，从带7、8人的一线前端团队到最多80+人、手下若干技术主管的团队。不敢说自己做得多么成功，因为一路上也是磕磕绊绊，总是觉得自己还是更擅长专注于做技术，因为管理和技术不同，更多是琐碎的事情，如果说写码给我的快乐多于烦恼，那么技术管理恰好相反。然而我们生活不仅仅是为了享乐，有时候会想，在技术专家的角色上我是不是也能比技术管理给前端带来的贡献更多，理性告诉我未必，一个人的力量是有限的，在这个时代前端显然不缺牛人，很多时候我们不是靠一个人战斗……
  </p>

  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>

  <router-view></router-view>



</div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log('Home created');
  },
  destroyed() {
    console.log('Home destroyed');
  }
}
</script>

<style scoped>

</style>
