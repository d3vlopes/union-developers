interface NavigationItem {
  label: string
  target: string
}

export interface BaseModel<TChildren> {
  header: {
    logoUrl: string
    logoAlt: string
    navigationLinks: NavigationItem[]
    buttonText: string
  }
  children: TChildren
}
