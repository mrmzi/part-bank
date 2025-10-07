import api from '@/services/axios'
import { useFormStore } from '@/stores/formStore'
export const addDepositAccount = async (form) => {
  const formStore = useFormStore()
  try {
    await api.post('/deposit-account', form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    formStore.isSubmitted = true
  } catch (err) {
    throw new Error(err)
  }
}
