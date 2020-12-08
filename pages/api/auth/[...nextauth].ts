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

          const user = data?.user || {}

          if (data.token) {
            user.token = data.token
          }

          return Promise.resolve(user)

          // return Promise.reject(new Error('error message')) // Redirect to error page
        } catch (error) {
          // console.log('error', error)
          return Promise.resolve(null)
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    /**
     * @param  {object} session      Session object
     * @param  {object} user         User object    (if using database sessions)
     *                               JSON Web Token (if not using database sessions)
     * @return {object}              Session that will be returned to the client
     */
    session: async (session: any, user: any) => {
      session.token = user?.full_info.token
      return Promise.resolve(session)
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSignIn = !!user

      if (isSignIn) {
        token.auth_time = Math.floor(Date.now() / 1000)
        token.full_info = user
      }
      return Promise.resolve(token)
    },
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
