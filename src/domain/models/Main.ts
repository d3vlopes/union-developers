import { BaseModel } from './Base'

type BaseType = Omit<BaseModel, 'children'>

export interface MainModel {
  base: BaseType
  hero: {
    title: string
    description: string
    buttonText: string
    buttonTarget: string
    backgroundMobile: string
    backgroundDesktop: string
    logoUrl: string
    logoAlt: string
  }
}
