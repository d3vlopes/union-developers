import { Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'

export const swipperOptions: SwiperOptions = {
  slidesPerView: 1,
  allowTouchMove: false,
  loop: true,
  navigation: true,
  modules: [Navigation],
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
  },
}
