import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import products from '../data/dummy-backend.json'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
