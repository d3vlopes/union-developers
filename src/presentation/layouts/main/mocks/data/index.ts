import { headerMock } from '@/presentation/components/molecules/Header/mock'
import { heroMockFactory } from '@/presentation/components/molecules/Hero/mock'
import { methodologyCardsMock } from '@/presentation/components/molecules/MethodologyCards/mock'
import { highlightsMock } from '@/presentation/components/molecules/Highlights/mock'
import { stepsMock } from '@/presentation/components/molecules/Steps/mock'
import { rememberActionMock } from '@/presentation/components/molecules/RememberAction/mock'
import { testimonialsMock } from '@/presentation/components/organisms/TestimonialSlider/mock'
import { accordionsMock } from '@/presentation/components/organisms/QuestionsAccordion/mock'
import { footerMock } from '@/presentation/components/molecules/Footer/mock'

import { MainLayoutProps } from '../..'

export const mainLayoutMock: MainLayoutProps = {
  base: {
    header: headerMock,
    footer: footerMock,
  },
  hero: heroMockFactory['default'],
  aboutSection: {
    id: 'about',
    heading: 'Quem somos?',
    description:
      'O Union é um grupo que tem como missão proporcionar experiências para desenvolvedores em inicio de carreira, oferecendo um ambiente prático e imersivo próximo do encontrado nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega. No Union, você desenvolve as skills mais procuradas pelo mercado, trabalha com ferramentas e metodologias utilizada pelas empresas, além de ganhar experiência trabalhando com outras pessoas de varias partes do Brasil. Aqui você vai vivenciar na prática como é o dia a dia de um desenvolver em uma empresa e vai ficar mais preparado para conquistar sua vaga.',
  },
  pillarsSection: {
    id: 'pillars',
    heading: 'Pilares',
    description:
      'Na Union combinamos o uso de 3 metodologias para você conquistar experiência, saber se posicionar profissionalmente e acelerar sua evolução!',
    methodologyCards: methodologyCardsMock,
  },
  highlightSection: {
    id: 'highlights',
    heading: 'Benefícios',
    description:
      'Conheça os nossos benefícios e venha fazer parte do time!',
    highlights: highlightsMock,
  },
  stepsSection: {
    id: 'steps',
    heading: 'Etapas',
    description: 'Conheça as etapas do nosso processo seletivo',
    steps: stepsMock,
  },
  rememberActionSection: rememberActionMock,
  testimonialSection: {
    id: 'testimonials',
    heading: 'Depoimentos',
    description: 'Veja o que dizem sobre nosso trabalho',
    testimonials: testimonialsMock,
  },
  faqSection: {
    id: 'questions',
    heading: 'Dúvidas',
    accordions: accordionsMock,
  },
}
