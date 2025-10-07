
const TOKEN_KEY = 'token'

export function saveAuth(user, token) {
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function clearAuth() {
  localStorage.clear()

}
