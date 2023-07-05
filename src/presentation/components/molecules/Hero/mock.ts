import { HeroProps } from './types'

type MockType = 'default' | 'long-title' | 'long-description'

const defaultProps: HeroProps = {
  title:
    '<h1>Quer se tornar um desenvolvedor <strong>diferenciado?</strong></h1>',
  description:
    'Aqui você vivencia na prática como é o dia a dia de um desenvolvedor em uma empresa e se prepara para enfrentar os desafios do mercado de forma prática e imersiva!',
  buttonText: 'Quero participar',
  buttonTarget: '#join',
  backgroundMobile:
    'https://media.graphassets.com/j1rOxE97RsCbeyFrMU4z',
  backgroundDesktop:
    'https://media.graphassets.com/66rHD5NBR0K9lcIF9t62',
  logoUrl: 'https://media.graphassets.com/zRjyxnD5RyGdG8xVpll8',
  logoAlt: 'Description logo',
}

export const heroMockFactory: Record<MockType, HeroProps> = {
  default: {
    ...defaultProps,
  },
  'long-title': {
    ...defaultProps,
    title:
      '<h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias consequatur. Totam vero omnis praesentium, repellat dicta veniam illum, unde a sed doloribus quis non dolores autem ab nulla neque!</h1>',
  },
  'long-description': {
    ...defaultProps,
    description: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias consequatur. Totam vero omnis praesentium, repellat dicta veniam illum, unde a sed doloribus quis non dolores autem ab nulla neque!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias consequatur. Totam vero omnis praesentium, repellat dicta veniam illum, unde a sed doloribus quis non dolores autem ab nulla neque!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, alias consequatur. Totam vero omnis praesentium, repellat dicta veniam illum, unde a sed doloribus quis non dolores autem ab nulla neque!
    `,
  },
}
