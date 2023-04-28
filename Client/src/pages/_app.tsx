import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { createContext } from 'react'
import userStor from '@/stor/UserStor'

export const Context = createContext({ userStor })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider value={{ userStor }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}
