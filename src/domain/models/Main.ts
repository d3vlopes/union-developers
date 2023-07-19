import {
  BaseModel,
  HeroModel,
  HighlightModel,
  MethodologyModel,
  RememberActionModel,
  SectionModel,
  StepModel,
} from '.'

type BaseType = Omit<BaseModel, 'children'>

export type AboutSectionType = SectionModel

export interface MethodologySectionType extends SectionModel {
  methodologyCards: MethodologyModel[]
}

export interface HighlightSectionType extends SectionModel {
  highlights: HighlightModel[]
}

export interface StepsSectionType extends SectionModel {
  steps: StepModel[]
}

export type RememberActionSectionType = RememberActionModel

export interface TestimonialSectionType<TypeTestimonialCard = null>
  extends SectionModel {
  testimonials: TypeTestimonialCard[]
}

export interface MainModel<TypeTestimonialCard = null> {
  base: BaseType
  hero: HeroModel
  aboutSection: AboutSectionType
  methodologySection: MethodologySectionType
  highlightSection: HighlightSectionType
  stepsSection: StepsSectionType
  rememberActionSection: RememberActionSectionType
  testimonialSection: TestimonialSectionType<TypeTestimonialCard>
}
