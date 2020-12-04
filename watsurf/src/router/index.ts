import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "register" */ '../components/Home.vue'),
  //  meta: { requiresAuth: true },
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue'),
 //   meta: { requiresAuth: false },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue'),
 //   meta: { requiresAuth: false },
  },
  {
    path: '/*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || "/"),
  routes
})
/*
router.beforeEach((to, from, next) => {
  const { authenticating, user } = useAuth()
*/

  // Not logged into a guarded route?
 // if ( authenticating.value === false && to.meta.requiresAuth === true && !user?.value ) {
 //   console.log('requires auth, redirect to login');
//
//    next({ name: 'login' })
 // }

  // Redirect user to route if they don't have the correct subscription
  // else if ( to.meta.requiresAuth === true && !user?.value?.subscription  && to.name!.toString().startsWith('subscribe') === false ) {
  //   console.log('requires valid subscription, redirect to subscribe');
  //   next({ name: 'subscribe' })
  // }

  // Logged in for an auth route
  // else if ( (to.name == 'login' || to.name == 'register') && user!.value ) {
  //   console.log('login or register, has a user so send home');

  //   next({ name: 'home' })
  // }

  // Carry On...
  //else next()
//})

export default router