import { TestimonialModel } from '@/domain/models'

import { SocialLinkTemplate } from './templates/SocialLinkTemplate'

import * as S from './styles'

export interface SocialLink {
  id: string
  name: string
  iconUrl: string
  url: string
}

export type TestimonialCardProps = TestimonialModel<SocialLink>

export const TestimonialCard = ({
  imgUrl,
  name,
  testimonialText,
  socialLinks,
}: TestimonialCardProps) => {
  return (
    <S.Wrapper>
      <S.Avatar>
        <S.ImageWrapper>
          <img src={imgUrl} alt={`Foto do membro ${name}`} />
        </S.ImageWrapper>
      </S.Avatar>

      <S.Name>{name}</S.Name>

      <S.TestimonialText>{testimonialText}</S.TestimonialText>

      <S.ButtonsWrapper>
        {socialLinks.map(SocialLinkTemplate)}
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
