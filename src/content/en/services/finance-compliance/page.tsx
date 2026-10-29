import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Finance & Listing-Structure Planning · Happy Global Service",
  "description": "Planning the tax, equity and listing structure of your U.S. business from the start, followed by entity setup, bookkeeping, tax filing and bank accounts. Professional opinions are issued by the licensed accountants and lawyers we work with; we coordinate the work through to completion.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/services/finance-compliance/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/finance-compliance/",
      "en": "https://happyglobalinc.com/en/services/finance-compliance/",
      "x-default": "https://happyglobalinc.com/services/finance-compliance/"
    }
  },
  "openGraph": {
    "title": "Finance & Listing-Structure Planning · Happy Global Service",
    "description": "Planning the tax, equity and listing structure of your U.S. business from the start, followed by entity setup, bookkeeping, tax filing and bank accounts. Professional opinions are issued by the licensed accountants and lawyers we work with; we coordinate the work through to completion.",
    "url": "https://happyglobalinc.com/en/services/finance-compliance/",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/stock-desk.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — sales channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S.","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"Planning the tax, equity and listing structure of your U.S. business from the start, followed by entity setup, bookkeeping, tax filing and bank accounts. Professional opinions are issued by the licensed accountants and lawyers we work with; we coordinate the work through to completion.","name":"Finance & Listing-Structure Planning","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/stock-desk.jpg" alt="" width="1400" height="788" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/en/services/">{"Services"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Services · Finance & Structure"}</div>
<h1>{"Finance & Listing-Structure Planning"}</h1>
<p>{"The earlier tax and equity structures are planned, the lower the cost of changing them later. Together with the licensed accountants and lawyers we work with, we begin with tax planning, cross-border structure design and early-stage equity and listing-structure planning, then carry out entity setup, bookkeeping, tax filing and bank accounts. We do not replace lawyers or accountants; professional opinions are issued by them."}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="Service lines"><Link scroll={false} href="/en/services/channel/">{"Sales Channel Entry"}</Link><Link scroll={false} href="/en/services/content/">{"Content & Localized Marketing"}</Link><Link scroll={false} href="/en/services/recruiting/">{"Recruiting & Headhunting"}</Link><Link scroll={false} href="/en/services/finance-compliance/" aria-current="page">{"Finance & Structure"}</Link><Link scroll={false} href="/en/services/warehousing/">{"Logistics & Warehousing"}</Link><Link scroll={false} href="/en/services/hr-ops/">{"HR & Employment"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"When it applies"}</h2><ol className="numbered"><li>{"The entities and cross-border structure behind a U.S. business affect tax, fund flows and future financing."}</li><li>{"Companies planning to raise investment or list in the future need to plan their equity structure early."}</li><li>{"State of registration, entity type, bank accounts and filings at every level involve many steps and long lead times."}</li></ol></section>
<section><h2>{"What we provide"}</h2><ul className="bullets"><li>{"Tax planning and cross-border structure design"}</li><li>{"Early-stage equity and listing-structure planning (with licensed lawyers and accountants)"}</li><li>{"Entity setup, bookkeeping, tax filing and bank accounts (performed by licensed firms; account opening is subject to bank review)"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-fin-advisors.jpg" alt="Finance & Listing-Structure Planning" width="1400" height="788" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-fin-taxform.jpg" alt="Finance & Listing-Structure Planning" width="1400" height="933" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><SiteImage src="/assets/img/stock-fin-review.jpg" alt="Finance & Listing-Structure Planning" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"35% center"} as CSSProperties} /></div><p className="note">{"Illustrative images."}</p></section>
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
