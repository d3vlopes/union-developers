import styled, { css } from 'styled-components'

import {
  Wrapper as TestimonialCard,
  TestimonialText,
  Name,
} from '@/presentation/components/molecules/TestimonialCard/styles'

import { media } from '@/presentation/styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .swiper-button-next,
    .swiper-button-prev {
      background-position: center;
      background-size: 25px;
      background-repeat: no-repeat;
    }

    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: 0;
    }

    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      left: 0;
    }

    .swiper-button-prev {
      background-image: url('https://media.graphassets.com/qqQaVHN9RsqUL84yyh5F');
    }

    .swiper-button-next {
      background-image: url('https://media.graphassets.com/373F5yMTpyZLr5qZgyhw');
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      content: '';
    }

    ${media.xl`
      .swiper-wrapper {
        margin-left: 105px;
      }

      .swiper-slide-active {
        max-width: 24%;

        ${TestimonialCard} {
          position: relative;
          top: 8rem;
        }
      }

      .swiper-slide-next + div {
        ${TestimonialCard} {
          position: relative;
          top: 8rem;
        }
      }

      .swiper-slide-next {
        ${TestimonialCard} {
          width: 39.8rem;
          padding: 4rem 2.4rem 2.4rem;
        }

        ${Name} {
          margin-top: 2.4rem;
        }

        ${TestimonialText} {
          font-size: ${theme.fonts.size['3xl']};
        }
      }
    `}
  `}
`
