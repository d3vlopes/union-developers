import { Asset } from '@/api/generated/graphql'

export interface Logo {
  logo: Pick<Asset, 'url' | 'description'>
}
