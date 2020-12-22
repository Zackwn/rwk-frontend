import { NextPage } from 'next'
import React, { FormEvent, useContext, useState } from 'react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Content } from '../components/Content'
import { InputField } from '../components/Input'
import Menubar from '../components/Menubar'
import fetch from 'isomorphic-unfetch'
import SocketContext from '../hooks/socket/socketContext'
import { useRouter } from 'next/router'

interface SendoFormProps {
  message: string
}

const SendForm: NextPage<SendoFormProps> = () => {
  const router = useRouter()

  const [discordURL, setDiscordURL] = useState('')
  const [subreddit, setSubreddit] = useState('')
  const [limit, setLimit] = useState(5)

  const { getSocketID, setRoom, setStatusData } = useContext(SocketContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    console.log(getSocketID())

    const response = await fetch(`${process.env.API_URL}/api/send`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        socketID: getSocketID(),
        limit,
        subreddit,
        webhookUrl: discordURL
      })
    })

    const res = await response.json()

    setRoom(res.room)
    setStatusData(res.statusData)

    router.push('/status')
  }

  return (
    <>
      <Container>
        <Menubar />
        <Content>
          <form className='main' onSubmit={handleSubmit}>
            <InputField
              label='Limite'
              type='number'
              placeholder='padrão: 5'
              onChange={({ target }) => setLimit(Number(target.value))}
            />

            <InputField
              label='Discord URL'
              type='text'
              placeholder='coloque a url do seu webhook aqui'
              onChange={({ target }) => setDiscordURL(target.value)}
            />

            <InputField
              label='Subreddit'
              type='text'
              placeholder='coloque o nome do subreddit aqui'
              onChange={({ target }) => setSubreddit(target.value)}
            />

            <Button type='submit'>Enviar</Button>
          </form>
        </Content>
      </Container>
    </>
  )
}

SendForm.getInitialProps = async ({ req }) => {
  // const response = await fetch('http://localhost:3000/api/test', {method: 'post' })
  // console.log(response.status)

  return { message: 'hello!' }
}

export default SendForm
