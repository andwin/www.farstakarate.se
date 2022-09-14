import React from 'react'

import '../styles/global.scss'

interface Props {
  Component: React.FunctionComponent
  pageProps: any
}

const App = ({ Component, pageProps }: Props) => <Component {...pageProps} />

export default App
