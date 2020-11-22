import React from 'react'
import { Socket as SocketIO } from 'socket.io-client'

export type Socket = typeof SocketIO

export type Status = 'PENDING' | 'FAILED' | 'SUCCESS'

export interface IStatusData {
  url: string
  status: Status
}

interface SocketContext {
  getSocketID(): string
  listen(eventName: string, cb: any): void
  emit(eventName: string, message: any): void
  getRoom(): string | null
  getStatusData(): IStatusData[]
  setRoom: React.Dispatch<React.SetStateAction<string>>
  setStatusData: React.Dispatch<React.SetStateAction<IStatusData[]>>
}

export default React.createContext<SocketContext>({} as SocketContext)