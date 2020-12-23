import React from 'react';
import { Header } from '../Header';

import Logo from '../../assets/images/logo.png'
import LogoText from '../../assets/images/logoText.png'
import { useRouter } from 'next/router';
import { StyledLink } from '../Link';
import NextLink from 'next/link'

const Menubar: React.FC = () => {
  const router = useRouter()

  return (
    <Header>
      <div
        onClick={() => router.push('/')}
        style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
      >
        <img src={Logo} alt="RWK Logo" width={90} />
        <img src={LogoText} alt="RWK Logo" width={100} />
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '45px', color: 'white' }} >
        <NextLink href='/enviar'>
          <StyledLink>Enviar</StyledLink>
        </NextLink>
        <StyledLink href="https://www.buymeacoffee.com/rafaelzk" target="_blank" rel="noopener noreferrer">Doação</StyledLink>
      </nav>
    </Header>
  )
}

export default Menubar;