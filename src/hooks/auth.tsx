import { createContext, ReactNode, useContext } from 'react'

import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth';
import { auth, googleProvider, microsoftProvider, gitHubProvider } from '../libs/firebase'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextData {
  signInWithGoogle: () => Promise<void>
  signInWithGitHub: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

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

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signInWithGitHub }} >
      {children}
    </AuthContext.Provider>
  )
}

export function useFirebaseAuth() {
  const context = useContext(AuthContext)

  return context
}