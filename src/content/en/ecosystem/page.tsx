import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Our Network · Happy Global Service",
  "description": "Happy Global Service, the service brand of Happy Global Inc., is the single point of contact, connected to two member brands — Glimboo and PulseOn — and to happyglobals.com, our product and distribution site.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/ecosystem/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/ecosystem/",
      "en": "https://happyglobalinc.com/en/ecosystem/",
      "x-default": "https://happyglobalinc.com/ecosystem/"
    }
  },
  "openGraph": {
    "title": "Our Network · Happy Global Service",
    "description": "Happy Global Service, the service brand of Happy Global Inc., is the single point of contact, connected to two member brands — Glimboo and PulseOn — and to happyglobals.com, our product and distribution site.",
    "url": "https://happyglobalinc.com/en/ecosystem/",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/hero-hq-roof.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — sales channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S.","url":"https://happyglobalinc.com/"}]} />
<main id="main">
<section className="page-hero">
<SiteImage src="/assets/img/hero-dallas.jpg" alt="" width="1500" height="844" loading="eager" decoding="async" />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"The Happy Global network"}</div>
<h1>{"Services, brands and specialist capabilities, one network"}</h1>
<p>{"Happy Global Service is the service brand of Happy Global Inc., helping companies enter and operate in the U.S. market; services are contracted through Happy Global Inc. Our capabilities come from real operations: own brands, product distribution, recruiting and content production, each with its own team and site."}</p>
</div>
</section>
<section className="section section--soft"><div className="wrap">
<div className="eco">
<div className="hub"><small>{"Single point of contact"}</small><h2>{"Happy Global Service"}</h2><p>{"This site. All six service lines begin here, contracted through Happy Global Inc."}</p><Link href="/en/">{"Back to home →"}</Link></div>
<a className="etile rv" style={{"--i":"0"} as CSSProperties} href="https://glimboo.com" rel="noopener" target="_blank"><SiteImage src="/assets/img/eco-glimboo.jpg" alt="Glimboo" width="1400" height="687" loading="lazy" decoding="async" /><div><h3><i>{"G"}</i>{"Glimboo"}</h3><p>{"Member brand. Musical lollipops and the Star Bear line."}</p><span>{"Visit →"}</span></div></a><a className="etile rv" style={{"--i":"1"} as CSSProperties} href="https://pulseonworld.com/" rel="noopener" target="_blank"><SiteImage src="/assets/img/eco-pulseon.jpg" alt="PulseOn" width="1400" height="933" loading="lazy" decoding="async" style={{"objectPosition":"center 58%"} as CSSProperties} /><div><h3><i>{"P"}</i>{"PulseOn"}</h3><p>{"Member brand. Functional beverages, based in Dallas."}</p><span>{"Visit →"}</span></div></a><a className="etile rv" style={{"--i":"2"} as CSSProperties} href="https://happyglobals.com" rel="noopener" target="_blank"><SiteImage src="/assets/img/base-office-sign.jpg" alt="happyglobals.com" width="1050" height="1400" loading="lazy" decoding="async" /><div><h3><i>{"HG"}</i>{"happyglobals.com"}</h3><p>{"Product and distribution site — our own brands' online and retail channels in the U.S."}</p><span>{"Visit →"}</span></div></a>
</div>
<div style={{"marginTop":"56px"} as CSSProperties}><div className="kicker">{"About the network"}</div><h2 className="title title--sm">{"Services are the foundation; brands grew from it"}</h2></div>
<div className="explain"><div><h3>{"Single point of contact"}</h3><p>{"This website. All six service lines begin here, contracted through Happy Global Inc."}</p></div><div><h3>{"Our own operations"}</h3><p>{"Product distribution and two brands of our own — the source of our capabilities, and verifiable practice."}</p></div><div><h3>{"Other websites"}</h3><p>{"The Happy Global network consists of Happy Global Inc. and several companies that work with it; each is a separate legal entity. These websites are operated by their respective companies and governed by their own terms and privacy policies."}</p></div></div>
</div></section>
</main>
</>);
}
