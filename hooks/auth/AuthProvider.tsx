import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext'
import { v4 as id } from 'uuid'
import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'
import { useRouter } from 'next/router'

const AuthProvider: React.FC = ({ children }) => {
  const { pathname, events } = useRouter()

  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const nonProtectedRoutes = ['/', '/auth', '/teste']

    const handleRouteChange = (url: string) => {
      url = url.split('?')[0]
      if (!nonProtectedRoutes.includes(url) && !isAuthenticated) {
        window.location.href = '/'
      }
    }

    if (!nonProtectedRoutes.includes(pathname) && !isAuthenticated) {
      window.location.href = '/'
    }

    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [isAuthenticated])

  function signIn() {
    window.location.assign(
      `${process.env.REDDIT_AUTH_URL
      }?${queryString.stringify({
        client_id: process.env.REDDIT_APP_ID,
        response_type: 'code',
        state: id(),
        redirect_uri: process.env.REDDIT_REDIRECT_URL,
        duration: 'temporary',
        scope: 'read'
      })}`
    )
  }

  async function signInCallback(token: string) {
    const authToken = window.btoa(`${process.env.REDDIT_APP_ID}:${process.env.REDDIT_APP_SECRET}`)
    const response = await fetch(process.env.REDDIT_GET_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: queryString.stringify({
        grant_type: 'authorization_code',
        code: token,
        redirect_uri: process.env.REDDIT_REDIRECT_URL
      })
    })

    const data = await response.json()

    console.log({
      status: response.status,
      data
    })

    if (data.access_token) {
      setIsAuthenticated(true)
      setAccessToken(data.access_token)

      // teste

      // https://oauth.reddit.com/.json?count=5&limit=50
      // https://oauth.reddit.com/r/memes/top.json

      // const response = await fetch('https://oauth.reddit.com/r/memes/top.json', {
      //   method: 'GET',
      //   headers: {
      //     'Authorization': `Bearer ${data.access_token}`
      //   }
      // })
      // console.log(await response.json())
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signInCallback,
        accessToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;