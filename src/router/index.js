import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/best',
    name: 'Best',
    component: () => import('../views/Best.vue')
  },
  {
    path: '/AddNew',
    name: 'AddNew',
    component: () => import('../views/AddNew.vue')
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
    component: () => import('../views/MyPosts.vue')
  },
  {
    path: '/MyComments',
    name: 'MyComments',
    component: () => import('../views/MyComments.vue')
  },
 {
    path: '/:id',
    component: () => import('../views/PostForm.vue')
  },
    {
    path: '/PostsByCategories',
    name: 'PostsByCategories',
    component: () => import('../views/PostsByCategories.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
