import React, { FC } from 'react'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/layout/Layout'

type Props = {}

const Home: FC = (props: Props) => {
  return (
    <Layout title='Home'>
      <div>Home</div>
    </Layout>
  )
}

export default Home
