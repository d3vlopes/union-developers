import Head from 'next/head'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { SubscriptionFormContextProvider } from '@/presentation/hooks'

import { GlobalStyles, theme } from '@/presentation/styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SubscriptionFormContextProvider>
        <Head>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="description" content="Loren ipsum dolor" />

          <title>Union</title>
        </Head>

        <GlobalStyles />

        <Component {...pageProps} />
      </SubscriptionFormContextProvider>
    </ThemeProvider>
  )
}

export default App
