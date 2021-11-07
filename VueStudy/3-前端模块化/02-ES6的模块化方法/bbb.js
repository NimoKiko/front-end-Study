var name = '韩烨'
var age = 22
var flag = false

//直接导入export定义的变量
import {num1,height} from "./aaa.js";

console.log(height);
console.log(num1);

//导入export定义的函数
import {mul,Person} from "./aaa.js";

console.log(mul(10, 15));

const p = new Person()
p.run()

//导入未命名的
//tips:一个文件内只能导入一个default
import addr from "./aaa.js";

console.log(addr);
