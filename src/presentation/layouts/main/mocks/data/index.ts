import { headerMock } from '@/presentation/components/molecules/Header/mock'
import { heroMockFactory } from '@/presentation/components/molecules/Hero/mock'

import { MainLayoutProps } from '../..'

export const mainLayoutMock: MainLayoutProps = {
  base: {
    header: headerMock,
  },
  hero: heroMockFactory['default'],
}
