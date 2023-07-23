import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    input {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      appearance: none;
      width: 4rem;
      height: 4rem;
      background: ${`linear-gradient(${theme.colors.background.bg1}, ${theme.colors.background.bg1}) padding-box,
      linear-gradient(to right, ${theme.colors.purple}, ${theme.colors.blue}) border-box;`};
      border: 3.5px solid transparent;
      border-radius: 5.33px;
      cursor: pointer;
      outline: none;

      &:before {
        content: '';
        width: 1rem;
        height: 1.6rem;
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
  `}
`
