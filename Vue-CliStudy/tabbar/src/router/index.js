import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//懒加载的方式导入.vue文件
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  // {
  //   path: '',
  //   component: Home
  // },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
