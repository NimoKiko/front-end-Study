# tab-bar组件

> 这是一个tab-bar组件

## 构建过程

### 一.用脚手架搭建项目

- 命令：vue init webpack 项目名

###二.分析组件结构并细分创建.vue文件

- 在components文件夹中创建一个tabbar文件夹
- 将组件底端拆解为底部栏和若干栏目实体，分别创建TabBar.vue文件和TabBarItem.vue文件

### 三.TabBar.vue文件

> 该文件主要是设置整个组件的底部样式，包括组件整体在屏幕上的位置，组件整体的颜色，一些细节的样式，如组件上端
> 设置阴影，需要注意的是，需要预留插槽（slot标签），后续能在组件底部动态的插入组件栏目

### 四.TabBarItem.vue文件

> 该文件用于设置组件底部栏目。使用具名插槽，预留位置用于动态制作底端栏目的图标和文字信息。为了实现点击图标时图标高亮的操作，
> 实际开发时，需要传入一般状态下图标图片和点击状态下图标图片，然后创建一个计算属性isActive，判断栏目是否被点击了，传回一个布尔值，通过
> v-if属性决定由一般状态图标显示还是由点击状态图标显示。
>
> 为了能动态改变图标下方文字颜色，在用于填充文本的具名插槽上绑定style属性。在props选项中创建activeColor属性（该属性用于接收父组件向子组件传递的信息
> 在此处用于接收从父组件中传过来的颜色信息），在子组件中创建计算属性activeStyle用于将从父组件中传过来的数据动态地设置样式
>
> 需要注意的是：在实际开发中最好将插槽标签包装在一个div标签内，绑定属性或者绑定点击事件时绑定外层的div标签，避免因为插槽被填充
> 而造成的绑定丢失。

### 五.MainTabBar.vue文件

> 该文件用于将TabBar组件的整体抽离出来放到单独的文件夹中，而不是放在App.vue文件中。实际开发中，作为项目的根组件，
> 尽量保证App.vue中组件结构清晰，通过调用子组件搭建的形式可以将整个项目搭建地清晰明了。

### 六.组件结构梳理

> 根组件App.vue中引入了MainTabBar.vue文件，相当于将main-tab-bar组件引入。在MainTabBar.vue文件中又引入了
> TabBar.vue文件和TabBarItem.vue文件，相当于引入tab-bar组件和tab-bar-item组件，在tab-bar组件中因为设置了插槽，使得
> 能够在tab-bar组件中嵌套tab-bar-item组件，从而实现整个组件的整合。

### 七.关于路径的优化

> 在build文件夹下的webpack.base.conf.js文件夹中，可以找到一个resolve选项，在其中alias选项中可以设置一些别名，
> 当我们进行开发的时候，为一些文件路径设置别名可以避免因为代码换位置而导致的路径出错问题
>
> 补充：如果不是通过import方式导入的文件路径，需要在使用别名前加一个 '~' 符号。
