import api from '@/services/axios'
export const fetchTransactions = async () => {
  try {
    const response = await api.get('/transactions?page=1&pageSize=20')
    return response.data.data
  } catch (error) {
    throw error.response?.data || { message: 'خطا در گرفتن تراکنش ها' }
  }
}
