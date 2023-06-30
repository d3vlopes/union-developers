/* eslint-disable @next/next/no-html-link-for-pages */
import * as S from './styles'

export interface LogoProps {
  imgUrl: string
  alt: string
}

export const Logo = ({ imgUrl, alt }: LogoProps) => {
  return (
    <S.Wrapper>
      <a href="/">
        <img src={imgUrl} alt={alt} aria-label="Union" />
      </a>
    </S.Wrapper>
  )
}
