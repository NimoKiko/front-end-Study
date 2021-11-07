import {DECREMENT, INCREMENT} from "./mutations-type";

export default {
  //方法
  [INCREMENT](state) {
    state.counter++
  },
  [DECREMENT](state) {
    state.counter--
  },
  incrementCount(state, payload) {
    state.counter += payload.count
  },
  updateInfo(state) {
    state.info.name = '梁承'
  }
}
