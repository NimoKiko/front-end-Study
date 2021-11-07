//在这个js文件中配置路由信息
import Vue from 'vue'
//导入路由（后续不使用这种方式，一般使用懒加载）
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from "../components/About";
// import User from "../components/User";

//路由懒加载（开发中使用这种方式进行打包）
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const  Profile = () => import('../components/Profile')

//1.通过Vue.use(插件)，安装插件，于是需要导入Vue
Vue.use(Router)

//2.创建路由对象
const routes = [
  //在routes中配置映射对象
  {
    path: '',
    //重定向,用于设置默认路径
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        component: HomeNews
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ],
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
    // beforeEnter: (to, from, next) => {
    //   console.log('我要进去咯');
    // }
  }

]

const router =  new Router({
  routes,
  //mode属性可以设置网页使用history模式进行路由选择
  mode: 'history',
  //使用linkActiveClass属性可以对所有的router-link标签设置class名
  linkActiveClass: 'active'
})

// beforeEach()：前置钩子 ---》路由跳转前执行
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log(to);
  next()
})

// afterEach()：后置钩子  ---》路由跳转后执行
router.afterEach((to, from) => {
  // console.log('------');
})

//3.将routes对象传入Vue实例中
export default router
