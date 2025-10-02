import api from "@/plugins/axios"
export const fetchTransactions = async () => {
  try {
    const response = await api.get('/transactions?page=1&pageSize=20')
    return response.data.data;
  } catch (error) {
     throw error.response?.data || { message: 'خطا در ورود' }
  }
}



// export async function getbalance() {
//   try {
//     const res = await api.get('/deposit-account',)
//     return res.data
//   } catch (err) {
//     throw err.response?.data || { message: 'خطا در ورود' }
//   }
// }

