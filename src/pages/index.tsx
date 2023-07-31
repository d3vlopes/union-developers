import { GetServerSideProps } from 'next'

import { heroMockFactory } from '@/presentation/components/molecules/Hero/mock'

import { mainLayoutMock } from '@/presentation/layouts/main/mocks/data'

import { MainLayout, MainLayoutProps } from '@/presentation/layouts'

export default function Index(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getServerSideProps: GetServerSideProps<
  MainLayoutProps
> = async () => {
  return {
    props: {
      base: mainLayoutMock.base,
      hero: heroMockFactory['default'],
      aboutSection: {
        id: 'about',
        heading: 'Quem somos?',
        description: `<p>O Union é um grupo que tem como missão proporcionar experiências para desenvolvedores em inicio de carreira, oferecendo um ambiente prático e imersivo próximo do encontrado nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega.</p> 
          <p>No Union, você desenvolve as skills mais procuradas pelo mercado, trabalha com ferramentas e metodologias utilizada pelas empresas, além de ganhar experiência trabalhando com outras pessoas de varias partes do Brasil.</p>
          <p>Aqui você vai vivenciar na prática como é o dia a dia de um desenvolver em uma empresa e vai ficar mais preparado para conquistar sua vaga.</p>`,
      },
      pillarsSection: {
        ...mainLayoutMock.pillarsSection,
        description:
          '<p>Na Union combinamos o uso de 3 metodologias para você conquistar experiência, saber se posicionar profissionalmente e acelerar sua evolução!</p>',
        methodologyCards:
          mainLayoutMock.pillarsSection.methodologyCards,
      },
      highlightSection: {
        ...mainLayoutMock.highlightSection,
      },
      stepsSection: {
        ...mainLayoutMock.stepsSection,
      },
      rememberActionSection: {
        ...mainLayoutMock.rememberActionSection,
      },
      testimonialSection: {
        ...mainLayoutMock.testimonialSection,
      },
      faqSection: {
        ...mainLayoutMock.faqSection,
      },
    },
  }
}
