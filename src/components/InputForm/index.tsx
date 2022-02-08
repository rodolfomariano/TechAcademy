
import { ChangeEvent, FormEvent, HTMLProps, useState } from 'react'
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'

import {
  Container,
  Input,
  Button
} from './styles'

interface InputFormProps extends HTMLProps<HTMLInputElement> {
  type: 'text' | 'password' | 'email'
  placeholder: string
}

export function InputForm({ type, placeholder, ...rest }: InputFormProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const [seePassword, setSeePassword] = useState(false)

  function handleSeePassword(e: FormEvent) {
    e.preventDefault()
    setSeePassword(!seePassword)
  }

  return (
    <Container
      id='container'
      style={{
        color: inputValue.length > 0 ? '#5CB1CE' : '#707886',
        borderColor: inputValue.length > 0 ? '#5CB1CE' : '#707886'
      }}
    >
      {type === 'text' && <AiOutlineUser size={20} />}
      {type === 'password' && <AiOutlineLock size={20} />}
      {type === 'email' && <AiOutlineMail size={20} />}
      <Input
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value)}
        style={{
          color: inputValue.length > 0 ? '#5CB1CE' : '#707886',
          borderColor: inputValue.length > 0 ? '#5CB1CE' : '#707886'
        }}
        type={type === 'password' && seePassword ? 'text' : type}
      />

      {type === 'password' && (
        <Button
          onClick={handleSeePassword}
        >
          {seePassword
            ? <AiOutlineEyeInvisible size={20} />
            : <AiOutlineEye size={20} />
          }

        </Button>

      )}
    </Container>
  )
}