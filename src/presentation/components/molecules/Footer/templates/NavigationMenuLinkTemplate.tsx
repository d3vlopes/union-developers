import { NavigationMenuLink } from '@/domain/models'

import * as S from '../styles'

export const NavigationMenuLinkTemplate = (
  navigationMenuLink: NavigationMenuLink,
) => {
  return (
    <S.NavColumn key={navigationMenuLink.id}>
      <h2 id={navigationMenuLink.id}>{navigationMenuLink.title}</h2>
      <ul aria-labelledby={navigationMenuLink.id}>
        {navigationMenuLink.links.map((link) => (
          <li key={link.label}>
            <a href={link.target}>{link.label}</a>
          </li>
        ))}
      </ul>
    </S.NavColumn>
  )
}
