import styled from 'styled-components'

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
 
  color: white;
  font-size: large;

  transition: all 0.2s cubic-bezier(1, 0, 0, 1);

  &:hover {
    filter: brightness(80%)
  }
`
