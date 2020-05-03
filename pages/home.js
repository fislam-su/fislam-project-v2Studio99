import React, {Fragment} from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Homepg from '../components/Homepg'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Fragment>
      <Layout>
      <Head>
          <title>Studio 99</title>
      </Head>
        <Homepg>Welcome to Studio 99</Homepg>
      </Layout>
    </Fragment>
  )
}