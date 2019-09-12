import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import button from '../components/example-button'
import toast from '../components/example-toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/toast',
      name: 'toast',
      component: toast
    }
  ]
})
