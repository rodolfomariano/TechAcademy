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
import { ChangeEvent, FormEvent, useState } from 'react'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signInWithGoogle, signInWithGitHub, signInWithEmail, loading } = useFirebaseAuth()

  const router = useRouter()

  function handleGoToSignUpPage() {
    router.push('/signup')
  }


  function handleSignInWithEmail(e: FormEvent) {
    e.preventDefault()

    signInWithEmail(email, password)
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

              <InputForm
                type='email'
                placeholder='Email'
                onChange={(e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
              />
              <InputForm
                type='password'
                placeholder='Senha'
                onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
              />
            </InputContainer>

            <SimpleButton
              title='Entrar'
              onClick={handleSignInWithEmail}
              disabled={loading}
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
