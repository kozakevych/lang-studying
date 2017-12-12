import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/main-page'
import Callback from '@/components/callback'
import Profile from '@/components/profile'
import JsCourse from '@/components/js-course'
import JsContent from '@/components/js-components/js-content'
import IntroJS from '@/components/js-components/introduction'
import ControlFlow from '@/components/js-components/control-flow'
import FunctionsJS from '@/components/js-components/functions'
import Scope from '@/components/js-components/scope'
import Arrays from '@/components/js-components/arrays'
import Loops from '@/components/js-components/loops'
import Iterators from '@/components/js-components/iterators'
import ObjectsJS from '@/components/js-components/objects'
import ClassesJS from '@/components/js-components/classes'
import BrowserCompatibility from '@/components/js-components/browser-compatibility'
import Modules from '@/components/js-components/modules'
import RequestsJS from '@/components/js-components/requests'
import AuthService from './../auth/AuthService'

Vue.use(Router)

const auth = new AuthService()

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        if (!auth.isAuthenticated()) {
          next(false)
        } else {
          next()
        }
      }
    },
    {
      path: '/js-course',
      name: 'JsCourse',
      component: JsCourse,
      children: [
        {
          path: '',
          component: JsContent
        },
        {
          path: 'introduction-js',
          component: IntroJS
        },
        {
          path: 'control-flow',
          component: ControlFlow
        },
        {
          path: 'functions',
          component: FunctionsJS
        },
        {
          path: 'scope',
          component: Scope
        },
        {
          path: 'arrays',
          component: Arrays
        },
        {
          path: 'loops',
          component: Loops
        },
        {
          path: 'iterators',
          component: Iterators
        },
        {
          path: 'objects',
          component: ObjectsJS
        },
        {
          path: 'classes',
          component: ClassesJS
        },
        {
          path: 'browser-compatibility',
          component: BrowserCompatibility
        },
        {
          path: 'modules',
          component: Modules
        },
        {
          path: 'requests',
          component: RequestsJS
        }
      ]
    }
  ]
})
