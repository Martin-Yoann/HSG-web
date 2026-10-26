import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Cross-Border Logistics & Fulfillment · Happy Global Service",
  "description": "One connected line from a factory in China to a store in the U.S.: cross-border freight and customs coordination, fulfillment from the Dallas warehouse and coordinated locations, and line-haul and B2B delivery coordination; transportation and customs clearance are performed by licensed providers.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/services/warehousing/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/warehousing/",
      "en": "https://happyglobalinc.com/en/services/warehousing/",
      "x-default": "https://happyglobalinc.com/services/warehousing/"
    }
  },
  "openGraph": {
    "title": "Cross-Border Logistics & Fulfillment · Happy Global Service",
    "description": "One connected line from a factory in China to a store in the U.S.: cross-border freight and customs coordination, fulfillment from the Dallas warehouse and coordinated locations, and line-haul and B2B delivery coordination; transportation and customs clearance are performed by licensed providers.",
    "url": "https://happyglobalinc.com/en/services/warehousing/",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/stock-warehouse.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — sales channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S.","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"One connected line from a factory in China to a store in the U.S.: cross-border freight and customs coordination, fulfillment from the Dallas warehouse and coordinated locations, and line-haul and B2B delivery coordination; transportation and customs clearance are performed by licensed providers.","name":"Cross-Border Logistics & Fulfillment","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/stock-warehouse.jpg" alt="" width="1500" height="1000" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/en/services/">{"Services"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Services · Logistics & Warehousing"}</div>
<h1>{"Cross-Border Logistics & Fulfillment"}</h1>
<p>{"From a factory in China to U.S. stores and consumers, goods pass through first-leg freight, customs clearance, receiving, line-haul and final delivery. With the Dallas warehouse, operated by Happy Global Logistics, at the center and coordinated warehouse locations in Los Angeles, Chicago and Phoenix — all four able to fulfill — we connect these steps into one line. Ocean and air freight are carried by licensed forwarders, customs clearance is handled by licensed customs brokers, and U.S. line-haul and delivery are performed by licensed carriers; we coordinate the steps."}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="Service lines"><Link scroll={false} href="/en/services/channel/">{"Sales Channel Entry"}</Link><Link scroll={false} href="/en/services/content/">{"Content & Localized Marketing"}</Link><Link scroll={false} href="/en/services/recruiting/">{"Recruiting & Search"}</Link><Link scroll={false} href="/en/services/finance-compliance/">{"Tax & Structure"}</Link><Link scroll={false} href="/en/services/warehousing/" aria-current="page">{"Logistics & Warehousing"}</Link><Link scroll={false} href="/en/services/hr-ops/">{"HR & Employment"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"When it applies"}</h2><ol className="numbered"><li>{"Goods for U.S. retail are mostly imported by distributors; a brand selling B2B directly must arrange first-leg freight, customs and line-haul itself."}</li><li>{"Retailers set strict requirements for labeling, palletizing and scheduled delivery; non-compliance leads to refusals or chargebacks."}</li><li>{"Handling multi-item orders and returns from a single warehouse makes it hard to balance freight cost and speed."}</li></ol></section>
<section><h2>{"What we provide"}</h2><ul className="bullets"><li>{"First-leg coordination: ocean and air freight carried by licensed forwarders, customs clearance by licensed customs brokers"}</li><li>{"Fulfillment from the nearest location (the Dallas warehouse or coordinated locations in Los Angeles, Chicago and Phoenix): receiving, labeling, picking, consolidated shipping and returns"}</li><li>{"U.S. line-haul and delivery (full truckload or LTL) performed by licensed carriers, coordinated by us to meet retailer requirements for B2B delivery"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-wh-aisle.jpg" alt="Cross-Border Logistics & Fulfillment" width="1400" height="933" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-wh-forklift.jpg" alt="Cross-Border Logistics & Fulfillment" width="1400" height="933" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-wh-pallets.jpg" alt="Cross-Border Logistics & Fulfillment" width="1400" height="933" loading="lazy" decoding="async" /></div><p className="note">{"Illustrative images. Services, transit times and fees at each warehouse location are confirmed in a specific proposal."}</p></section>
</div>
<aside className="aside">
<h2>{"Contact us"}</h2>
<p>{"Tell us about your requirements and the lead for this service line will be in touch."}</p>
<Link className="btn btn--block" href="/en/contact/">{"Contact us"}</Link>
<div className="aside__entity">{"Service entity: Happy Global Inc."}</div>
<SiteImage src="/assets/img/hero-lobby.jpg" alt="Internal training session, Dallas office" width="1920" height="1080" loading="lazy" decoding="async" />
</aside>
</div>
</div>
</main>
</>);
}
