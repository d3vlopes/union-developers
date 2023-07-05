import { logoMock } from '@/presentation/components/atoms/Logo/mock'

import { HeaderProps } from './types'

export const headerMock: HeaderProps = {
  logoUrl: logoMock.imgUrl,
  logoAlt: logoMock.alt,
  navigationLinks: [
    {
      label: 'Sobre',
      target: 'about',
    },
    {
      label: 'Benefícios',
      target: 'highlights',
    },
    {
      label: 'Como funciona',
      target: 'works',
    },
    {
      label: 'Dúvidas',
      target: 'questions',
    },
  ],
  buttonText: 'Junte-se a nós',
  buttonTarget: '#join',
}
