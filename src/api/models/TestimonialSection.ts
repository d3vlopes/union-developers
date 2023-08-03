import {
  Asset,
  TestimonialSection as TestimonialSectionApi,
  Testimonial as TestimonialApi,
} from '@/api/generated/graphql'

interface TestimonialProps
  extends Omit<TestimonialApi, 'stage' | 'socialLinks'> {
  socialLinks: {
    id: string
    name: string
    url: string
    icon: Pick<Asset, 'url'>
  }[]
}

export type TestimonialSectionRemote = Omit<
  TestimonialSectionApi,
  'stage' | 'id' | 'testimonials'
> & {
  testimonials: TestimonialProps[]
}
