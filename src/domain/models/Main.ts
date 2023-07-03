import { BaseModel } from './Base'

type BaseType = Omit<BaseModel, 'children'>

export interface MainModel {
  base: BaseType
}
