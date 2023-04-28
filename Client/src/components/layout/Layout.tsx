import React, { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import Meta from '@/seo/Meta'
import Footer from './footer/Footer'

type Props = {
  title: string
  description?: string
}

const Layout: FC<PropsWithChildren<Props>> = ({ title, description, children }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Meta>
  )
}

export default Layout