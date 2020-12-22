import React, { useContext, useEffect } from 'react';
import AuthContext from '../hooks/auth/AuthContext';
import { useRouter } from 'next/router'

const Auth: React.FC = () => {
  const router = useRouter()

  const { signInCallback } = useContext(AuthContext)

  useEffect(() => {
    async function auth() {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')

      console.log({ code })

      if (code) {
        await signInCallback(code)
        router.push('/enviar')
      } else {
        router.push('/')
      }
    }

    auth()
  }, [])

  return (
    <div>
      Fazendo Auth...
    </div>
  )
}

export default Auth;