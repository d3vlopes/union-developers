import { FooterModel } from '@/domain/models'

import {
  SocialLinkTemplate,
  NavigationMenuLinkTemplate,
} from './templates'

import * as S from './styles'

export type FooterProps = FooterModel

export const Footer = ({
  logo,
  socialLinks,
  companyName,
  companySlogan,
  navigationMenuLinks,
}: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <S.Container>
        <S.LogoWrapper>
          <S.Logo src={logo.imgUrl} alt={logo.alt} loading="lazy" />

          <S.Slogan>
            <p>{companySlogan}</p>
          </S.Slogan>
        </S.LogoWrapper>

        <S.Nav aria-label="Navegação rodapé">
          {navigationMenuLinks.map(NavigationMenuLinkTemplate)}
        </S.Nav>

        <S.SocialLinks>
          {socialLinks.map(SocialLinkTemplate)}
        </S.SocialLinks>
      </S.Container>

      <S.Copyright>
        <p>
          © {companyName} - {currentYear}
        </p>
      </S.Copyright>
    </>
  )
}
