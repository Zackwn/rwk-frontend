import styled from 'styled-components'

interface LoaderProps {
  small?: boolean
}

export const Loader = styled.div<LoaderProps>`
  border: ${props => props.small ? '2px' : '16px'} solid #f3f3f3;
  border-radius: 50%;
  border-top: ${props => props.small ? '2px' : '16px'} solid var(--reddit-red);
  width: ${props => props.small ? '20px' : '140px'};
  height: ${props => props.small ? '20px' : '140px'};
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`