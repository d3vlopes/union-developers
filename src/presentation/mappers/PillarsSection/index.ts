import { PillarsSectionType } from '@/domain/models'
import { PillarsSectionRemote } from '@/api/models'

export class PillarsSectionMapper {
  static toDomain(
    pillarsSectionRemote: PillarsSectionRemote,
  ): PillarsSectionType {
    return {
      id: pillarsSectionRemote.sectionId,
      heading: pillarsSectionRemote.heading,
      description: pillarsSectionRemote.description,
      methodologyCards: pillarsSectionRemote.methodologys.map(
        (methodology) => ({
          id: methodology.id,
          title: methodology.name,
          description: methodology.description,
        }),
      ),
    }
  }
}
