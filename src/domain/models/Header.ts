export interface NavigationItem {
  label: string
  target: string
}

export interface HeaderModel {
  logoUrl: string
  logoAlt: string
  navigationLinks: NavigationItem[]
  buttonText: string
  buttonTarget: string
}
