import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import HelloWorld2 from '@/components/HelloWorld2'
import sample from '@/views/sample'

Vue.use(Router)
Vue.component('hello-world1', HelloWorld1)
Vue.component('hello-world2', HelloWorld2)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld1',
      component: HelloWorld
    },
    {
      path: '/TEST1',
      name: 'HelloWorld2',
      component: HelloWorld1
    },
    {
      path: '/TEST2',
      name: 'HelloWorld',
      component: HelloWorld2
    },
    {
      path: '/sample',
      name: 'sample',
      component: sample
    }
  ]
})
