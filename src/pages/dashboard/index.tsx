
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFirebaseAuth } from '../../hooks/auth'
import {
  Container
} from './styles'
import { TopBar } from '../../components/TopBar'

export default function Dashboard() {

  const { authObserver, userSignOut, user } = useFirebaseAuth()

  const router = useRouter()




  return (
    <Container>
      <TopBar />
      <h1>Dashboard</h1>

      <h3>{user.id && user.name}</h3>

      <button
        onClick={userSignOut}
      >Sair</button>
    </Container>
  )
}