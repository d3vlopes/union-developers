import { NavigationItem } from '.'

export interface SocialLink extends NavigationItem {
  id: string
  icon: {
    imgUrl: string
    alt: string
  }
}

export interface NavigationMenuLink {
  id: string
  title: string
  links: NavigationItem[]
}

export interface FooterModel {
  logo: {
    imgUrl: string
    alt: string
  }
  socialLinks: SocialLink[]
  companyName: string
  companySlogan: string
  navigationMenuLinks: NavigationMenuLink[]
}
