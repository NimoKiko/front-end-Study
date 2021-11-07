import Vue from "vue";
import Vuex from "vuex";
import {DECREMENT, INCREMENT} from "./mutations-type";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
//1.安装插件
Vue.use(Vuex)


const state = {
  message: '我是被使用的信息',
  counter: 0,
  students: [
    {name: '俊子', age: 29, height: 188},
    {name: '顾拙言', age: 18, height: 184},
    {name: '庄凡心', age: 17, height: 173},
    {name: '韩烨', age: 29, height: 186},
  ],
  info: {
    name: '心眼',
    age: 888,
    weight: 123
  }
}

//2.创建一个对象
const store = new Vuex.Store({
  state: state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
  }
})

//3.导出store对象
export default store
