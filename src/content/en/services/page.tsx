import { SiteImage } from '@/components/SiteImage';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Services · Happy Global Service",
  "description": "Retail and channel entry, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance — six lines, delivered under Happy Global Inc.",
  "alternates": {
    "canonical": "/en/services/",
    "languages": {
      "zh-CN": "/services/",
      "en": "/en/services/"
    }
  },
  "openGraph": {
    "title": "Services · Happy Global Service",
    "description": "Retail and channel entry, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance — six lines, delivered under Happy Global Inc.",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "/assets/img/opc-launch.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — retail channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S."}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/opc-launch.jpg" alt="" width="1198" height="747" loading="eager" decoding="async" style={{"objectPosition":"center 22%"} as CSSProperties} />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Services"}</div>
<h1>{"Six service lines, one accountable entity"}</h1>
<p>{"Channels, content, recruiting, tax and structure planning, cross-border logistics and warehousing, HR operations and employment compliance — all delivered under Happy Global Inc."}</p>
</div>
</section>
<section className="section" id="services"><div className="wrap">
<div className="kicker">{"Services"}</div>
<h2 className="title">{"Six service lines, one accountable entity"}</h2>
<p className="lead">{"Channels, content, recruiting, tax and structure planning, cross-border logistics and warehousing, HR operations and employment compliance — all delivered under Happy Global Inc."}</p>
<div className="sgrid">
<Link className="scard rv" style={{"--i":"0"} as CSSProperties} href="/en/services/channel/"><span className="icon">{"R"}</span><h3>{"Retail & Channel Entry"}</h3><p>{"Helping brands enter U.S. offline and online sales channels. Channel requirements, labeling and compliance, pricing and negotiation — grounded in the experience of our own brands."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"1"} as CSSProperties} href="/en/services/content/"><span className="icon">{"C"}</span><h3>{"Content & Localized Marketing"}</h3><p>{"Brand content and social media for the U.S. market: trade-show film, brand and product video, bilingual content, and management of U.S. social media accounts."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"2"} as CSSProperties} href="/en/services/recruiting/"><span className="icon">{"H"}</span><h3>{"Recruiting & Executive Search"}</h3><p>{"Executive search and professional recruiting for companies entering the U.S. market, plus talent advisory such as compensation benchmarking and organization design. We built our own U.S. team this way first."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"3"} as CSSProperties} href="/en/services/finance-compliance/"><span className="icon">{"F"}</span><h3>{"Tax & Listing-Structure Planning"}</h3><p>{"Planning the tax, equity and listing structure of your U.S. business from the start, followed by entity setup, bookkeeping, tax filing and bank accounts. Professional opinions are issued by the licensed accountants and lawyers we work with; we coordinate the work through to completion."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"4"} as CSSProperties} href="/en/services/warehousing/"><span className="icon">{"W"}</span><h3>{"Cross-Border Logistics & Fulfillment"}</h3><p>{"One connected line from a factory in China to a store in the U.S.: cross-border freight and customs coordination, fulfillment from four U.S. warehouse locations, and line-haul and B2B delivery."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"5"} as CSSProperties} href="/en/services/hr-ops/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"HR"}</span><h3>{"HR Operations & Employment Compliance"}</h3><p>{"Employment solutions (EOR/PEO), payroll, local compliance from onboarding to offboarding, and coordination for key staff relocating to the U.S. — a process that comes from running our own U.S. team."}</p><span className="scard__more">{"Learn more →"}</span></Link>
</div>
</div></section>
<section className="section" id="fit"><div className="wrap fit">
<div>
<div className="kicker">{"Who we serve"}</div>
<h2 className="title rv">{"The brands we work with"}</h2>
<p className="lead">{"Companies with products and brand value of their own, planning to operate in the U.S. market for the long term. Size is not the deciding factor; commitment is."}</p>
<div className="fit__points"><div className="rv" style={{"--i":"0"} as CSSProperties}><b>{"Own product"}</b><span>{"You go to market under your own brand"}</span></div><div className="rv" style={{"--i":"1"} as CSSProperties}><b>{"A long-term view"}</b><span>{"Prepared to establish an entity, build a team and develop channels step by step."}</span></div><div className="rv" style={{"--i":"2"} as CSSProperties}><b>{"Execution on the ground"}</b><span>{"You need more than advice — you need a team in the U.S. that carries the work through."}</span></div></div>
</div>
<div className="fit__aside"><h3>{"Still evaluating?"}</h3><p>{"We welcome the conversation. Based on your products and objectives, we will share an initial assessment and recommendations."}</p><Link className="btn" href="/en/contact/">{"Contact us"}</Link></div>
</div></section>
<section className="section"><div className="wrap"><div className="boundary"><h3>{"A note on scope"}</h3><p>{"This site describes the direction of our services only. It is not an offer or a commitment and does not constitute legal, tax or compliance advice. Services can be combined as needed and delivered in phases; scope, fees and responsibilities are defined by a written agreement signed by both parties. Legal, tax, securities, immigration, customs and product-certification matters are handled by licensed professionals. Warehouse locations, transit times and fees are confirmed in a specific proposal. We make no commitment regarding channel acceptance or commercial outcomes."}</p></div></div></section>
</main>
</>);
}
