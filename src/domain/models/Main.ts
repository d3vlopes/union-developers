import { BaseModel, AboutModel, HeroModel } from '.'

type BaseType = Omit<BaseModel, 'children'>

export interface MainModel {
  base: BaseType
  hero: HeroModel
  about: AboutModel
}
