import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Dashboard from '@/views/DashboardPage.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import PersonalInfo from '@/components/pages/form/PersonalInfo.vue'
import NationalIdUpload from '@/components/pages/form/NationalIdUpload.vue'
import ConfirmInfo from '@/components/pages/form/ConfirmInfo.vue'
import { getToken } from '@/utils/auth'

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
 
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  // محافظت از داشبورد
  if (to.name === 'Dashboard' && !getToken()) {
    return next({ name: 'Login' })
  }

  // کنترل مراحل فرم + محدودیت ورود فقط از داشبورد
  if (to.matched.some((record) => record.name === 'form')) {
    // اگه کاربر از داشبورد نیومده
    if (from.name !== 'Dashboard' && from.name !== 'personalinfo' && from.name !== 'uploadimage') {
      return next({ name: 'Dashboard' })
    }

    const steps = ['personalinfo', 'uploadimage', 'confirminfo']
    const currentStepIndex = steps.indexOf(to.name)
    const fromStepIndex = steps.indexOf(from.name)

    // جلوگیری از جا زدن مراحل
    if (currentStepIndex > 0 && fromStepIndex !== currentStepIndex - 1) {
      return next({ name: 'personalinfo' })
    }
  }

  next()
})

export default router
