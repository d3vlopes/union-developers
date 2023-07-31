import { generateId } from '@/utils'

import { logoMock } from '@/presentation/components/atoms/Logo/mock'

import { FooterProps } from '.'

export const footerMock: FooterProps = {
  logo: {
    imgUrl: logoMock.imgUrl,
    alt: logoMock.alt,
  },
  socialLinks: [
    {
      id: generateId(),
      icon: {
        imgUrl: 'https://media.graphassets.com/4AjPcOSSuK4kIKUv8Mdg',
        alt: 'Um ícone de envelope representando o email do Union',
      },
      label: 'Email',
      target: 'contato.uniongroup@gmail.com',
    },
    {
      id: generateId(),
      icon: {
        imgUrl: 'https://media.graphassets.com/y4KMQdygSH6uZx46pxjU',
        alt: 'Ícone com as letras in representando a logo do Linkedin',
      },
      label: 'Linkedin',
      target: 'www.linkedin.com/in/company/uniondevelopers',
    },
    {
      id: generateId(),
      icon: {
        imgUrl: 'https://media.graphassets.com/4lDgbi8FQpq8QYSiranx',
        alt: 'Um gatinho representando o logo do Github',
      },
      label: 'Github',
      target: 'www.github.com/union-group',
    },
  ],
  companyName: 'Union Developers',
  companySlogan:
    'O Union proporciona experiências para desenvolvedores em inicio de carreira, desafiando seus membros a resolver problemas reais.',
  navigationMenuLinks: [
    {
      id: generateId(),
      title: 'Saiba mais',
      links: [
        {
          label: 'Sobre',
          target: '#about',
        },
        {
          label: 'Depoimentos',
          target: '#testimonials',
        },
      ],
    },
    {
      id: generateId(),
      title: 'Dúvidas',
      links: [
        {
          label: 'FAQ',
          target: '#questions',
        },
        {
          label: 'Como funciona',
          target: '#steps',
        },
      ],
    },
  ],
}
