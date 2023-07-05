/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from './styles'

export interface LogoProps {
  imgUrl: string
  alt: string
}

export const Logo = ({ imgUrl, alt }: LogoProps) => {
  return (
    <S.Wrapper>
      <a href="#">
        <img src={imgUrl} alt={alt} />
      </a>
    </S.Wrapper>
  )
}
