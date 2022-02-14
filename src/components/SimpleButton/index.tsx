import { ButtonHTMLAttributes } from 'react'
import { Oval } from 'react-loader-spinner'

import { useFirebaseAuth } from '../../hooks/auth'

import {
  Container
} from './styles'

interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function SimpleButton({ title, ...rest }: SimpleButtonProps) {
  const { loading } = useFirebaseAuth()

  return (
    <Container {...rest}>
      {loading
        ? <Oval width='20' height='20' color='blue' />
        : title
      }

    </Container>
  )
}