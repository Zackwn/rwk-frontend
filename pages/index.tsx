import React, { useContext } from 'react';
import { AlignCenter } from '../components/AlignCenter';
import AuthContext from '../hooks/auth/AuthContext';

const IndexPage: React.FC = () => {
  const { signIn } = useContext(AuthContext)

  function handleSignIn() {
    signIn()
  }

  return (
    <AlignCenter background='#fff'>
      <h2
        style={{
          color: 'rgba(0 0 0 / 85%)',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: 1.35
        }}>
        Clique no botão abaixo para realizar o login <span style={{
          color: 'var(--reddit-red)'
        }}>:)</span>
      </h2>
      <button
        style={{
          color: 'white',
          background: 'var(--discord-blue)',
          border: 0,
          width: '120px',
          height: '40px',
          borderRadius: '5px',
          boxShadow: '0 2px 0 rgba(0,0,0,.045)',
          fontSize: 'large',
          cursor: 'pointer'
        }}
        onClick={handleSignIn}>
        Fazer login
      </button>
    </AlignCenter>
  )
}

export default IndexPage;