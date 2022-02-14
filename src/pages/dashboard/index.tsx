
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFirebaseAuth } from '../../hooks/auth'
import {
  Container
} from './styles'

export default function Dashboard() {

  const { authObserver, userSignOut, user } = useFirebaseAuth()

  const router = useRouter()


  useEffect(() => {
    authObserver()

    !user.id && router.push('/')

  }, [])

  return (
    <Container>
      <h1>Dashboard</h1>

      <h3>{user.id && user.email}</h3>

      <button
        onClick={userSignOut}
      >Sair</button>
    </Container>
  )
}