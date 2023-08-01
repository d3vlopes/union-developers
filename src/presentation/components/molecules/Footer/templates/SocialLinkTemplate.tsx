import { SocialLink } from '@/domain/models'

import * as S from '../styles'

export const SocialLinkTemplate = (socialLink: SocialLink) => {
  const isEmail = socialLink.label === 'Email'

  return (
    <a
      key={socialLink.id}
      aria-label={socialLink.label}
      href={
        isEmail ? `mailto:${socialLink.target}` : socialLink.target
      }
      target="_blank"
    >
      <S.SocialLinkWrapper>
        <img
          src={socialLink.icon.imgUrl}
          alt={socialLink.icon.alt}
          title={socialLink.label}
        />
        {socialLink.label}
      </S.SocialLinkWrapper>
    </a>
  )
}
