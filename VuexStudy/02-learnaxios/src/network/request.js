import axios from "axios";

//方法一
// export function request(config, success, failure) {
// //  1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config).then(res => {
//     console.log(res);
//     success(res)
//   })
//     .catch(err => {
//       console.log(err);
//       failure(err)
//     })
// }

//方法二
// export function request(config) {
// //  1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig).then(res => {
//     console.log(res);
//     config.success(res)
//   })
//     .catch(err => {
//       console.log(err);
//       config.failure(err)
//     })
// }

//方法三
// export function request(config) {
//   return new Promise((resolve, reject) => {
//      // 1.创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     instance(config).then(res => {
//       resolve(res)
//     })
//       .catch(err => {
//         reject(err)
//       })
//     })
// }

//方法三简化
export function request(config) {

    // 1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    //拦截请求
    instance.interceptors.request.use(config => {
      console.log(config);
      return config
    },err => {
      console.log(err);
    })
    //拦截回应
    instance.interceptors.response

    //发送真正的网络请求
    return instance(config)
}
