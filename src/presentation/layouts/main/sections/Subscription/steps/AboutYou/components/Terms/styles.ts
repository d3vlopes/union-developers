import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.6rem 0;

    h2 {
      font-size: ${theme.fonts.size['5xl']};
      text-align: center;
      font-weight: 700;
      color: ${theme.colors.text['500']};
    }

    hr {
      background-color: ${theme.colors.text['500']};
      width: 100%;
      height: 3px;
      margin: 2.4rem 0 3.2rem 0;
    }

    h3 {
      font-size: ${theme.fonts.size['2xl']};
      font-family: ${theme.fonts.family.body};
      line-height: 150%;
      color: ${theme.colors.text['500']};
      margin-bottom: 2.4rem;
      font-weight: 600;
    }
  `}
`

export const Container = styled.div`
  padding: 0 3.2rem;
`

export const Content = styled.div`
  ${({ theme }) => css`
    ol {
      list-style: decimal;
    }

    li {
      font-size: ${theme.fonts.size['lg']};
      line-height: 150%;
      color: ${theme.colors.text['500']};

      &::marker {
        color: ${theme.colors.neutral['300']};
      }

      &:not(:last-child) {
        margin-bottom: 1.6rem;
      }
    }

    h4,
    h5,
    h6 {
      display: inline;
      font-size: ${theme.fonts.size['xl']};
      color: ${theme.colors.text['500']};
    }
  `}
`
