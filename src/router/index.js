import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Category from '@/pages/category/category'
import info from '@/pages/detail/components/info'
import Car from '@/pages/car/car'
import Login from '@/pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      children: [
        {
          path: '/category/:id',
          component: info
        }
      ]
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
