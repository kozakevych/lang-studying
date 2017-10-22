import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/main-page'
import SignIn from '@/components/sign-in'
import JsContent from '@/components/js-content'
import IntroJS from '@/components/js-components/introduction'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/js-content',
      name: 'Js',
      component: JsContent
    },
    {
      path: '/js-content/introduction-js',
      name: 'IntroJS',
      component: IntroJS
    }
  ]

})
