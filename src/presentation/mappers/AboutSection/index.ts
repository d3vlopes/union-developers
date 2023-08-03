import { AboutSectionType } from '@/domain/models'
import { AboutSectionRemote } from '@/api/models'

export class AboutSectionMapper {
  static toDomain(
    aboutSectionRemote: AboutSectionRemote,
  ): AboutSectionType {
    return {
      id: aboutSectionRemote.sectionId,
      description: aboutSectionRemote.description.html,
      heading: aboutSectionRemote.heading,
    }
  }
}
