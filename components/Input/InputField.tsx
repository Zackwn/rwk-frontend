import React, { InputHTMLAttributes } from 'react';
import { Input, Label, Container } from './style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customSize?: 'small'
}

interface InputFieldsProps extends InputProps {
  label: string
}

const InputField: React.FC<InputFieldsProps> = ({ children, label, id, ...InputProps }) => {
  return (
    <Container>
      <Label htmlFor={id} >{label}</Label>
      <Input id={id} {...InputProps} />
    </Container>
  )
}

export default InputField;