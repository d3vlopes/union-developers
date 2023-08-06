import { DefaultSeoProps } from 'next-seo'

const title =
  'Union Developers - Experiência prática e imersiva para desenvolvedores juniors'

const description =
  'Transforme sua carreira como desenvolvedor júnior no Union. Vivencie uma jornada imersiva com projetos reais, metodologias ágeis e mentores experientes. Faça parte dessa experiência única e ganhe habilidades valiosas para o mercado. Inscreva-se agora!'

const url = 'https://www.uniondevelopers.com.br'

export const alternateName = 'Union Developers'

export const seoConfig: DefaultSeoProps = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: url,
    siteName: 'Union Developers',
    title,
    description,
    images: [
      {
        url: 'https://media.graphassets.com/kf2ZJ05TRaiVPpM9kY3A?_gl=1*1l8vzfg*_ga*OTYxODQ4MDY4LjE2ODQxOTQ2OTk.*_ga_G6FYGSYGZ4*MTY5MTI3NzE4My4xMC4xLjE2OTEyNzc4NjguMzcuMC4w',
        alt: 'Banner Union Developers',
        width: 1200,
        height: 627,
      },
    ],
  },
}
