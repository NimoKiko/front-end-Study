//动态获取路径需要使用nodejs的语法
//开发时依赖
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
