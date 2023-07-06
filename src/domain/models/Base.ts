import { HeaderModel } from './Header'

export interface BaseModel<TChildren = null> {
  header: HeaderModel
  children: TChildren
}
