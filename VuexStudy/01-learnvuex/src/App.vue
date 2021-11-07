<template>
  <div id="app">

    <h2>--------------如何通过state调用变量--------------</h2>
    <h2>{{$store.state.message}}</h2>
<!--    不建议这么写-->
<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->

    <h2>--------------如何通过mutation执行一些方法--------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtract">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>------------如何通过getters对数据进行筛选和运算-------------</h2>
    <h2>count的倍数：{{$store.getters.powerCounter}}</h2>
<!--    通过计算属性实现过滤-->
<!--    <h2 >{{morethan20}}</h2>-->
    <h2 >{{$store.getters.moreThan20}}</h2>
    <br>
    <h2 >{{$store.getters.moreAge(10)}}</h2>

    <h2>------------如何通过action对进行异步操作-------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>------------如何通过modules分割模块-------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {INCREMENT,DECREMENT} from "./store/mutations-type";

export default {

  name: 'App',
  data(){
    return{
      message: '我是app组件',
      counter: 0
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtract() {
      this.$store.commit(DECREMENT)
    },
    addCount(count) {
      //1.提交方法一
      // this.$store.commit('incrementCount', count)

      // 2.提交方法二
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    updateInfo() {
      //方法一
      // this.$store.dispatch('aUpdateInfo', () => {
      //   console.log('我打印出来了哦');
      // }),
      //方法二
      //   this.$store.dispatch('aUpdateInfo', {
      //     message:'我是携带的信息',
      //     success: () => {
      //       console.log('我打印出来了哦');
      //     }
      //   })
      // 方法三
      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('完成了提交');
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit('updateName','霍临风')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
  // computed: {
  //   morethan20() {
  //     //箭头函数的简写规则：如果整个函数只有一行代码，则可以按如下方式书写代码
  //     return this.$store.state.students.filter(s => s.age >= 20)
  //   }
  // }
}
</script>

<style>

</style>
