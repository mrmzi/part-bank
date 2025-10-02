import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Dashboard from '@/views/Dashboard.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import PersonalInfo from '@/components/views/form/PersonalInfo.vue'
import NationalIdUpload from '@/components/views/form/NationalIdUpload.vue'
import ConfirmInfo from '@/components/views/form/ConfirmInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'Login' },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/form',
      name: 'form',
      redirect: { name: 'personalinfo' },
      component: CreateAccount,
      children: [
        {
          path: 'personalinfo',
          name: 'personalinfo',
          component: PersonalInfo,
        },
        {
          path: 'uploadimage',
          name: 'uploadimage',
          component: NationalIdUpload,
        },
        {
          path: 'confirminfo',
          name: 'confirminfo',
          component: ConfirmInfo,
        },
      ],
    },
  ],
})

export default router
