import { useState } from 'react'

import { sanitizeHTML } from '@/libs/sanitizers'

import { lessIcon, plusIcon } from './assets'

import { generateAccordionID } from './helpers'

import * as S from './styles'

export interface AccordionProps {
  title: string
  content: string
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const id = generateAccordionID(title)

  const clearContent = sanitizeHTML(content)

  function handleToggle() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <S.Wrapper>
      <S.Header isActive={isOpen}>
        <S.Button
          id={`accordion-${id}`}
          type="button"
          aria-controls={`${id}-panel`}
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <h3>{title}</h3>

          <img
            src={isOpen ? lessIcon : plusIcon}
            alt={isOpen ? 'Fechar' : 'Abrir'}
          />
        </S.Button>
      </S.Header>

      <S.Content
        id={`${id}-panel`}
        aria-labelledby={`accordion-${id}`}
        data-testid="content"
        isActive={isOpen}
        dangerouslySetInnerHTML={{ __html: clearContent }}
        hidden={!isOpen}
      />
    </S.Wrapper>
  )
}
