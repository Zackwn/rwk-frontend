import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  /* border: 3px solid #000; */
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    "Header"
    "Content"
  ;
`