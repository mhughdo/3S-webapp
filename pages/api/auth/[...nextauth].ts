import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

import { NextApiHandler } from 'next'

const options: InitOptions = {
  providers: [
    Providers.Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const {
            data: { data },
          } = await axios({
            baseURL: 'https://sans.hughdo.dev/api/',
            url: '/v1/auth/signin',
            method: 'POST',
            data: {
              email: credentials.email,
              password: credentials.password,
            },
          })

          if (data) {
            return Promise.resolve(data)
          }

          return Promise.resolve(null)
          // return Promise.reject(new Error('error message')) // Redirect to error page
        } catch (error) {
          console.log('error', error)
          return Promise.resolve(null)
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET || '3SSECRETTOKEN',
  },
  pages: {
    signIn: '/signin',
    signOut: '/',
    error: '/signin',
    newUser: null, // If set, new users will be directed here on first sign in
  },
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler
