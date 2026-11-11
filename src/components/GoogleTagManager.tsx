import Script from 'next/script';

export function GoogleTagManager() {
  // NODE_ENV is also production for preview builds; use Vercel's target instead.
  if (process.env.VERCEL_ENV !== 'production') return null;

  return <>
    <Script id="hsg-gtm-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      window.dataLayer.push({'gtm.start': Date.now(), event: 'gtm.js'});
    `}</Script>
    <Script
      id="hsg-gtm-container"
      src="https://www.googletagmanager.com/gtm.js?id=GTM-MBMM97HX"
      strategy="afterInteractive"
      async
    />
  </>;
}
