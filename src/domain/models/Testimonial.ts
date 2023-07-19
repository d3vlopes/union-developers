export interface TestimonialModel<TSocialLink> {
  id: string
  imgUrl: string
  name: string
  testimonialText: string
  socialLinks: TSocialLink[]
}
