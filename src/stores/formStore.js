import api from '@/services/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
      step1: {},
      step2: {},
    },
  }),
  actions: {
    updateStepData(step, data) {
      this.formData[step] = data
    },
    async submitForm() {
      try {
        const { step1, step2 } = this.formData
        const form = new FormData()

        const fields = {
          firstName: step1.name,
          lastName: step1.family,
          address: step1.address,
          postalCode: step1.postalCode,
          nationalCardImage: step2.forwardimage,
        }

        Object.entries(fields).forEach(([key, value]) => {
          if (value) form.append(key, value)
        })

        await api.post('/deposit-account', form, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        sessionStorage.setItem('isSubmitted', JSON.stringify(true))

        router.push('/dashboard')
      } catch (err) {
        console.error(err)
      }
    },
  },
})
