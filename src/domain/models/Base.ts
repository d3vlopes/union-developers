import { HeaderModel, FooterModel } from '.'

export interface BaseModel<TChildren = null> {
  header: HeaderModel
  children: TChildren
  footer: FooterModel
}
