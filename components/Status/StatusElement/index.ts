import styled from 'styled-components'
import { InputHTMLAttributes } from 'react'
import { Status } from '../../../hooks/socket/socketContext'

interface StatusElement extends InputHTMLAttributes<HTMLDivElement> {
  status: Status
}

export const StatusElement = styled.div<StatusElement>`
  background-color: ${props => props.status === "SUCCESS"
    ? "var(--discord-green)"
    : props.status === "FAILED"
      ? "var(--discord-red)"
      : "var(--discord-blue)"
  };
  border-radius: 5px;
  padding: 5px;
  color: white;
  box-shadow: 5px 5px 15px -2px var(--discord-dark-gray);
  transition: background-color 0.3s ease-in;
  overflow: hidden;

  & + & {
    margin-top: 15px;
  }
`