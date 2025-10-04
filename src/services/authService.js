import api from '@/services/axios'

export async function login(phoneNumber, password) {
  try {
    const res = await api.post('/auth/login', { phoneNumber, password })
    return res.data
  } catch (err) {
    return err.response.data.error.message.fa
  }
}
