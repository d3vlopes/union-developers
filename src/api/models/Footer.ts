import { Asset } from '@/api/generated/graphql'
import { Logo } from '@/api/models'

interface FooterProps {
  companyName: string
  companySlogan: string
  navigationMenuLinks: {
    id: string
    title: string
    links: {
      label: string
      target: string
    }[]
  }[]
  socialLinks: {
    id: string
    name: string
    url: string
    icon: Pick<Asset, 'url'>
  }[]
}

export type FooterRemote = FooterProps & Logo
