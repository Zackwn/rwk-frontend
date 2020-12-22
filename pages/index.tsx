import React, { useContext } from 'react';
import AuthContext from '../hooks/auth/AuthContext';

const IndexPage: React.FC = () => {
  const { signIn } = useContext(AuthContext)

  function handleSignIn() {
    signIn()
  }

  return (
    <button onClick={handleSignIn}>
      Clique aqui para fazer login
    </button>
  )
}

export default IndexPage;