import Image from 'next/image'
import { useEffect, useState } from 'react'

import { FaBell } from 'react-icons/fa'

import Logo from '../../assets/TechAcademy.svg'
import { useFirebaseAuth } from '../../hooks/auth'

import {
  Container,
  ActionContainer,
  NotificationButton,
  UserAvatar,
  Avatar,
  Content
} from './styles'

export function TopBar() {
  const { user, authObserver, userSignOut } = useFirebaseAuth()


  console.log(user.avatar)

  useEffect(() => {
    authObserver()
  }, [])

  return (
    <Container>
      <Content>
        <Logo id='logo' />

        <ActionContainer>
          <NotificationButton>
            <FaBell size={20} />
          </NotificationButton>

          <UserAvatar>
            {user.avatar && <img id='avatar' src={user.avatar} alt='Avatar do usuario' />}

            {/* <h1>Dashboard</h1>

            <h3>{user.id && user.name}</h3>

            <button
              onClick={userSignOut}
            >Sair</button> */}
          </UserAvatar>
        </ActionContainer>

      </Content>

    </Container>
  )
}