import { FaqSection as FaqSectionApi } from '@/api/generated/graphql'

interface QuestionProps {
  title: string
  content: {
    html: string
  }
}

export type FaqSectionRemote = Omit<
  FaqSectionApi,
  'stage' | 'id' | 'questions'
> & {
  questions: QuestionProps[]
}
