import { SiteImage } from '@/components/SiteImage';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "HR Operations & Employment Compliance · Happy Global Service",
  "description": "Employment solutions (EOR/PEO), payroll, local compliance from onboarding to offboarding, and coordination for key staff relocating to the U.S. — a process that comes from running our own U.S. team.",
  "alternates": {
    "canonical": "/en/services/hr-ops/",
    "languages": {
      "zh-CN": "/services/hr-ops/",
      "en": "/en/services/hr-ops/"
    }
  },
  "openGraph": {
    "title": "HR Operations & Employment Compliance · Happy Global Service",
    "description": "Employment solutions (EOR/PEO), payroll, local compliance from onboarding to offboarding, and coordination for key staff relocating to the U.S. — a process that comes from running our own U.S. team.",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "/assets/img/hr-banner.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — retail channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S."},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"Employment solutions (EOR/PEO), payroll, local compliance from onboarding to offboarding, and coordination for key staff relocating to the U.S. — a process that comes from running our own U.S. team.","name":"HR Operations & Employment Compliance","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
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
<nav className="tabs" aria-label="Service lines"><Link scroll={false} href="/en/services/channel/">{"Retail & Channel Entry"}</Link><Link scroll={false} href="/en/services/content/">{"Content & Localized Marketing"}</Link><Link scroll={false} href="/en/services/recruiting/">{"Recruiting & Search"}</Link><Link scroll={false} href="/en/services/finance-compliance/">{"Tax & Structure"}</Link><Link scroll={false} href="/en/services/warehousing/">{"Logistics & Warehousing"}</Link><Link scroll={false} href="/en/services/hr-ops/" aria-current="page">{"HR & Employment"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"When it applies"}</h2><ol className="numbered"><li>{"No U.S. entity yet, or the first hires' employment, payroll and benefits need a proper start."}</li><li>{"Rules vary by state, and compliance from onboarding through offboarding needs ongoing attention."}</li><li>{"Key staff relocating from China need their visa process and post-arrival HR arrangements to connect."}</li></ol></section>
<section><h2>{"What we provide"}</h2><ul className="bullets"><li>{"Employment solutions: without a U.S. entity, hire first through an Employer of Record (EOR); with an entity, consider a PEO (with licensed providers)"}</li><li>{"Payroll and benefits: payroll calculation and payment, statutory filings, benefits and leave administration (with licensed payroll and benefits providers)"}</li><li>{"Onboarding to offboarding: onboarding and employee records, employee handbook and compliance reminders, offboarding, and a day-to-day HR contact for U.S. employees"}</li><li>{"Relocation to the U.S.: preparation, document coordination and post-arrival HR setup for key staff relocating from China (visa petitions handled by partner licensed immigration attorneys)"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-paperwork.jpg" alt="HR Operations & Employment Compliance" width="1400" height="933" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-folders.jpg" alt="HR Operations & Employment Compliance" width="1400" height="760" loading="lazy" decoding="async" /><SiteImage src="/assets/img/culture-foodbank.jpg" alt="HR Operations & Employment Compliance" width="1400" height="1050" loading="lazy" decoding="async" /></div></section>
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
