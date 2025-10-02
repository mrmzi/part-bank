import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Dashboard from '@/views/Dashboard.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect: ({name: 'Login'})
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue')
    },
    {
      path: '/createAccount',
      name: 'CreateAccount',
      component: () => import('@/views/CreateAccount.vue')
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: () => import('@/components/views/form/PersonalInfo.vue')
    },
    {
      path: '/confirmInfo',
      name: 'ConfirmInfo',
      component: () => import('@/components/views/form/ConfirmInfo.vue')
    },
    {
      path: '/nationalIdUpload',
      name: 'NationalIdUpload',
      component: () => import('@/components/views/form/NationalIdUpload.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ],
})

export default router
