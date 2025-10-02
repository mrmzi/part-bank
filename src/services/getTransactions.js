import { getToken } from '@/utils/auth'
import axios from 'axios'


const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MzdjMjE5Zi00MzBhLTRjNTItYjhmNi1iMjcxOWExNTFmODYiLCJwaG9uZU51bWJlciI6IjA5MTIzNDU2Nzg5IiwiaWF0IjoxNzU5MzgzMzU4LCJleHAiOjE3NTkzODY5NTh9.4VEeLxx73WTfm73YpQZv_sjiNhYIwaxbL_QBOwjmkgI'

export const fetchTransactions = async () => {
  try {
    const response = await axios.get('/transactions?page=1&pageSize=20', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })

    return response.data.data;
  } catch (error) {
    console.error(error)
  }
}
