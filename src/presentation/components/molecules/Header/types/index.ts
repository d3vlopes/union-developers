export interface NavigationItem {
  label: string
  target: string
}

export interface HeaderProps {
  logoUrl: string
  logoAlt: string
  navigationLinks: NavigationItem[]
  buttonText: string
}

export interface MenuProps {
  open: boolean
}
