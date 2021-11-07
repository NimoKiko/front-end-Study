import Vue from 'vue'
import App from './App'
import axios from "axios";
import {config} from "shelljs";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//axios基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

//axios发送并发请求
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params:{
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(results => {
//   console.log(results);
// })

//并发请求
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params:{
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(axios.spread((res1, res2) =>{
//   console.log(res1);
//   console.log(res2);
// }))

//全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   }),
//   axios({
//     url: '/home/multidata'
//   })
// ]).then(axios.spread((res1, res2) =>{
//   console.log(res1);
//   console.log(res2);
// }))

//封装request模块
import {request} from "./network/request";

//方法一的使用：
request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})

//方法二的使用
// request({
//   baseComfig: '/home/multidata',
//   success: function (res) {
//
//   },
//   failure: function (res) {
//
//   }
// })

//方法三使用
request({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
}).catch((err => {
  console.log(err);
}))
