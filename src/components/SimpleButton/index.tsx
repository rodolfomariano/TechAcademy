import { ButtonHTMLAttributes } from 'react'

import {
  Container
} from './styles'

interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function SimpleButton({ title, ...rest }: SimpleButtonProps) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}