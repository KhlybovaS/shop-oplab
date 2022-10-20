import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e167009 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _036fa14c = () => interopDefault(import('../pages/Complexes.vue' /* webpackChunkName: "pages/Complexes" */))
const _45e0fe87 = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _05448ace = () => interopDefault(import('../pages/ListAnalyzes.vue' /* webpackChunkName: "pages/ListAnalyzes" */))
const _e967a658 = () => interopDefault(import('../pages/OrganAnalyzes.vue' /* webpackChunkName: "pages/OrganAnalyzes" */))
const _3ebd189c = () => interopDefault(import('../pages/PopularAnalyzes.vue' /* webpackChunkName: "pages/PopularAnalyzes" */))
const _da6f2b48 = () => interopDefault(import('../pages/ShoppingCart.vue' /* webpackChunkName: "pages/ShoppingCart" */))
const _085c8f35 = () => interopDefault(import('../pages/TypeAnalyzes.vue' /* webpackChunkName: "pages/TypeAnalyzes" */))
const _4469c760 = () => interopDefault(import('../pages/Comlpexes/_id/index.vue' /* webpackChunkName: "pages/Comlpexes/_id/index" */))
const _7ec65990 = () => interopDefault(import('../pages/ListAnalyze/_id/index.vue' /* webpackChunkName: "pages/ListAnalyze/_id/index" */))
const _00889946 = () => interopDefault(import('../pages/OrganAnalyze/_id/index.vue' /* webpackChunkName: "pages/OrganAnalyze/_id/index" */))
const _3c6523c8 = () => interopDefault(import('../pages/TypeAnalyze/_id/index.vue' /* webpackChunkName: "pages/TypeAnalyze/_id/index" */))
const _265c2aee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _7e167009,
    name: "About"
  }, {
    path: "/Complexes",
    component: _036fa14c,
    name: "Complexes"
  }, {
    path: "/Contacts",
    component: _45e0fe87,
    name: "Contacts"
  }, {
    path: "/ListAnalyzes",
    component: _05448ace,
    name: "ListAnalyzes"
  }, {
    path: "/OrganAnalyzes",
    component: _e967a658,
    name: "OrganAnalyzes"
  }, {
    path: "/PopularAnalyzes",
    component: _3ebd189c,
    name: "PopularAnalyzes"
  }, {
    path: "/ShoppingCart",
    component: _da6f2b48,
    name: "ShoppingCart"
  }, {
    path: "/TypeAnalyzes",
    component: _085c8f35,
    name: "TypeAnalyzes"
  }, {
    path: "/Comlpexes/:id",
    component: _4469c760,
    name: "Comlpexes-id"
  }, {
    path: "/ListAnalyze/:id",
    component: _7ec65990,
    name: "ListAnalyze-id"
  }, {
    path: "/OrganAnalyze/:id",
    component: _00889946,
    name: "OrganAnalyze-id"
  }, {
    path: "/TypeAnalyze/:id",
    component: _3c6523c8,
    name: "TypeAnalyze-id"
  }, {
    path: "/",
    component: _265c2aee,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
