import {
  BaseModel,
  HeroModel,
  MethodologyModel,
  SectionModel,
} from '.'

type BaseType = Omit<BaseModel, 'children'>

export type AboutSectionType = SectionModel

export interface MethodologySectionType extends SectionModel {
  methodologyCards: MethodologyModel[]
}

export interface MainModel {
  base: BaseType
  hero: HeroModel
  aboutSection: AboutSectionType
  methodologySection: MethodologySectionType
}
