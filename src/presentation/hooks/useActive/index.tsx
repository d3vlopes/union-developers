import { useState, useCallback, useEffect } from 'react'

import { NavigationItem } from '@/presentation/components/molecules/Header/types'

export const useActive = (navigationLinks: NavigationItem[]) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [selectedPage, setSelectedPage] = useState<number | boolean>(
    false,
  )

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY)
  }, [])

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    const currentPage = navigationLinks.find(({ target }) => {
      const element = document.querySelector(
        `#${target}`,
      ) as HTMLElement

      if (element) {
        const top = element.offsetTop - 114
        const bottom = top + element.offsetHeight
        return scrollPosition >= top && scrollPosition < bottom
      }
      return false
    })

    if (currentPage) {
      setSelectedPage(navigationLinks.indexOf(currentPage))
    } else {
      setSelectedPage(false)
    }
  }, [scrollPosition, navigationLinks])

  return {
    selectedPage,
  }
}
