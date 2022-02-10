import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useFirebaseAuth } from '../hooks/auth'

import Logo from '../assets/TechAcademy.svg'
import CodeImage from '../assets/code-image.svg'

import { InputForm } from '../components/InputForm'
import { SimpleButton } from '../components/SimpleButton'
import { SocialButton } from '../components/SocialButton'


import {
  Container,
  ImageContainer,
  Text,
  LoginContainer,
  Header,
  LoginContent,
  Form,
  ForgotPasswordButton,
  InputContainer,
  CreateAccountButton,
  DividerContainer,
  DividerRow,
  DividerText,
  SocialButtonContainer
} from '../styles/home'
import { useState } from 'react'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signInWithGoogle, signInWithGitHub } = useFirebaseAuth()

  const router = useRouter()

  function handleGoToSignUpPage() {
    router.push('/signup')
  }




  return (
    <Container>
      <ImageContainer id='image-container'>
        <Logo />
        <CodeImage />

        <Text>
          Torne-se um desenvolvedor usando a principais <br />
          tecnologias do mercado.
        </Text>

      </ImageContainer>

      <LoginContainer>
        <Header>Login</Header>

        <LoginContent>
          <Form>
            <InputContainer>

              <InputForm type='email' placeholder='Email' />
              <InputForm type='password' placeholder='Senha' />
            </InputContainer>

            <SimpleButton
              title='Entrar'
            />
          </Form>

          <ForgotPasswordButton>
            Esqueci a senha
          </ForgotPasswordButton>

          <CreateAccountButton
            onClick={handleGoToSignUpPage}
          >
            Criar uma conta
          </CreateAccountButton>

        </LoginContent>

        <DividerContainer>
          <DividerRow />
          <DividerText>ou</DividerText>
        </DividerContainer>

        <SocialButtonContainer>
          <SocialButton type='github' onClick={signInWithGitHub} />
          <SocialButton type='google' onClick={signInWithGoogle} />
        </SocialButtonContainer>

      </LoginContainer>
    </Container>
  )
}

export default Home
