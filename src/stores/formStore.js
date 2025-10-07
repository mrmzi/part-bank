import router from '@/router'
import { defineStore } from 'pinia'
import { addDepositAccount } from '@/services/addAccount'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
      step1: {},
      step2: {},
    },
    isSubmitted: false, 
  }),
  actions: {
    updateStepData(step, data) {
      this.formData[step] = data
    },
    async submitForm() {
      try {
        const { step1, step2 } = this.formData
        const form = new FormData()

        const formFields = {
          firstName: step1.name,
          lastName: step1.family,
          address: step1.address,
          postalCode: step1.postalCode,
          nationalCardImage: step2.forwardimage,
        }

        Object.entries(formFields).forEach(([key, value]) => {
          if (value) form.append(key, value)
        })

        await addDepositAccount(form)
        router.push('/dashboard')
      } catch (err) {
        console.error(err)
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'form-store',
        storage: localStorage,
        paths: ['isSubmitted'], 
      },
    ],
  },
})
