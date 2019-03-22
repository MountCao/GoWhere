import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当用户访问的是根路径的时候，我们给用户展示的组件是HelloWorld这个组件
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})
