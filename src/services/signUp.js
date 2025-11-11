import api from '@/services/axios'

export async function signUp(phoneNumber, password) {
  try {
    const res = await api.post('/auth/sign-up', {
      firstName: 'محمد',
      lastName: 'محمدی',
      idNumber: '0880245345',
      phoneNumber: phoneNumber,
      password: password,
    })
    console.log(res.data)

    return res.data
  } catch (err) {
    return err.response.data.error?.message?.fa
  }
}
