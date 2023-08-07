import { useEffect } from 'react'

import Script from 'next/script'

const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export const Analytics = () => {
  if (!TRACKING_ID) null

  useEffect(() => {
    if (!TRACKING_ID) return

    gtag('config', TRACKING_ID, {
      send_page_view: false,
    })

    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      send_to: TRACKING_ID,
    })
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${TRACKING_ID}', {
            page_path: window.location.pathname,
            });`,
        }}
      />
    </>
  )
}
