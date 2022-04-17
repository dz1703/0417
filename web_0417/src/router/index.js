import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import GoodsInfo from "@/pages/GoodsInfo"
import Announce from "@/pages/Home/Announce"

// 重写push和replace方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    return originalPush.call(this, location, resolve, reject)
  }
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    return originalReplace.call(this, location, resolve, reject)
  }
  return originalReplace.call(this, location).catch(err => err)
}


// 路由配置
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        // 是否显示Footer
        showFooter: true
      }
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/goodsInfo',
      component: GoodsInfo,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/announce',
      component: Announce,
      meta: {
        showFooter: false
      }
    },
    // 重定向 项目启动 访问任意路径 访问首页
    {
      path: '*',
      redirect: '/home'
    }
  ]
})