import React, { useContext, useEffect } from 'react';
import { Container } from '../components/Container';
import Menubar from '../components/Menubar';
import SocketContext from '../hooks/socket/socketContext';
import { useRouter } from 'next/router'
import { StatusContainer } from '../components/Status/StatusContainer';
import { StatusElement } from '../components/Status/StatusElement';

const Status: React.FC = () => {
  const router = useRouter()
  const { listen, setRoom, getRoom, getStatusData, setStatusData } = useContext(SocketContext)

  useEffect(() => {
    // browser will ask if user want to reload the page 
    window.onbeforeunload = () => {
      return ''
    }
    if (getRoom() === null || getStatusData() === null) {
      router.replace('/')
    } else {
      return listen(getRoom(), ({ status, index, end }) => {
        if (end) {
          setRoom(null)
          setStatusData(null)
        } else {
          setStatusData(prevStatusData => {
            console.log({ prevStatusData })
            return prevStatusData.map((statusData, i) => {
              if (i === index) {
                statusData.status = status
              }
              return statusData
            })
          })
        }
      })
    }
  }, [])

  return (
    <Container>
      <Menubar />
      <div className='main'>
        <p style={{ fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 600, fontStyle: 'italic' }}>Status page</p>
        <StatusContainer>
          {getStatusData() ? getStatusData().map((el, i) => {
            return (
              <StatusElement
                status={el.status}
                key={i}
              >
                {el.url}
              </StatusElement>
            )
          }) : <h2 style={{ color: 'white', fontFamily: 'Work Sans', fontWeight: 500 }}>Tudo foi enviado</h2>}
        </StatusContainer>
      </div>
    </Container>
  )
}

export default Status;