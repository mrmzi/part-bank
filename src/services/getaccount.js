import api from '@/services/axios'

export async function getbalance() {
  try {
    const res = await api.get('/deposit-account')
    return res.data
  } catch (err) {
    throw err.response?.data || { message: 'خطا در ورود' }
  }
}
