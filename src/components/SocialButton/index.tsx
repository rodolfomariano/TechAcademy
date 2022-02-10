
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai'
import { CgMicrosoft } from 'react-icons/cg'

import {
  Container
} from './styles'

interface SocialButtonProps {
  type: 'github' | 'google'
  onClick?: () => void
}

export function SocialButton({ type, onClick }: SocialButtonProps) {
  return (
    <Container onClick={onClick}>
      {type === 'github' && (
        <>
          <AiOutlineGithub size={20} />
          GitHub
        </>
      )}
      {type === 'google' && (
        <>
          <AiOutlineGoogle size={20} />
          Google
        </>
      )}
    </Container>
  )
}
