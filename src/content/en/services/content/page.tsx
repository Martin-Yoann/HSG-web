import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Content & Localized Marketing · Happy Global Service",
  "description": "Brand content and social media for the U.S. market: trade-show film, brand and product video, bilingual content, and management of U.S. social media accounts.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/services/content/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/content/",
      "en": "https://happyglobalinc.com/en/services/content/",
      "x-default": "https://happyglobalinc.com/services/content/"
    }
  },
  "openGraph": {
    "title": "Content & Localized Marketing · Happy Global Service",
    "description": "Brand content and social media for the U.S. market: trade-show film, brand and product video, bilingual content, and management of U.S. social media accounts.",
    "url": "https://happyglobalinc.com/en/services/content/",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/base-office-sign.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — sales channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S.","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"Brand content and social media for the U.S. market: trade-show film, brand and product video, bilingual content, and management of U.S. social media accounts.","name":"Content & Localized Marketing","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/base-office-sign.jpg" alt="" width="1050" height="1400" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/en/services/">{"Services"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Services · Content & Localized Marketing"}</div>
<h1>{"Content & Localized Marketing"}</h1>
<p>{"U.S. consumers and retailers first encounter a brand through its content. Working with the Dallas content studio run by Happy Global Studio, we produce content for the U.S. market and manage local social media for brand companies, and we produce for our own brands continuously."}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="Service lines"><Link scroll={false} href="/en/services/channel/">{"Sales Channel Entry"}</Link><Link scroll={false} href="/en/services/content/" aria-current="page">{"Content & Localized Marketing"}</Link><Link scroll={false} href="/en/services/recruiting/">{"Recruiting & Headhunting"}</Link><Link scroll={false} href="/en/services/finance-compliance/">{"Finance & Structure"}</Link><Link scroll={false} href="/en/services/warehousing/">{"Logistics & Warehousing"}</Link><Link scroll={false} href="/en/services/hr-ops/">{"HR & Employment"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"When it applies"}</h2><ol className="numbered"><li>{"Content produced for the Chinese market rarely reaches U.S. audiences as intended."}</li><li>{"Trade shows are a significant investment; on-site footage and follow-up are often under-used."}</li><li>{"U.S. social media follows a different rhythm and register from domestic platforms."}</li></ol></section>
<section><h2>{"What we provide"}</h2><ul className="bullets"><li>{"On-site trade-show filming and same-day material"}</li><li>{"Brand and product video, bilingual content"}</li><li>{"Management of U.S. social media accounts"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/yfcon-materials.jpg" alt="Content & Localized Marketing" width="1400" height="787" loading="lazy" decoding="async" style={{"objectPosition":"center 55%"} as CSSProperties} /><SiteImage src="/assets/img/field-yfcon-crowd.jpg" alt="Content & Localized Marketing" width="1400" height="812" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><SiteImage src="/assets/img/yfcon-wristband.jpg" alt="Content & Localized Marketing" width="1400" height="787" loading="lazy" decoding="async" style={{"objectPosition":"58% center"} as CSSProperties} /></div></section>
<section><h2>{"Client work"}</h2><div className="ph">{"[Client work will be published with client approval.]"}</div></section>
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
