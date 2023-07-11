import {
  BaseModel,
  HeroModel,
  HighlightModel,
  MethodologyModel,
  SectionModel,
} from '.'

type BaseType = Omit<BaseModel, 'children'>

export type AboutSectionType = SectionModel

export interface MethodologySectionType extends SectionModel {
  methodologyCards: MethodologyModel[]
}

export interface HighlightSectionType extends SectionModel {
  highlights: HighlightModel[]
}

export interface MainModel {
  base: BaseType
  hero: HeroModel
  aboutSection: AboutSectionType
  methodologySection: MethodologySectionType
  highlightSection: HighlightSectionType
}
