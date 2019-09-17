import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4aa02a40 = () => interopDefault(import('../pages/leaderboard/index.vue' /* webpackChunkName: "pages/leaderboard/index" */))
const _a4eb33ee = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _92393f72 = () => interopDefault(import('../pages/problems/index.vue' /* webpackChunkName: "pages/problems/index" */))
const _42a24007 = () => interopDefault(import('../pages/recover/index.vue' /* webpackChunkName: "pages/recover/index" */))
const _37b84314 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _fe535a4e = () => interopDefault(import('../pages/howto/setup.vue' /* webpackChunkName: "pages/howto/setup" */))
const _7fd6a473 = () => interopDefault(import('../pages/problems/submit.vue' /* webpackChunkName: "pages/problems/submit" */))
const _2936a3f8 = () => interopDefault(import('../pages/recover/reset.vue' /* webpackChunkName: "pages/recover/reset" */))
const _6e0e2264 = () => interopDefault(import('../pages/register/confirm.vue' /* webpackChunkName: "pages/register/confirm" */))
const _445eda56 = () => interopDefault(import('../pages/problems/_category/index.vue' /* webpackChunkName: "pages/problems/_category/index" */))
const _ffaf46ac = () => interopDefault(import('../pages/problems/_category/_task/index.vue' /* webpackChunkName: "pages/problems/_category/_task/index" */))
const _383a7a1c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/leaderboard",
      component: _4aa02a40,
      name: "leaderboard"
    }, {
      path: "/login",
      component: _a4eb33ee,
      name: "login"
    }, {
      path: "/problems",
      component: _92393f72,
      name: "problems"
    }, {
      path: "/recover",
      component: _42a24007,
      name: "recover"
    }, {
      path: "/register",
      component: _37b84314,
      name: "register"
    }, {
      path: "/howto/setup",
      component: _fe535a4e,
      name: "howto-setup"
    }, {
      path: "/problems/submit",
      component: _7fd6a473,
      name: "problems-submit"
    }, {
      path: "/recover/reset",
      component: _2936a3f8,
      name: "recover-reset"
    }, {
      path: "/register/confirm",
      component: _6e0e2264,
      name: "register-confirm"
    }, {
      path: "/problems/:category",
      component: _445eda56,
      name: "problems-category"
    }, {
      path: "/problems/:category/:task",
      component: _ffaf46ac,
      name: "problems-category-task"
    }, {
      path: "/",
      component: _383a7a1c,
      name: "index"
    }],

    fallback: false
  })
}
