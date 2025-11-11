import api from '@/services/axios'

export async function login(phoneNumber, password) {
  try {
    // const res1 = await api.post('/auth/sign-up', {
    //   firstName: 'محمد',
    //   lastName: 'محمدی',
    //   idNumber: '0880245345',
    //   phoneNumber: '09123456789',
    //   password: 'Test123456',
    // })
    // console.log(res1.data)

    const res = await api.post('/auth/login', { phoneNumber, password })
    return res.data
  } catch (err) {
    return err.response.data.error?.message?.fa
  }
}
