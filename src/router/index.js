import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/best',
    name: 'Best',
    component: () => import('../views/Best.vue')
  },
  {
    path: '/AddNew',
    name: 'AddNew',
    component: () => import('../views/AddNew.vue'),
    meta: { 
      requiresAUTH: true
    }
  },
  {
    path: '/RegistrationForm',
    name: 'RegistrationForm',
    component: () => import('../views/RegistrationForm.vue')
  },
  {
    path: '/Verification',
    name: 'Verification',
    component: () => import('../views/Verification.vue')
  },
  {
    path: '/MyPosts',
    name: 'MyPosts',
    component: () => import('../views/MyPosts.vue'),
    meta: { 
      requiresAUTH: true
    }
  },
  {
    path: '/MyComments',
    name: 'MyComments',
    component: () => import('../views/MyComments.vue'),
    meta: { 
      requiresAUTH: true
    }
  },
  {
    path: '/:id',
    component: () => import('../views/PostForm.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAUTH)) {
    if (store.getters.ISLOG) {
      next()
      return
    }
    next('/RegistrationForm') 
  } else {
    next() 
  }
})
export default router
