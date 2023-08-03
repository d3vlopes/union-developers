import { TestimonialSectionRemote } from '@/api/models'
import { testimonialsMock } from '@/presentation/components/organisms/TestimonialSlider/mock'

export const testimonialSectionMapperMock: TestimonialSectionRemote =
  {
    sectionId: 'testimonials',
    heading: 'Depoimentos',
    description: 'Veja o que dizem sobre nosso trabalho',
    testimonials: testimonialsMock.map((testimonial) => ({
      id: testimonial.id,
      imgUrl: testimonial.imgUrl,
      name: testimonial.name,
      testimonialText: testimonial.testimonialText,
      socialLinks: testimonial.socialLinks.map((socialLink) => ({
        id: socialLink.id,
        name: socialLink.name,
        url: socialLink.url,
        icon: {
          url: socialLink.iconUrl,
        },
      })),
    })),
  }
