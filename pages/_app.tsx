import { NextPage } from 'next'
import React, { useCallback } from 'react'
import SocketContext, { IStatusData } from '../hooks/socket/socketContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { GlobalStyles } from '../styles/globalStyle'

const io = require("socket.io-client")

const socket = io("http://localhost:3333", {
  withCredentials: true,
  // transports: ['websocket']
});

const MyApp: NextPage = ({ Component, pageProps }: any) => {
  const [roomState, setRoomState] = useLocalStorage<string>('room', null)
  const [statusDataState, setStatusDataState] = useLocalStorage<IStatusData[]>('rwk_status_data', null)

  const getSocketID = useCallback(() => {
    return socket.id
  }, [])

  const listen = useCallback((eventName: string, cb: any) => {
    socket.on(eventName, cb)

    return function cleanUp() {
      socket.off(eventName, cb)
    }
  }, [])

  const emit = useCallback((eventName: string, message: any) => {
    socket.emit(eventName, message)
  }, [])

  const getRoom = useCallback(() => {
    return roomState
  }, [roomState])

  const getStatusData = useCallback(() => {
    return statusDataState
  }, [statusDataState])

  return (
    <SocketContext.Provider
      value={{
        getSocketID,
        listen,
        emit,
        getRoom,
        getStatusData,
        setRoom: setRoomState,
        setStatusData: setStatusDataState
      }}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </SocketContext.Provider>
  )
}

export default MyApp