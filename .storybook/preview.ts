import type { Preview } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'

import { GlobalStyles, theme } from '../src/presentation/styles/'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: theme,
      },
      defaultTheme: 'default',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
}

export default preview
