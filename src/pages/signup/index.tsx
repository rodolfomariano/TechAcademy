import { createRef, FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from "react-google-recaptcha"
import * as yup from 'yup'

import Logo from '../../assets/TechAcademy.svg'
import CodeImage from '../../assets/code-image-2.svg'

import { useFirebaseAuth } from '../../hooks/auth'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [recaptcha, setRecaptcha] = useState('')

  const { signUp } = useFirebaseAuth()

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Email invalido').required('Email é obrigatório'),
    emailConfirm: yup.string().oneOf([null, yup.ref('email')], 'Os emails não batem'),
    password: yup.string().min(6, 'No minimo 6 caracteres').required(),
    passwordConfirm: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
  })

  const recaptchaRef = useRef(null)
  const key = process.env.NEXT_PUBLIC_RECAPCHA_KEY as string

  const router = useRouter()

  function handleGoToHome() {
    router.push('/')
  }

  function handleCaptureRecaptcha(value: string) {
    setRecaptcha(value)
  }

  function handleCreateAccount(e: FormEvent) {
    e.preventDefault()



    // signUp('rodolfom@gmail.com', '123456')
  }


  console.log(name)

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
        <Header>Criar uma conta</Header>

        <LoginContent>
          <Form>
            <InputContainer>
              <InputForm
                type='text'
                placeholder='Digite seu nome'
                onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
              />
              <InputForm
                type='email'
                placeholder='Digite um email'
                onChange={(e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
              />
              <InputForm
                type='email'
                placeholder='Confirme o email'
                onChange={(e: FormEvent<HTMLInputElement>) => setEmailConfirm(e.currentTarget.value)}
              />
              <InputForm
                type='password'
                placeholder='Digite uma senha'
                onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
              />
              <InputForm
                type='password'
                placeholder='Confirme a senha'
                onChange={(e: FormEvent<HTMLInputElement>) => setPasswordConfirm(e.currentTarget.value)}
              />
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
              onClick={handleCreateAccount}
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