import Vue from 'vue'
import Router from 'vue-router'
// import BootstrapVue from 'bootstrap-vue'
// import VueBreadcrumbs from 'vue-breadcrumbs'
import MainPage from '@/components/main-page'
import SignIn from '@/components/sign-in'
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

// Vue.use(BootstrapVue)
Vue.use(Router)
// Vue.use(VueBreadcrumbs)

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
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
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
