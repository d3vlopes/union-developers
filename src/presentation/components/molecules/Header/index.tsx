import { useState } from 'react'

import { Button, Logo } from '@/presentation/components/atoms'

import { useActive } from '@/presentation/hooks/useActive'

import { NavigationLinkTemplate } from './templates/NavigationLinkTemplate'

import { HeaderProps } from './types'

import * as S from './styles'

export const Header = ({
  logoUrl,
  logoAlt,
  navigationLinks,
  buttonText,
  buttonTarget,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const { selectedPage } = useActive(navigationLinks)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <S.Header>
      <S.Wrapper>
        <S.Navbar>
          <Logo imgUrl={logoUrl} alt={logoAlt} />

          <S.HamburgerButton
            type="button"
            aria-label={`${isOpen ? 'Fechar menu' : 'Abrir menu'}`}
            open={isOpen}
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </S.HamburgerButton>

          <S.NavLink
            open={isOpen}
            aria-hidden={!isOpen}
            role="navigation"
            aria-label="Navegação principal"
          >
            <ul>
              {navigationLinks.map((navigationLink, index) => (
                <NavigationLinkTemplate
                  key={navigationLink.label}
                  isActive={selectedPage === index}
                  navigationLink={navigationLink}
                />
              ))}
            </ul>
          </S.NavLink>

          <S.CallToAction open={isOpen}>
            <a href={buttonTarget} data-testid="button-anchor">
              <Button>{buttonText}</Button>
            </a>
          </S.CallToAction>
        </S.Navbar>
      </S.Wrapper>
    </S.Header>
  )
}
