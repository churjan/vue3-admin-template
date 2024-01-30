import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: () => import('../views/HomeView/HomeView.vue')
    },
    {
      path: '/login',
      component: () => import('../views/LoginView/LoginView.vue')
    },
    {
      path: '/table',
      component: () => import('../views/TableView/TableView.vue')
    }
  ]
})

export default router
