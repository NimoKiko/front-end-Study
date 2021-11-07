//如果使用var来声明变量，则需要在.html中引入js文件的时候标注type="module"这一项
//但是这样的话程序复用性就会变差,如果其他js文件想要调用另一个js文件中的变量，就需要导出
//
var name = '龚俊'
var age = 18
var flag = true

function sum(num1,num2){
  return num1 + num2
}

if(flag){
  console.log(sum(20, 30));
}
//1.导出方式一
export {
  flag,
  sum
}

//2.导出方式贰
//定义的时候直接导出
export var num1 = 1000
export  var height = 1.88

//3.导出函数或类
export function mul(num1,num2){
  return num1 * num2
}

export class Person{
  run(){
    console.log('导入啦');
  }
}

//4.export default
//有时候导出的时候没有命名，可以通过export default导出，由导入者自行命名
const address = '上海市'
export default address

