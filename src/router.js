import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'
import Multiple from './components/Multiple.vue'
import Params from './components/Params.vue'
import ParamsObject from './components/Params.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: HelloJSX
    },
    {
      path: '/multiple',
      name: 'multiple',
      components: {
        default: Multiple,
        first: HelloJSX,
        second: HelloWorld
      }
    },
    {
      path: '/params/:name',
      name: 'params',
      component: Params,
      props: true
    },
    {
      path: '/params/:name',
      name: 'params_object',
      component: ParamsObject,
      props: true
    }
  ]
})