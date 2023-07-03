import { ReactNode } from 'react'

import { BaseModel } from '@/domain/models'

import { Header } from '@/presentation/components/molecules'

import * as S from './styles'

export type BaseLayoutProps = BaseModel<ReactNode>

export const BaseLayout = ({ header, children }: BaseLayoutProps) => {
  return (
    <S.Wrapper>
      <Header {...header} />

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
