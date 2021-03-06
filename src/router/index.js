import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/commoditydetails/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component: index
    }, 
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
