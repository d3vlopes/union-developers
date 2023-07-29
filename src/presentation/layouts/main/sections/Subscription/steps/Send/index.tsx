import { useSubscriptionForm } from '@/presentation/hooks'

import { SuccessMessage, ErrorMessage } from './components'

import * as S from './styles'

export const SendStep = () => {
  const { isSubscriptionSuccess } = useSubscriptionForm()

  return (
    <S.Wrapper>
      {isSubscriptionSuccess ? <SuccessMessage /> : <ErrorMessage />}
    </S.Wrapper>
  )
}
