//封装成模块A
var moduleA = (function (){
  //导出的对象
  var obj = {}
  //员工a
  var name = '员工a'
  var age = 22

  function  sum(num1,num2){
    return num1 + num2
  }

  var flag = true

  if(flag){
    console.log(sum(10, 20));
  }

  obj.flag = flag;
  obj.sum = sum;

  return obj

})()

//如果想要导入之前使用CommonJS封装的模块，导入方法如下：
// var {flag,sum} = require('./CommonJS导出')