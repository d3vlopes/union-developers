import { TestimonialSectionRemote } from '@/api/models'
import { TestimonialSectionType } from '@/domain/models'
import { TestimonialCardProps } from '@/presentation/components/molecules'

export class TestimonialSectionMapper {
  static toDomain(
    testimonialSectionRemote: TestimonialSectionRemote,
  ): TestimonialSectionType<TestimonialCardProps> {
    return {
      id: testimonialSectionRemote.sectionId,
      heading: testimonialSectionRemote.heading,
      description: testimonialSectionRemote.description,
      testimonials: testimonialSectionRemote.testimonials.map(
        (testimonial) => ({
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
        }),
      ),
    }
  }
}
