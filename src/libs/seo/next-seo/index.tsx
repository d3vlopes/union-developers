import {
  DefaultSeo,
  OrganizationJsonLd,
  OrganizationJsonLdProps,
  FAQPageJsonLd,
} from 'next-seo'

import { AccordionProps } from '@/presentation/components/molecules'

import { seoConfig } from './next-seo.config'

export * from 'next-seo'

export { seoConfig }

export const Seo = () => {
  return <DefaultSeo {...seoConfig} />
}

interface DataStructureSEOProps {
  organization: OrganizationJsonLdProps
  faq: {
    questions: AccordionProps[]
  }
}

export const DataStructureSEO = ({
  organization,
  faq,
}: DataStructureSEOProps) => {
  const questions = faq.questions.map((question) => ({
    questionName: question.title,
    acceptedAnswerText: question.content,
  }))

  return (
    <>
      <OrganizationJsonLd {...organization} />
      <FAQPageJsonLd mainEntity={questions} />
    </>
  )
}
