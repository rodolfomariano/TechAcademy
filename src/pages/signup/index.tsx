import { createRef, FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from "react-google-recaptcha"

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
  Politics,
  SpanRecapcha
} from './styles'


export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [recaptcha, setRecaptcha] = useState('')

  const [formError, setFormError] = useState({
    type: '',
    message: ''
  })

  const { signUp } = useFirebaseAuth()


  const recaptchaRef = useRef(null)
  const key = process.env.NEXT_PUBLIC_RECAPCHA_KEY as string

  const router = useRouter()

  function handleGoToHome() {
    router.push('/')
  }

  function handleCaptureRecaptcha(value: string) {
    setRecaptcha(value)
  }

  async function handleCreateAccount(e: FormEvent) {
    e.preventDefault()

    if (name.length === 0) {
      return setFormError({ type: 'nameError', message: 'O nome é obrigatório!' })

    } else if (name.length < 3) {
      return setFormError({ type: 'nameError', message: 'O nome deve ter mais de 3 caractéres!' })
    }

    if (email.length === 0) {
      return setFormError({ type: 'emailError', message: 'O email é obrigatório!' })

    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
      return setFormError({ type: 'emailError', message: 'Informe um email valido!' })
    }

    if (email !== emailConfirm) {
      return setFormError({ type: 'emailConfirmError', message: 'Os emails não são iguais!' })
    }

    if (password.length === 0) {
      return setFormError({ type: 'passwordError', message: 'A senha é obrigatória!' })

    } else if (password.length < 6) {
      return setFormError({ type: 'passwordError', message: 'A senha deve ter ao menos 6 caractéres!' })
    }

    if (password !== passwordConfirm) {
      return setFormError({ type: 'passwordConfirmError', message: 'As senhas não são iguais!' })
    }

    if (!recaptcha) {
      return setFormError({ type: 'recaptchaError', message: 'Marque que você não é robo!' })
    }

    setFormError({ type: 'success', message: '' })

    try {
      signUp(email, password)

    } catch (error) {
      console.log(error)
    }

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
        <Header>Criar uma conta</Header>

        <LoginContent>
          <Form>
            <InputContainer>
              <InputForm
                type='text'
                name='name'
                placeholder='Digite seu nome'
                onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                errorMessage={formError.type === 'nameError' ? formError.message : ''}
              />
              <InputForm
                type='email'
                placeholder='Digite um email'
                onChange={(e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                errorMessage={formError.type === 'emailError' ? formError.message : ''}
              />
              <InputForm
                type='email'
                placeholder='Confirme o email'
                onChange={(e: FormEvent<HTMLInputElement>) => setEmailConfirm(e.currentTarget.value)}
                errorMessage={formError.type === 'emailConfirmError' ? formError.message : ''}
              />
              <InputForm
                type='password'
                placeholder='Digite uma senha'
                onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
                errorMessage={formError.type === 'passwordError' ? formError.message : ''}
              />
              <InputForm
                type='password'
                placeholder='Confirme a senha'
                onChange={(e: FormEvent<HTMLInputElement>) => setPasswordConfirm(e.currentTarget.value)}
                errorMessage={formError.type === 'passwordConfirmError' ? formError.message : ''}
              />
            </InputContainer>

            <ReCAPTCHA
              ref={recaptchaRef}
              size="normal"
              sitekey={key}
              onChange={e => handleCaptureRecaptcha(e as string)}
            />

            <SpanRecapcha>{formError.type === 'recaptchaError' ? formError.message : ''}</SpanRecapcha>

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