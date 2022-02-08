import type { NextPage } from 'next'

import Logo from '../assets/TechAcademy.svg'
import CodeImage from '../assets/code-image.svg'

import { InputForm } from '../components/InputForm'

import {
  Container,
  ImageContainer,
  Text,
  LoginContainer,
  Header,
  LoginContent,
  Form,
  InputContainer,
  FormInputButton
} from '../styles/home'

const Home: NextPage = () => {
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

            <FormInputButton>Entrar</FormInputButton>
          </Form>

        </LoginContent>



      </LoginContainer>
    </Container>
  )
}

export default Home
