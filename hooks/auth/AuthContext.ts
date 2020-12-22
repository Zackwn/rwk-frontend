import { createContext } from 'react'

interface AuthContext {
  signIn(): void,
  signInCallback(token: string): any,
  accessToken: string | null
}

export default createContext<AuthContext>({} as AuthContext)