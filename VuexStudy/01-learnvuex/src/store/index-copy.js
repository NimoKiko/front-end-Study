// import Vue from "vue";
// import Vuex from "vuex";
// import {DECREMENT, INCREMENT} from "./mutations-type";
//
// //1.安装插件
// Vue.use(Vuex)
//
// const moduleA = {
//   state: {
//     name: '容落云'
//   },
//   mutations: {
//     updateName(state, payload) {
//       state.name = payload
//     }
//   },
//   getters: {
//     fullName(state) {
//       return state.name + '111'
//     },
//     fullName2(state, getters) {
//       return getters.fullName + '2222'
//     },
//     fullName3(state, getters, rootState) {
//       return getters.fullName2 + rootState.counter
//     }
//   },
//   actions: {
//     aUpdateName(context) {
//       setTimeout(() => {
//         context.commit('updateName', '顾拙言')
//       },1000)
//     }
//   }
// }
//
//
// //2.创建一个对象
// const store = new Vuex.Store({
//   state: {
//     message: '我是被使用的信息',
//     counter: 0,
//     students: [
//       {name: '俊子', age: 29, height: 188},
//       {name: '顾拙言', age: 18, height: 184},
//       {name: '庄凡心', age: 17, height: 173},
//       {name: '韩烨', age: 29, height: 186},
//     ],
//     info: {
//       name: '心眼',
//       age: 888,
//       weight: 123
//     }
//   },
//   mutations: {
//     //方法
//     [INCREMENT](state) {
//       state.counter++
//     },
//     [DECREMENT](state) {
//       state.counter--
//     },
//     incrementCount(state, payload) {
//       state.counter += payload.count
//     },
//     updateInfo(state) {
//       state.info.name = '梁承'
//     }
//   },
//   actions: {
//     // aUpdateInfo(context, payload) {
//     //   setTimeout(() => {
//     //     //虽然使用了action但是不能绕过mutation所以要使用commit
//     //     context.commit('updateInfo')
//     //     payload()
//     //   },1000)
//     // },
//     // aUpdateInfo(context, payload) {
//     //   setTimeout(() => {
//     //     //虽然使用了action但是不能绕过mutation所以要使用commit
//     //     context.commit('updateInfo')
//     //     console.log(payload.message);
//     //     payload.success()
//     //   },1000)
//     // },
//     //更优雅的做法
//     aUpdateInfo(context, payload) {
//       return new Promise((resolev, reject) => {
//         setTimeout(() => {
//           context.commit('updateInfo')
//           resolev('传过来啦')
//         },1000)
//       })
//     },
//   },
//   getters: {
//     powerCounter(state){
//       return state.counter * state.counter
//     },
//     moreThan20(state){
//       return state.students.filter(s => s.age>=20)
//     },
//     moreThan20Length(state, getters){
//       return getters.moreThan20.length
//     },
//     moreAge(state){
//       // return function (age) {
//       //   return state.students.filter( s => s.age > age)
//       // }
//       //箭头函数的写法
//       return age => {
//         return state.students.filter(s => s.age >age)
//       }
//
//     }
//   },
//   modules: {
//     a: moduleA,
//   }
// })
//
// //3.导出store对象
// export default store
