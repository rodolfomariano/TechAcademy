import { createContext, ReactNode, useContext, useState } from 'react'

import { toast } from 'react-toastify'

import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';

import { auth, googleProvider, gitHubProvider } from '../libs/firebase'
import { useRouter } from 'next/router';

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string | null
  name: string | null
  email: string | null
  avatar: string | null
  provider: string | null
}

interface AuthContextData {
  signInWithGoogle: () => Promise<void>
  signInWithGitHub: () => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  authObserver: () => Promise<void>
  userSignOut: () => Promise<void>
  loading: boolean
  user: User
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
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

        router.push('dashboard')

      }).catch(error => console.log(error))
  }

  async function signInWithGitHub() {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const credential = GithubAuthProvider.credentialFromResult(result) as any
        const token = credential.accessToken
        const user = result.user

        router.push('dashboard')

      }).catch(error => console.log(error))
  }

  async function signUp(email: string, password: string, name: string) {


    return await createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
      const user = userCredential.user

      const avatar = 'https://firebasestorage.googleapis.com/v0/b/techacademy-beeff.appspot.com/o/user_icon-icons.com_66546.svg?alt=media&token=ea6a20d6-d3ab-4394-a492-88334f646fea'

      updateProfile(user, {
        displayName: name,
        photoURL: avatar
      })

      sendEmailVerification(user).then(() => {

      })


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

          router.push('dashboard')

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

  async function authObserver() {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid

        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          // @ts-ignore
          provider: user.auth.currentUser.providerData[0].providerId
        })

      } else {

      }
    })
  }

  async function userSignOut() {
    signOut(auth).then(() => {

      setUser({
        id: '',
        name: '',
        email: '',
        avatar: '',
        // @ts-ignore
        provider: ''
      })

      router.push('/')

    }).catch(error => console.log(error))
  }

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signInWithGitHub, signUp, signInWithEmail, loading, authObserver, userSignOut, user }} >
      {children}
    </AuthContext.Provider>
  )
}

export function useFirebaseAuth() {
  const context = useContext(AuthContext)

  return context
}