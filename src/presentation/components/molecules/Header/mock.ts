import { logoMock } from '@/presentation/components/atoms/Logo/mock'

import { HeaderProps } from './types'

export const headerMock: HeaderProps = {
  logoUrl: logoMock.imgUrl,
  logoAlt: logoMock.alt,
  navigationLinks: [
    {
      label: 'Sobre',
      target: '#about',
    },
    {
      label: 'Pilares',
      target: '#pillars',
    },
    {
      label: 'Benefícios',
      target: '#highlights',
    },
    {
      label: 'Etapas',
      target: '#steps',
    },
    {
      label: 'Depoimentos',
      target: '#testimonials',
    },
    {
      label: 'Dúvidas',
      target: '#questions',
    },
  ],
  buttonText: 'Junte-se a nós',
  buttonTarget: '#join',
}
