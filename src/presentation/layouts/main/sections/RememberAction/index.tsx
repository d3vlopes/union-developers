import { RememberActionSectionType } from '@/domain/models'

import { RememberAction } from '@/presentation/components/molecules'

import * as S from './styles'

export const RememberActionSection = ({
  ...props
}: RememberActionSectionType) => {
  return (
    <S.Wrapper>
      <RememberAction {...props} />
    </S.Wrapper>
  )
}
