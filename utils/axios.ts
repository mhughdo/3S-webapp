import axios from 'axios'
import Router from 'next/router'
import { getSession, signOut } from 'next-auth/client'

const instance = axios.create({
  baseURL: 'https://sans.hughdo.dev/api',
})

instance.interceptors.request.use(
  async (config) => {
    const session = await getSession()
    if (session?.token) {
      config.headers.Authorization = `${session.token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const code = error && error.response ? error.response.status : 0
    if (code === 401) {
      if (typeof window !== 'undefined') {
        Router.push('/login')
        signOut()
        console.log('Logged out')
      }
    }
    return Promise.reject(error)
  }
)

export default instance
