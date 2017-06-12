import Vue from 'vue'
import Router from 'vue-router'
import Simple from '@/components/Simple'
import SingleFile from '@/components/SingleFile'
import Animations from '@/components/Animations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/simple',
      name: 'Simple',
      component: Simple
    },

    {
      path: '/single-file',
      name: 'SingleFile',
      component: SingleFile
    },

    {
      path: '/animations',
      name: 'Animations',
      component: Animations
    }
  ]
})
