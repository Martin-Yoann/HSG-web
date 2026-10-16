import { SiteImage } from '@/components/SiteImage';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Recruiting & Executive Search · Happy Global Service",
  "description": "Executive search and professional recruiting for companies entering the U.S. market, plus talent advisory such as compensation benchmarking and organization design. We built our own U.S. team this way first.",
  "alternates": {
    "canonical": "/en/services/recruiting/",
    "languages": {
      "zh-CN": "/services/recruiting/",
      "en": "/en/services/recruiting/"
    }
  },
  "openGraph": {
    "title": "Recruiting & Executive Search · Happy Global Service",
    "description": "Executive search and professional recruiting for companies entering the U.S. market, plus talent advisory such as compensation benchmarking and organization design. We built our own U.S. team this way first.",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "/assets/img/banner-balloons.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — retail channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S."},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"Executive search and professional recruiting for companies entering the U.S. market, plus talent advisory such as compensation benchmarking and organization design. We built our own U.S. team this way first.","name":"Recruiting & Executive Search","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/banner-balloons.jpg" alt="" width="1400" height="580" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/en/services/">{"Services"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Services · Recruiting & Search"}</div>
<h1>{"Recruiting & Executive Search"}</h1>
<p>{"The difficulty of hiring in the U.S. lies not in posting roles but in judging whether a candidate is reliable. We built our own Dallas team with the same approach, and now serve brand companies with it."}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="Service lines"><Link scroll={false} href="/en/services/channel/">{"Retail & Channel Entry"}</Link><Link scroll={false} href="/en/services/content/">{"Content & Localized Marketing"}</Link><Link scroll={false} href="/en/services/recruiting/" aria-current="page">{"Recruiting & Search"}</Link><Link scroll={false} href="/en/services/finance-compliance/">{"Tax & Structure"}</Link><Link scroll={false} href="/en/services/warehousing/">{"Logistics & Warehousing"}</Link><Link scroll={false} href="/en/services/hr-ops/">{"HR & Employment"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"When it applies"}</h2><ol className="numbered"><li>{"The first U.S. executives and key hires determine whether the business takes hold in the U.S."}</li><li>{"Unfamiliarity with U.S. pay levels, talent markets and hiring channels affects role design and candidate quality."}</li><li>{"Cross-cultural interviews are hard to judge, and the cost of a wrong hire is high."}</li></ol></section>
<section><h2>{"What we provide"}</h2><ul className="bullets"><li>{"Executive search: confidential search and in-depth assessment for board, C-level and vice-president roles (background checks with candidate consent, conducted by compliant third parties)"}</li><li>{"Professional recruiting: multi-channel sourcing and skills assessment for senior manager to director-level and specialist roles"}</li><li>{"Talent advisory: compensation benchmarking and level design, organization structure and talent-market insight"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/eco-hrs.jpg" alt="Recruiting & Executive Search" width="1400" height="700" loading="lazy" decoding="async" /><SiteImage src="/assets/img/hero-lobby.jpg" alt="Recruiting & Executive Search" width="1920" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-mascot.jpg" alt="Recruiting & Executive Search" width="1400" height="1050" loading="lazy" decoding="async" /></div></section>
<section className="card"><h3>{"Happy Global HR Solutions"}</h3><p>{"Our dedicated recruiting site: executive search, professional recruiting and talent advisory."}</p><p><a href="https://happyglobalservice.com" target="_blank" rel="noopener">{"Visit →"}</a></p></section>
</div>
<aside className="aside">
<h2>{"Contact us"}</h2>
<p>{"Tell us about your requirements and the lead for this service line will be in touch."}</p>
<Link className="btn btn--block" href="/en/contact/">{"Contact us"}</Link>
<div className="aside__entity">{"Service entity: Happy Global Inc."}</div>
<SiteImage src="/assets/img/svc-sharing.jpg" alt="Internal training session, Dallas office" width="1400" height="1050" loading="lazy" decoding="async" />
</aside>
</div>
</div>
</main>
</>);
}
