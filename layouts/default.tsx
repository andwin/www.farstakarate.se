import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {/* <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" /> */}
      <title>Farsta karate</title>
      <link rel="icon" href="favicon.svg" />
    </Head>

    <div>
      <Navbar />

      {children}
    </div>
  </>
)

export default Layout
