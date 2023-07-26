import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

import { Button } from '@/presentation/components/atoms/Button/styles'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${media.md`
    max-width: 93rem;
    width: 100%;
  `}
`

export const FormField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    label {
      font-size: ${theme.fonts.size['sm']};
      color: ${theme.colors.text['500']};
    }

    ${media.md`
      label {
        font-size: ${theme.fonts.size['lg']};
      }
    `}
  `}
`

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    span {
      color: ${theme.colors.error};
    }
  `}
`

export const RadioWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const Radio = styled.input`
  ${({ theme }) => css`
    position: relative;
    appearance: none;
    width: 2rem;
    height: 2rem;
    border: 1px solid ${theme.colors.text['500']};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transitions.fast};
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0 3px #ffbf47;
    }

    &:before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background: ${theme.colors.gradient};
      transition: opacity ${theme.transitions.fast};
      opacity: 0;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.2rem;

    ${Button} {
      width: 14.3rem;
      height: 4.4rem;
      margin-top: 2.2rem;

      span {
        font-size: ${theme.fonts.size['base']};
      }
    }

    ${media.md`
      ${Button} {
        width: 45.7rem;
        height: 7.2rem;
        margin-top: 3.2rem;

        span {
          font-size: ${theme.fonts.size['3xl']};
        }
      }
    `}
  `}
`
