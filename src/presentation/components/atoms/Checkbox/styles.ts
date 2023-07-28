import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;

    input {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      appearance: none;
      width: 3rem;
      height: 3rem;
      border-right: 3.5px solid ${theme.colors.blue};
      border-left: 3.5px solid ${theme.colors.purple};
      background-image: ${`linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue}),
            linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue})`};
      background-size: 100% 3.5px;
      background-position: 0 100%, 0 0;
      background-repeat: no-repeat;
      background-clip: padding-box;
      border-radius: 5.33px;
      cursor: pointer;
      outline: none;

      &:before {
        content: '';
        width: 0.5rem;
        height: 1rem;
        border: 4px solid ${theme.colors.text['100']};
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg);
        position: absolute;
        top: 6px;
        opacity: 0;
      }

      &:focus {
        box-shadow: 0 0 0 3px #ffbf47;
        outline: 3px solid transparent;
      }

      &:checked {
        background: ${theme.colors.gradient};
        border: none;

        &:before {
          opacity: 1;
        }
      }
    }

    span {
      font-size: ${theme.fonts.size['sm']};
      color: ${theme.colors.error};
    }

    ${media.md`
      input {
        width: 4rem;
        height: 4rem;

        &:before {
          width: 1rem;
          height: 1.6rem;
        }
      }
    `}
  `}
`
