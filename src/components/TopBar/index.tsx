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
  Avatar
} from './styles'

export function TopBar() {
  const { user, authObserver } = useFirebaseAuth()

  console.log(user.avatar)

  useEffect(() => {
    authObserver()
  }, [])

  return (
    <Container>
      <Logo id='logo' />

      <ActionContainer>
        <NotificationButton>
          <FaBell size={20} />
        </NotificationButton>

        <UserAvatar>
          {user.avatar && <img id='avatar' src={user.avatar} alt='Avatar do usuario' />}



        </UserAvatar>
      </ActionContainer>

    </Container>
  )
}