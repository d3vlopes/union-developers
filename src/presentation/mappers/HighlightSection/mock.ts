import { HighlightSectionRemote } from '@/api/models'
import { highlightsMock } from '@/presentation/components/molecules/Highlights/mock'

export const highlightMapperMock: HighlightSectionRemote = {
  sectionId: 'highlights',
  heading: 'Benefícios',
  description:
    'Conheça os nossos benefícios e venha fazer parte do time!',
  highlights: highlightsMock.map((highlight) => ({
    id: highlight.id,
    title: highlight.title,
    description: highlight.description,
    icon: {
      url: highlight.icon.url,
      description: highlight.icon.alt,
    },
  })),
}
