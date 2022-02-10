import { createRef, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from "react-google-recaptcha"

import Logo from '../../assets/TechAcademy.svg'
import CodeImage from '../../assets/code-image-2.svg'

import { InputForm } from '../../components/InputForm'
import { SimpleButton } from '../../components/SimpleButton'

import {
  Container,
  ImageContainer,
  Text,
  LoginContainer,
  Header,
  LoginContent,
  Form,
  HaveAccountText,
  HaveAccountButton,
  InputContainer,
  Terms,
  UseTerms,
  Politics
} from './styles'

export default function Signup() {
  const [recaptcha, setRecaptcha] = useState('')

  const recaptchaRef = useRef(null)
  const key = process.env.NEXT_PUBLIC_RECAPCHA_KEY as string

  const router = useRouter()

  function handleGoToHome() {
    router.push('/')
  }

  function handleCaptureRecaptcha(value: string) {
    setRecaptcha(value)
  }

  return (
    <Container>
      <ImageContainer id='image-container'>
        <Logo />
        <CodeImage />

        <Text>
          Crie uma conta e desfrute tudo o que <br ></br>
          podemos oferecer
        </Text>

      </ImageContainer>

      <LoginContainer>
        <Header>Login</Header>

        <LoginContent>
          <Form>
            <InputContainer>
              <InputForm type='text' placeholder='Digite seu nome' />
              <InputForm type='email' placeholder='Digite um email' />
              <InputForm type='email' placeholder='Confirme o email' />
              <InputForm type='password' placeholder='Digite uma senha' />
              <InputForm type='password' placeholder='Confirme a senha' />
            </InputContainer>

            <ReCAPTCHA
              ref={recaptchaRef}
              size="normal"
              sitekey={key}
              onChange={e => handleCaptureRecaptcha(e as string)}
            />

            <Terms>
              Ao se registrar, você aceita nossos <UseTerms>termos de uso </UseTerms> <br />
              e a nossa <Politics>política de privacidade</Politics>.
            </Terms>

            <SimpleButton
              title='Criar conta'
            />
          </Form>

          <HaveAccountText>
            Já tem uma conta? Faça o

            <HaveAccountButton
              onClick={handleGoToHome}
            >
              Login
            </HaveAccountButton>

          </HaveAccountText>


        </LoginContent>


      </LoginContainer>
    </Container>
  )
}