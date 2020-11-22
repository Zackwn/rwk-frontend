import styled from 'styled-components'
import { InputProps } from './InputField'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;

  align-items: center;
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`

export const Input = styled.input<InputProps>`
  width: ${props => props.customSize === "small" ? '50%' : ''};

  padding: 5px 15px;
  border-radius: 10px;
  margin-left: 5%;

  outline: 0;
  border-color: var(--discord-black);

  font-size: medium;
  font-family: 'Work Sans', sans-serif;

  transition: border-color 0.3s ease-in; 

  &:focus {
    border-color: var(--reddit-red);
  }
`
export const Label = styled.label`
  color: #a5a3aa;
  font-family: 'Work Sans', sans-serif;
`