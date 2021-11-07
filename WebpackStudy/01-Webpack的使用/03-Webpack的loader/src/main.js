//使用commonJS的方式导入
const {add,mul} = require('./js/mathUtil.js')

console.log(add(20, 20));

console.log(mul(30, 60));

//使用ES6的方式导入
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')

document.writeln("<h2>俊子大可爱</h2>")