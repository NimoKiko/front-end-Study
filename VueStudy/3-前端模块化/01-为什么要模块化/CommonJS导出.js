var name = '员工a'
var age = 22

function  sum(num1,num2){
  return num1 + num2
}

var flag = true

if(flag){
  console.log(sum(10, 20));
}
// 后期使用WebPack的时候依赖于node环境，在node环境下就支持CommonJS的模块化规范
//CommonJS的语法：
// module.exports = {
//   flag:flag,
//   sum:sum
// }