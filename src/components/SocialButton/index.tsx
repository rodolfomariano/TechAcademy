
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai'
import { FiTwitch } from 'react-icons/fi'

import {
  Container
} from './styles'

interface SocialButtonProps {
  type: 'github' | 'google' | 'twitch'
}

export function SocialButton({ type }: SocialButtonProps) {
  return (
    <Container>
      {type === 'github' && <AiOutlineGithub size={20} />}
      {type === 'google' && <AiOutlineGoogle size={20} />}
      {type === 'twitch' && <FiTwitch size={20} />}
    </Container>
  )
}