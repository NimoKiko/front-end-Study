export default {
  powerCounter(state){
    return state.counter * state.counter
  },
  moreThan20(state){
    return state.students.filter(s => s.age>=20)
  },
  moreThan20Length(state, getters){
    return getters.moreThan20.length
  },
  moreAge(state){
    // return function (age) {
    //   return state.students.filter( s => s.age > age)
    // }
    //箭头函数的写法
    return age => {
      return state.students.filter(s => s.age >age)
    }

  }
}
