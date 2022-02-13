import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const gitHubProvider = new GithubAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })

// export const microsoftProvider = new OAuthProvider('microsoft.com')
// microsoftProvider.setCustomParameters({
//   prompt: 'consent',
//   tenant: '0708dc82-335a-4ec0-a521-53ad57f497a4'
// })

// console.log(microsoftProvider)

