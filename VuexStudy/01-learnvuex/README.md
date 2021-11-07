# Vuex Study

> Vuex类似一个仓库。在其中可以存放一些公用的属性，方法等。如果组件之间没有关联，组件就没法互相调用其内部的数据，属性，方法等
> 这时候，如果将这些存放在vuex中，即使组件之间互相没有关联也可以调用

## 一.vuex的index文件

> 使用vuex，首先需要安装，通过指令 npm install vuex --save 即可安装
>
> 安装完成后，一般来说，习惯于创建一个store文件夹，在其中配置vuex相关的东西

````js
import Vue from "vue";
import Vuex from "vuex";

//1.安装插件
Vue.use(Vuex)

//2.创建一个对象
const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

//3.导出store对象
export default store
````
> vuex的index.js文件大体框架如上所示

## 二.state

> state中一般添加一些变量，类似data，在state中设置的变量可以在所有的组件中调用
>
> 调用方法：$store.state.变量名 即可调用

## 三.mutations

> 有时候，需要一些公共的方法，就可以在mutation中设置，类似于methods，在mutations中创建完方法后，可以在要使用这个
> 方法的组件中创建一个方法，然后通过 $store.commit(' mutations中创建的方法名字 ')来进行调用。
>
> 需要注意的是：在mutations中创建的方法需要传入一个参数state
> 类似这样：

````js
mutations: {
//方法
increment(state) {
state.counter++
},
decrement(state) {
state.counter--
}
}
````
> 补充：可以在浏览器中安装插件vuejs.devtools。这个插件可以用来对通过vuex管理的组件进行查看，还能跟踪通过绑定mutations
> 执行，改变的情况
## 四.getters

> getters类似计算属性computed，通过在getters中创建一些变量的运算规则，也可在其中添加过滤器来筛选数据
>
> getters中创建的属性可以直接在任何组件通过 $store.getters.属性名 进行调用

## 五.action

> action和mutation很像，如果想要做一些异步操作，则不能在mutation中写代码，必须通过action
>
> 大致流程是：在methods中创建需要使用的方法，在方法中通过 $store.dispatch()传递给action中对应的方法，
> 在action中对应的方法出通过.commit()方法执行mutations中对应的方法，完成异步操作。在action对应的方法中，
> 建议使用Promise的方法进行异步操作，这样可以使代码结构更清晰

## 六.modules

> Vue使用单一状态树，这样一来，随着项目不断变大，store对象就会变得愈发臃肿，为了解决这个问题
> Vuex允许我们将store分割成模块，每个模块下又可以拥有自己的state，mutation，action，getters
