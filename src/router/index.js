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
      meta: {
        isLoggedIn: false,
      },
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
  const isLoggedIn = !!getToken()

  if (!isLoggedIn && to.name !== 'Login') {
    return next({ name: 'Login' })
  }

  const steps = ['personalinfo', 'uploadimage', 'confirminfo']

  if (steps.includes(to.name)) {
    const currentStepIndex = steps.indexOf(to.name)
    const fromStepIndex = steps.indexOf(from.name)

    if (!steps.includes(from.name) && from.name !== 'Dashboard') {
      if (to.name !== steps[0]) {
        return next({ name: steps[0] })
      }
    }

    if (currentStepIndex > fromStepIndex + 1) {
      return next({ name: steps[fromStepIndex + 1] })
    }
  }

  next()
})

export default router
