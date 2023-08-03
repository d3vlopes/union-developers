import { TestimonialSectionType } from '@/domain/models'

import { TestimonialCardProps } from '@/presentation/components/molecules'

import { testimonialSectionMapperMock as mock } from './mock'

import { TestimonialSectionMapper } from '.'

describe('TestimonialSectionMapper', () => {
  describe('toDomain', () => {
    it('should return the right format when mapped', () => {
      const data = TestimonialSectionMapper.toDomain(mock)

      expect(data).toStrictEqual({
        id: mock.sectionId,
        heading: mock.heading,
        description: mock.description,
        testimonials: mock.testimonials.map((testimonial) => ({
          id: testimonial.id,
          imgUrl: testimonial.imgUrl,
          name: testimonial.name,
          testimonialText: testimonial.testimonialText,
          socialLinks: testimonial.socialLinks.map((socialLink) => ({
            id: socialLink.id,
            name: socialLink.name,
            url: socialLink.url,
            iconUrl: socialLink.icon.url,
          })),
        })),
      } as TestimonialSectionType<TestimonialCardProps>)
    })
  })
})
