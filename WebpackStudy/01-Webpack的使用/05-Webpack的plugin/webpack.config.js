//动态获取路径需要使用nodejs的语法
//1.使用commonJs的模块化规范导入path
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry:'./src/main.js',
  output:{
    //__dirname为node中的方法，作用是获取当前文件的路径
    //resolve()方法可以将两个路径进行拼接，第一个参数是当前文件的绝对路径，第二个参数是你要拼接的路径
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    // publicPath: 'dist/'
  },
  //安装完css-loader之后需要在该文件下进行如下配置
  //各种loader都在module中配置
  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader只负责加载
        //style-loader负责解析并将样式添加到DOM中
        //使用多个loader时是从右向左读取的
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(PNG|JPG|GIF|JPEG)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载图片时，小于limit时，会将图片编译成64base字符串的形式
              //当加载图片时，大于limit时，需要使用file-loader模块进行加载
              limit: 10000,
              //name的配置主要作用是为了在打包图片时，生成的图片文件名不会乱七八糟
              name: 'img/[name].[hash:8].[ext]'
            },

          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        //
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  //配置resolve属性可以解决运行时以runtime-only执行而导致的无法解析template的问题
  resolve: {
    //alias：别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归xxx所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyjsWebpackPlugin()

  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }


}
