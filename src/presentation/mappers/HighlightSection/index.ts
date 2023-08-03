import { HighlightSectionRemote } from '@/api/models'
import { HighlightSectionType } from '@/domain/models'

export class HighlightSectionMapper {
  static toDomain(
    highlightSectionRemote: HighlightSectionRemote,
  ): HighlightSectionType {
    return {
      id: highlightSectionRemote.sectionId,
      heading: highlightSectionRemote.heading,
      description: highlightSectionRemote.description,
      highlights: highlightSectionRemote.highlights.map(
        (highlight) => ({
          id: highlight.id,
          title: highlight.title,
          description: highlight.description,
          icon: {
            url: highlight.icon.url,
            alt: highlight.icon.description ?? '',
          },
        }),
      ),
    }
  }
}
