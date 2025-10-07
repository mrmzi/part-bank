import api from '@/services/axios'

export const addDepositAccount = async (form) => {
  try {
    await api.post('/deposit-account', form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    sessionStorage.setItem('isFormSubmitted', JSON.stringify(true))
  } catch (err) {
    throw new Error(err);
  }
}
