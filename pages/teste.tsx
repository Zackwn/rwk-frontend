import React, { useContext, useEffect, useState } from 'react';
import socketContext from '../hooks/socket/socketContext';

const Teste: React.FC = () => {
  const { getSocketID, listen } = useContext(socketContext)
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    return listen('message', (e: string) => {
      setMessages((ls) => [...ls, e])
    })
  }, [listen])

  return (
    <>
      <button onClick={() => {
        console.log(process.env.REDDIT_APP_ID)
        console.log(getSocketID())
      }}>
        socket id
      </button>
      <button onClick={() => {
        fetch('http://localhost:3333/teste', {
          method: 'GET',
          headers: {
            socketid: getSocketID()
          }
        })
      }}>
        make http
      </button>
      <div>
        {messages.map(m => <p key={Math.random()}>{m}</p>)}
      </div>
    </>
  )
}

export default Teste;