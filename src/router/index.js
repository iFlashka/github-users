import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersIndex from '@/pages/users/index/UsersIndex'
import UsersSingle from '@/pages/users/single/UsersSingle'
import AuthSignIn from '@/pages/auth/sign-in/AuthSignIn'
import AuthSuccess from '@/pages/auth/success/AuthSuccess'
import { getCookie } from '@/helpers/cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'users',
    component: UsersIndex
  },
  {
    path: '/users/:username',
    name: 'users-single',
    component: UsersSingle
  },
  {
    path: '/auth/sign-in',
    name: 'signIn',
    component: AuthSignIn,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/auth/success',
    name: 'success',
    component: AuthSuccess,
    meta: {
      isPublic: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = getCookie('access_token')

  if (!token && !to.meta.isPublic) {
    next({
      name: 'signIn'
    })
  }

  if (token && to.meta.isPublic) {
    next({
      name: 'users'
    })
  }

  next()
})

export default router
