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

export interface MainModel {
  base: BaseType
  hero: HeroModel
  aboutSection: AboutSectionType
  methodologySection: MethodologySectionType
  highlightSection: HighlightSectionType
  stepsSection: StepsSectionType
  rememberActionSection: RememberActionSectionType
}
