interface NavigationItem {
  label: string
  target: string
}

export interface BaseModel<TChildren = null> {
  header: {
    logoUrl: string
    logoAlt: string
    navigationLinks: NavigationItem[]
    buttonText: string
  }
  children: TChildren
}
