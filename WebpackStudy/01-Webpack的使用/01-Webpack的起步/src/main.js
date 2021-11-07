//使用commonJS的方式导入
const {add,mul} = require('./mathUtil.js')

console.log(add(20, 20));

console.log(mul(30, 60));

//使用ES6的方式导入
import {name,age,height} from "./info";

console.log(name);
console.log(age);
console.log(height);