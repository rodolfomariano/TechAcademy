import {
  Container
} from './styles'

interface SimpleButtonProps {
  title: string
}

export function SimpleButton({ title }: SimpleButtonProps) {
  return (
    <Container>
      {title}
    </Container>
  )
}