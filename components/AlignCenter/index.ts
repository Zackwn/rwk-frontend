import styled from 'styled-components';

interface AlignCenterProps {
  background: string
}

export const AlignCenter = styled.div<AlignCenterProps>`
  background: ${props => props.background};

  width: 100vw;
  height: 100vh;
  
  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: .6em
`;
