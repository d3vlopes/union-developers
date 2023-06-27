import { FlattenSimpleInterpolation } from 'styled-components'

export type Breakpoints = 'sm' | 'md' | 'lg'

export type Media = {
  [key in Breakpoints]: (
    literals: TemplateStringsArray,
    ...args: unknown[]
  ) => FlattenSimpleInterpolation
}
