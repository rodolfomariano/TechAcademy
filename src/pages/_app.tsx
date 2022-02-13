import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AuthProvider } from '../hooks/auth'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>

      <Component {...pageProps} />

      <ToastContainer theme='colored' />
    </AuthProvider>
  )
}

export default MyApp
