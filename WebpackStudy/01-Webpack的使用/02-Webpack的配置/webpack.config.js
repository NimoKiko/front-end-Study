//动态获取路径需要使用nodejs的语法
//1.使用commonJs的模块化规范导入path
const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    //__dirname为node中的方法，作用是获取当前文件的路径
    //resolve()方法可以将两个路径进行拼接，第一个参数是当前文件的绝对路径，第二个参数是你要拼接的路径
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
}
