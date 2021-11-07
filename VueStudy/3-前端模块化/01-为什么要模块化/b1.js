(function (){
//  1.想使用flag
  if (moduleA.flag) {
    console.log("俊子大可爱");
  }
//  2.使用sum函数
  console.log(moduleA.sum(40, 50));
})()  //此为匿名闭包的方式，用于解决全局变量命名冲突的问题