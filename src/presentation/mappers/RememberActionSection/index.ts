import { RememberActionSectionRemote } from '@/api/models'
import { RememberActionSectionType } from '@/domain/models'

export class RememberActionSectionMapper {
  static toDomain(
    remoteData: RememberActionSectionRemote,
  ): RememberActionSectionType {
    return {
      title: remoteData.title,
      subtitle: remoteData.subtitle,
      logoUrl: remoteData.logo.url,
      logoAlt: remoteData.logo.description ?? '',
      buttonText: remoteData.buttonText,
      buttonTarget: remoteData.buttonTarget,
    }
  }
}
