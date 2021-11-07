export default {
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     //虽然使用了action但是不能绕过mutation所以要使用commit
  //     context.commit('updateInfo')
  //     payload()
  //   },1000)
  // },
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     //虽然使用了action但是不能绕过mutation所以要使用commit
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success()
  //   },1000)
  // },
  //更优雅的做法
  aUpdateInfo(context, payload) {
    return new Promise((resolev, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        resolev('传过来啦')
      },1000)
    })
  },
}
