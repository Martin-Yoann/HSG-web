import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "HR Operations & Employment Compliance · Happy Global Service",
  "description": "Employment and payroll solutions provided by third-party providers, with us defining needs and coordinating; local compliance from onboarding to offboarding; and pre-move and post-arrival support for key staff relocating to the U.S. — a process that comes from running our own U.S. team.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/services/hr-ops/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/hr-ops/",
      "en": "https://happyglobalinc.com/en/services/hr-ops/",
      "x-default": "https://happyglobalinc.com/services/hr-ops/"
    }
  },
  "openGraph": {
    "title": "HR Operations & Employment Compliance · Happy Global Service",
    "description": "Employment and payroll solutions provided by third-party providers, with us defining needs and coordinating; local compliance from onboarding to offboarding; and pre-move and post-arrival support for key staff relocating to the U.S. — a process that comes from running our own U.S. team.",
    "url": "https://happyglobalinc.com/en/services/hr-ops/",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/hr-banner.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — sales channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S.","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"Employment and payroll solutions provided by third-party providers, with us defining needs and coordinating; local compliance from onboarding to offboarding; and pre-move and post-arrival support for key staff relocating to the U.S. — a process that comes from running our own U.S. team.","name":"HR Operations & Employment Compliance","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/hr-banner.jpg" alt="" width="1600" height="615" loading="eager" decoding="async" style={{"objectPosition":"right 30%"} as CSSProperties} />
<div className="wrap">
<div className="crumbs"><Link href="/en/services/">{"Services"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Services · HR & Employment"}</div>
<h1>{"HR Operations & Employment Compliance"}</h1>
<p>{"A U.S. team may be small, but the HR work does not shrink with it. From hiring your first U.S. employee compliantly to relocating your key staff from China, we draw on the operation of our own U.S. team to provide HR operations support."}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="Service lines"><Link scroll={false} href="/en/services/channel/">{"Sales Channel Entry"}</Link><Link scroll={false} href="/en/services/content/">{"Content & Localized Marketing"}</Link><Link scroll={false} href="/en/services/recruiting/">{"Recruiting & Headhunting"}</Link><Link scroll={false} href="/en/services/finance-compliance/">{"Finance & Structure"}</Link><Link scroll={false} href="/en/services/warehousing/">{"Logistics & Warehousing"}</Link><Link scroll={false} href="/en/services/hr-ops/" aria-current="page">{"HR & Employment"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"When it applies"}</h2><ol className="numbered"><li>{"No U.S. entity yet, or the first hires' employment, payroll and benefits need a proper start."}</li><li>{"Rules vary by state, and compliance from onboarding through offboarding needs ongoing attention."}</li><li>{"Key staff relocating from China need their visa process and post-arrival HR arrangements to connect."}</li></ol></section>
<section><h2>{"What we provide"}</h2><ul className="bullets"><li>{"Employment options: before you have a U.S. entity, hire through a third-party Employer of Record; once you have one, consider a third-party PEO. Employment and related services are provided by the licensed or registered provider under its own agreement with you; we help define needs, compare providers and coordinate"}</li><li>{"Payroll and benefits: provided by third-party payroll providers and licensed insurance agents; we help define needs and coordinate"}</li><li>{"Onboarding to offboarding: onboarding and employee records, employee handbook and compliance reminders, offboarding, and a day-to-day HR contact for U.S. employees"}</li><li>{"Relocation support: pre-move logistics (travel, housing and schooling information), help gathering documents on the immigration attorney's checklist, and onboarding after arrival. Visa matters are handled by a U.S.-licensed immigration attorney engaged directly by your company; we can provide introductions"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-hr-handshake.jpg" alt="HR Operations & Employment Compliance" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"right center"} as CSSProperties} /><SiteImage src="/assets/img/stock-hr-interview.jpg" alt="HR Operations & Employment Compliance" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"38% center"} as CSSProperties} /><SiteImage src="/assets/img/stock-hr-team.jpg" alt="HR Operations & Employment Compliance" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /></div><p className="note">{"Illustrative images."}</p></section>
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
