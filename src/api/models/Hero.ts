import {
  Asset,
  Hero as HeroApi,
  RichText,
} from '@/api/generated/graphql'

import { Logo } from '.'

export interface HeroBackgroundMobile {
  backgroundMobile: Pick<Asset, 'url'>
}

export interface HeroBackgroundDesktop {
  backgroundDesktop: Pick<Asset, 'url'>
}

export type HeroRemote = Pick<
  HeroApi,
  'buttonText' | 'buttonTarget' | 'subtitle'
> &
  Logo &
  HeroBackgroundDesktop &
  HeroBackgroundMobile & {
    title: Pick<RichText, 'html'>
  }
