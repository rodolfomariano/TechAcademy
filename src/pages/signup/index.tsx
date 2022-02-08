import { useRouter } from 'next/router'

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

} from './styles'

export default function Signup() {

  const router = useRouter()

  function handleGoToHome() {
    router.push('/')
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