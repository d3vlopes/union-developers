import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { motion } from '@/libs/animations'
import { client } from '@/libs/graphql/client/apollo'

import { SubscriptionFormContextProvider } from '@/presentation/hooks'

import { Seo } from '@/libs/seo'
import { Analytics } from '@/libs/monitoring'

import { GlobalStyles, theme } from '@/presentation/styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SubscriptionFormContextProvider>
          <GlobalStyles />
          <Seo />
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
          <Analytics />
        </SubscriptionFormContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
