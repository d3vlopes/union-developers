import styled, { css } from 'styled-components'

import { media } from '@/presentation/styles/helpers'

export const StepsWrapper = styled.ol`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    li {
      border-radius: 10px;
    }

    li:nth-child(odd) {
      position: relative;
      box-shadow: 0px 0px 30px 0px rgba(133, 29, 134, 0.4);

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 63px;
        background-image: url('https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-mobile_moemcz.svg');
        background-repeat: no-repeat;
        z-index: 1;
      }
    }

    li:nth-child(even) {
      position: relative;
      box-shadow: 0px 0px 30px 0px rgba(0, 72, 254, 0.4);
      position: relative;
      left: 25%;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 63px;
        background-image: url('https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-mobile_moemcz.svg');
        background-repeat: no-repeat;
        z-index: 1;
      }
    }

    ${media.xl`
      align-items: initial;
      width: 100%;

      li {
        max-width: max-content;
      }

      li:nth-child(odd) {
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 63px;
          background-image: url('https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-desktop_vdpwro.svg');
        }

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: -95px;
          width: 100px;
          height: 3px;
          background: ${`linear-gradient(75deg,${theme.colors.blue} -55%,${theme.colors.purple} 100%)`};
          z-index: -1;
        }
      }

      li:nth-child(even) {
        left: 0;
        align-self: flex-end;

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: -92px;
          width: 100px;
          height: 3px;
          background: ${`linear-gradient(75deg,${theme.colors.blue} -55%,${theme.colors.purple} 100%)`};
          z-index: -1;
        }

        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 63px;
          background-image: url('https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-desktop_vdpwro.svg');
        }
      }
    `}
  `}
`
