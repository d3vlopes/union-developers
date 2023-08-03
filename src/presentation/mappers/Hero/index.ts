import { HeroRemote } from '@/api/models'
import { HeroModel } from '@/domain/models'

export class HeroMapper {
  static toDomain(heroRemote: HeroRemote): HeroModel {
    return {
      title: heroRemote.title.html,
      logoUrl: heroRemote.logo.url,
      logoAlt: heroRemote.logo.description ?? '',
      backgroundDesktop: heroRemote.backgroundDesktop.url,
      backgroundMobile: heroRemote.backgroundMobile.url,
      buttonTarget: heroRemote.buttonTarget,
      buttonText: heroRemote.buttonText,
      description: heroRemote.subtitle,
    }
  }
}
