/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react'

export enum AdType {
  DEFAULT,
  ARTICLE,
  VERTICAL,
  HORIZONTAL,
}

const adUnitProps: Record<AdType, any> = {
  [AdType.DEFAULT]: {
    'data-ad-slot': '7181773959',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
  },
  [AdType.ARTICLE]: {
    'data-ad-slot': '3197857275',
    'data-ad-format': 'fluid',
    'data-ad-layout': 'in-article',
  },
  [AdType.VERTICAL]: {
    'data-ad-slot': '8863578035',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
  },
  [AdType.HORIZONTAL]: {
    'data-ad-slot': '2827395813',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
  },
}

interface GoogleAdProps {
  variant?: AdType
}

export const Ads = ({ variant = AdType.DEFAULT }: GoogleAdProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div
      style={{
        overflow: 'hidden',
        minWidth: '300px',
        minHeight: '250px',
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5246164032780615"
        {...adUnitProps[variant]}
      />
    </div>
  )
}
