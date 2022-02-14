import { createContext, ReactNode, useContext, useState } from 'react'

import { toast } from 'react-toastify'

import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth
} from 'firebase/auth';

import { auth, googleProvider, gitHubProvider } from '../libs/firebase'
import { useRouter } from 'next/router';

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextData {
  signInWithGoogle: () => Promise<void>
  signInWithGitHub: () => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const notifyEmailAlreadyExists = () => toast.warn("Email já cadastrado!", {
    closeOnClick: true,
    pauseOnHover: true,
  })

  const notifyEmailOrPasswordInvalid = () => toast.warn("Email ou senha inválido!", {
    closeOnClick: true,
    pauseOnHover: true,
  })

  const notifyInvalidPassword = () => toast.warn("A senha deve ter mais de 6 caracteres!", {
    closeOnClick: true,
    pauseOnHover: true,
  })

  const notifyCreatedAccount = () => toast.success("Conta criada com sucesso!", {
    closeOnClick: true,
    pauseOnHover: true,
  })

  async function signInWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result) as any
        const token = credential.accessToken
        const user = result.user

        console.log(user)

      }).catch(error => console.log(error))
  }

  async function signInWithGitHub() {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const credential = GithubAuthProvider.credentialFromResult(result) as any
        const token = credential.accessToken
        const user = result.user

        console.log(user)

      }).catch(error => console.log(error))
  }

  async function signUp(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
      const user = userCredential.user

      notifyCreatedAccount()
      router.push('/')

    }).catch(error => {
      console.log(error.code)
      if (error.code === 'auth/email-already-in-use') {
        notifyEmailAlreadyExists()
      }

    })
  }

  async function signInWithEmail(email: string, password: string) {
    setLoading(true)


    signInWithEmailAndPassword(auth, email, password).then(userCredential => {
      const user = userCredential.user

      if (user) {
        setTimeout(() => {
          setLoading(false)

        }, 3000)
      }


    }).catch(error => {
      console.log(error.code)
      setLoading(false)

      if (password.length < 6) {
        return notifyInvalidPassword()
      }

      if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        return notifyEmailOrPasswordInvalid()
      }
    })
  }

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signInWithGitHub, signUp, signInWithEmail, loading }} >
      {children}
    </AuthContext.Provider>
  )
}

export function useFirebaseAuth() {
  const context = useContext(AuthContext)

  return context
}