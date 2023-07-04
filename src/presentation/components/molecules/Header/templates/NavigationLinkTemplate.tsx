import { NavigationItem } from '../types'

interface NavigationLinkProps {
  navigationLink: NavigationItem
  isActive: boolean
}

export const NavigationLinkTemplate = ({
  navigationLink,
  isActive,
}: NavigationLinkProps) => {
  const activeClassName = isActive ? 'active' : ''

  return (
    <a
      key={navigationLink.label}
      href={`#${navigationLink.target}`}
      aria-label={navigationLink.label}
    >
      <li className={activeClassName}>{navigationLink.label}</li>
    </a>
  )
}
