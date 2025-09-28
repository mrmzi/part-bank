

import api from "@/plugins/axios"

export async function login(phoneNumber, password) {
  try {
    const res = await api.post('/auth/login', { phoneNumber, password })
    return res.data
  } catch (err) {
    throw err.response?.data || { message: 'خطا در ورود' }
  }
}