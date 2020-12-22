import { NextPage } from 'next'
import React, { useCallback, useEffect, useState } from 'react'
import SocketContext, { IStatusData } from '../hooks/socket/socketContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { GlobalStyles } from '../styles/globalStyle'
import { Socket } from '../hooks/socket/socketContext'
import AuthProvider from '../hooks/auth/AuthProvider'

const MyApp: NextPage = ({ Component, pageProps }: any) => {
  const [roomState, setRoomState] = useLocalStorage<string>('room', null)
  const [statusDataState, setStatusDataState] = useLocalStorage<IStatusData[]>('rwk_status_data', null)
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const io = require("socket.io-client")

    const socket = io(process.env.API_URL, {
      withCredentials: true,
      // transports: ['websocket']
    })
    setSocket(socket)
    return () => socket.disconnect()
  }, [])

  const getSocketID = useCallback(() => {
    return socket.id
  }, [socket])

  const listen = useCallback((eventName: string, cb: any) => {
    if (!socket) {
      return
    }

    socket.on(eventName, cb)

    return function cleanUp() {
      socket.off(eventName, cb)
    }
  }, [socket])

  const emit = useCallback((eventName: string, message: any) => {
    socket.emit(eventName, message)
  }, [socket])

  const getRoom = useCallback(() => {
    return roomState
  }, [roomState])

  const getStatusData = useCallback(() => {
    return statusDataState
  }, [statusDataState])

  return (
    <AuthProvider>
      <SocketContext.Provider
        value={{
          getSocketID,
          listen,
          emit,
          getRoom,
          getStatusData,
          setRoom: setRoomState,
          setStatusData: setStatusDataState,
          socket
        }}
      >
        <GlobalStyles />
        <Component {...pageProps} />
      </SocketContext.Provider>
    </AuthProvider>
  )
}

export default MyApp