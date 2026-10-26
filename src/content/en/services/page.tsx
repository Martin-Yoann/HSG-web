import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Services · Happy Global Service",
  "description": "Sales channel entry, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance — six lines, contracted through Happy Global Inc.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/services/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/",
      "en": "https://happyglobalinc.com/en/services/",
      "x-default": "https://happyglobalinc.com/services/"
    }
  },
  "openGraph": {
    "title": "Services · Happy Global Service",
    "description": "Sales channel entry, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance — six lines, contracted through Happy Global Inc.",
    "url": "https://happyglobalinc.com/en/services/",
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
<section className="page-hero service-hero">
<SiteImage src="/assets/img/hero-dallas.jpg" alt="" width="1500" height="844" loading="eager" decoding="async" />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Services"}</div>
<h1>{"Six service lines, one U.S. contracting party"}</h1>
<p>{"Channels, content, recruiting, tax and structure planning, cross-border logistics and warehousing, HR operations and employment compliance — all contracted through Happy Global Inc. and led by our U.S. team."}</p>
</div>
</section>
<section className="section" id="services"><div className="wrap">
<div className="kicker">{"Services"}</div>
<h2 className="title">{"Six service lines, one U.S. contracting party"}</h2>
<p className="lead">{"Channels, content, recruiting, tax and structure planning, cross-border logistics and warehousing, HR operations and employment compliance — all contracted through Happy Global Inc. and led by our U.S. team."}</p>
<div className="sgrid">
<Link className="scard rv" style={{"--i":"0"} as CSSProperties} href="/en/services/channel/"><span className="icon">{"S"}</span><h3>{"Sales Channel Entry"}</h3><p>{"Helping brands enter U.S. offline and online sales channels. Channel requirements, labeling and compliance, pricing and negotiation — grounded in the experience of our own brands."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"1"} as CSSProperties} href="/en/services/content/"><span className="icon">{"C"}</span><h3>{"Content & Localized Marketing"}</h3><p>{"Brand content and social media for the U.S. market: trade-show film, brand and product video, bilingual content, and management of U.S. social media accounts."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"2"} as CSSProperties} href="/en/services/recruiting/"><span className="icon">{"H"}</span><h3>{"Recruiting & Executive Search"}</h3><p>{"Executive search and professional recruiting for companies entering the U.S. market, plus talent advisory such as compensation benchmarking and organization design. We built our own U.S. team this way first."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"3"} as CSSProperties} href="/en/services/finance-compliance/"><span className="icon">{"F"}</span><h3>{"Tax & Listing-Structure Planning"}</h3><p>{"Planning the tax, equity and listing structure of your U.S. business from the start, followed by entity setup, bookkeeping, tax filing and bank accounts. Professional opinions are issued by the licensed accountants and lawyers we work with; we coordinate the work through to completion."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"4"} as CSSProperties} href="/en/services/warehousing/"><span className="icon">{"W"}</span><h3>{"Cross-Border Logistics & Fulfillment"}</h3><p>{"One connected line from a factory in China to a store in the U.S.: cross-border freight and customs coordination, fulfillment from the Dallas warehouse and coordinated locations, and line-haul and B2B delivery coordination; transportation and customs clearance are performed by licensed providers."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"5"} as CSSProperties} href="/en/services/hr-ops/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"HR"}</span><h3>{"HR Operations & Employment Compliance"}</h3><p>{"Employment and payroll solutions provided by third-party providers, with us defining needs and coordinating; local compliance from onboarding to offboarding; and pre-move and post-arrival support for key staff relocating to the U.S. — a process that comes from running our own U.S. team."}</p><span className="scard__more">{"Learn more →"}</span></Link>
</div>
</div></section>
<section className="section" id="fit"><div className="wrap fit">
<div>
<div className="kicker">{"Who we serve"}</div>
<h2 className="title rv">{"The brands we work with"}</h2>
<p className="lead">{"Companies with products and brand value of their own, planning to operate in the U.S. market for the long term. Size is not the deciding factor; commitment is."}</p>
<div className="fit__points"><div className="rv" style={{"--i":"0"} as CSSProperties}><b>{"Own product, own brand"}</b><span>{"You go to market under your own brand, not only as a manufacturer for others."}</span></div><div className="rv" style={{"--i":"1"} as CSSProperties}><b>{"A long-term view"}</b><span>{"Prepared to establish an entity, build a team and develop channels step by step."}</span></div><div className="rv" style={{"--i":"2"} as CSSProperties}><b>{"Execution on the ground"}</b><span>{"You need more than advice — you need a team in the U.S. that carries the work through."}</span></div></div>
</div>
<div className="fit__aside"><h3>{"Still evaluating?"}</h3><p>{"We welcome the conversation. Based on your products and objectives, we will share an initial assessment and recommendations."}</p><Link className="btn" href="/en/contact/">{"Contact us"}</Link></div>
</div></section>
<section className="section"><div className="wrap"><div className="boundary"><h3>{"A note on scope"}</h3><p>{"This site describes the direction of our services only. It is not an offer or a commitment and does not constitute legal, tax or compliance advice. Services can be combined as needed and delivered in phases; scope, fees and responsibilities are defined by a written agreement signed by both parties. Legal, tax, securities, immigration, customs and product-certification matters are handled by licensed professionals. Warehouse locations, transit times and fees are confirmed in a specific proposal. We make no commitment regarding channel acceptance or commercial outcomes."}</p></div></div></section>
</main>
</>);
}
