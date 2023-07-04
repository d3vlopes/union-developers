import { headerMock } from '@/presentation/components/molecules/Header/mock'

import { BaseLayoutProps } from '../..'

export const baseLayoutMock: Omit<BaseLayoutProps, 'children'> = {
  header: headerMock,
}
