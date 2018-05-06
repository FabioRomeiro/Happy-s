import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Admin from '@/components/admin/Admin'
import AdminFuncionarios from '@/components/admin/AdminFuncionarios'
import AdminRanking from '@/components/admin/AdminRanking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'funcionarios',
          name: 'funcionarios',
          component: AdminFuncionarios
        },
        {
          path: 'ranking',
          name: 'ranking',
          component: AdminRanking
        }
      ]
    }
  ]
})
