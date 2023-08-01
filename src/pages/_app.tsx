import Head from 'next/head'
import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { client } from '@/libs/graphql/client/apollo'

import { SubscriptionFormContextProvider } from '@/presentation/hooks'

import { GlobalStyles, theme } from '@/presentation/styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App
