import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { client } from '@/libs/graphql/client/apollo'

import { SubscriptionFormContextProvider } from '@/presentation/hooks'

import { Seo } from '@/libs/seo'

import { GlobalStyles, theme } from '@/presentation/styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SubscriptionFormContextProvider>
          <GlobalStyles />
          <Seo />
          <Component {...pageProps} />
        </SubscriptionFormContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
