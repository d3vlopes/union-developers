import { HeaderModel } from '@/domain/models'
import { HeaderRemote } from '@/api/models'

export class HeaderMapper {
  static toDomain(headerRemote: HeaderRemote): HeaderModel {
    return {
      logoUrl: headerRemote.logo.url,
      logoAlt: headerRemote.logo.description ?? '',
      buttonText: headerRemote.buttonText,
      buttonTarget: headerRemote.buttonTarget,
      navigationLinks: headerRemote.navigationLinks.map(
        (navigationLink) => ({
          label: navigationLink.label,
          target: navigationLink.target,
        }),
      ),
    }
  }
}
