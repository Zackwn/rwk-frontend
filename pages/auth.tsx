import React, { useContext, useEffect } from 'react';
import AuthContext from '../hooks/auth/AuthContext';
import { useRouter } from 'next/router'
import { Loader } from '../components/Loader';
import { AlignCenter } from '../components/AlignCenter';

const Auth: React.FC = () => {
  const router = useRouter()

  const { signInCallback } = useContext(AuthContext)

  useEffect(() => {
    async function auth() {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')

      console.log({ code })

      if (code !== null) {
        await signInCallback(code)
        router.push('/enviar')
      } else {
        router.push('/enviar')
      }
    }

    auth()
  }, [])

  return (
    <AlignCenter background='#fff'>
      <Loader />
    </AlignCenter>
  )
}

export default Auth;