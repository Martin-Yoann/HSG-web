import { DeferredVideo } from '@/components/DeferredVideo';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "About · Happy Global Service",
  "description": "Happy Global Service is the service brand of Happy Global Inc., helping companies enter and operate in the U.S. market. Headquartered in Dallas, Texas, with a base in Los Angeles.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/about/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/about/",
      "en": "https://happyglobalinc.com/en/about/",
      "x-default": "https://happyglobalinc.com/about/"
    }
  },
  "openGraph": {
    "title": "About · Happy Global Service",
    "description": "Happy Global Service is the service brand of Happy Global Inc., helping companies enter and operate in the U.S. market. Headquartered in Dallas, Texas, with a base in Los Angeles.",
    "url": "https://happyglobalinc.com/en/about/",
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
<SiteImage src="/assets/img/hero-hq-roof.jpg" alt="" width="1920" height="1440" loading="eager" decoding="async" style={{"objectPosition":"center 32%"} as CSSProperties} />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"About us"}</div>
<h1><span className="nw">{"Happy Global Service"}</span></h1>
<p>{"Happy Global Service is the service brand of Happy Global Inc., a Texas corporation, helping companies enter and operate in the U.S. market. Services are contracted through Happy Global Inc."}</p>
</div>
</section>
<section className="section" id="about"><div className="wrap about">
<div>
<div className="kicker">{"About us"}</div>
<h2 className="title title--sm title--statement"><span className="nw">{"Happy Global Service"}</span>{" is the service brand of "}<span className="nw">{"Happy Global Inc."}</span>{", a Texas corporation, helping companies enter and operate in the U.S. market. Services are contracted through "}<span className="nw">{"Happy Global Inc."}</span></h2>
<div className="brands"><span>{"Member brands"}</span><Link className="brand brand--g" href="/en/ecosystem/"><i></i>{"Glimboo"}</Link><Link className="brand" href="/en/ecosystem/"><i></i>{"PulseOn"}</Link></div>
</div>
<div className="statements">
<div><b>{"Positioning"}</b><p>{"U.S.-based, focused on market entry and local operations."}</p></div>
<div><b>{"Mission"}</b><p>{"To make entering the U.S. market, operating locally and growing there simpler and more reliable."}</p></div>
<div><b>{"Vision"}</b><p>{"To be the partner companies reach out to — and trust for the long run — when they enter the U.S. and need local support."}</p></div>
</div>
</div></section>
<section className="section" id="track"><div className="wrap">
<div className="kicker">{"Our own brands"}</div>
<h2 className="title rv">{"Our own brands were our first client"}</h2>
<p className="lead">{"To bring our own brands into the U.S. market, the Happy Global network built a team, a warehouse, a content studio and an R&D lab in Dallas and went through the full process of channel entry. That experience is the foundation of the services we offer today."}</p>
<div className="mosaic mosaic--5"><SiteImage src="/assets/img/opc-audience.jpg" alt="Open Platform Conference audience" width="1715" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-victor.jpg" alt="Open Platform Conference · Defining Vision, Achieving Shared Value" width="860" height="788" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-rubie.jpg" alt="Open Platform Conference · Operational Excellence" width="1000" height="788" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-sarah.jpg" alt="Open Platform Conference · Global B2B Distribution and Service" width="851" height="638" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-liyan.jpg" alt="Open Platform Conference · Team and Culture" width="851" height="638" loading="lazy" decoding="async" /></div>
<p className="note">{"Open Platform Conference, Dallas."}</p>
<div className="timeline"><div><b>{"Built the Dallas team and warehouse"}</b><p>{"Established our operating base in the U.S."}</p></div><div><b>{"Took our own brands into U.S. channels"}</b><p>{"Pricing, compliance and entry into mainstream retail."}</p></div><div><b>{"Built the content studio"}</b><p>{"Trade shows, corporate film and bilingual content."}</p></div><div><b>{"Opened our capabilities to clients"}</b><p>{"Beginning with recruiting and executive search, then line by line."}</p></div></div></div></section>
<section className="section" id="base"><div className="wrap base">
<div>
<div className="kicker">{"Our U.S. locations"}</div>
<h2 className="title rv">{"Headquarters and R&D in Dallas, brand showcase in Los Angeles"}</h2>
<p className="lead">{"Dallas is our headquarters: our team works, produces content and receives clients here, and our PulseOn brand is based here. The R&D lab for PulseOn and Glimboo is located at our headquarters, and a larger R&D center is under construction. Los Angeles is the first stop in the U.S. for many Chinese brands; our base there focuses on brand showcasing and partner relations. Warehousing centers on the Dallas warehouse operated by Happy Global Logistics, with coordinated locations in Los Angeles, Chicago and Phoenix fulfilling close to the customer. Visitors are welcome."}</p>
<div className="base__items"><div><b>{"Dallas HQ"}</b><span>{"Office, content studio (run by Happy Global Studio) and R&D lab; R&D center under construction"}</span></div><div><b>{"Los Angeles base"}</b><span>{"Brand showcasing and partner relations"}</span></div><div><b>{"Warehousing"}</b><span>{"Dallas warehouse (operated by Happy Global Logistics); coordinated locations in Los Angeles, Chicago and Phoenix"}</span></div></div>
</div>
<div className="base__photos"><SiteImage src="/assets/img/hero-hq-roof.jpg" alt="Our headquarters in Dallas" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 32%"} as CSSProperties} /><SiteImage src="/assets/img/base-office-sign.jpg" alt="Happy Global sign in the office" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/hero-lobby.jpg" alt="Headquarters lobby" width="1920" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-merch-wall.jpg" alt="Brand display wall" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-mascot.jpg" alt="Brand mascot" width="1328" height="1050" loading="lazy" decoding="async" /></div>
</div></section>
<section className="section" id="videos"><div className="wrap">
<div className="head-split"><div><div className="kicker">{"Corporate film"}</div><h2 className="title rv">{"Why we chose Dallas"}</h2></div><p className="lead">{"A colleague from our U.S. marketing team on the economy, talent and logistics of Dallas, and why we made it our headquarters."}</p></div>
<div className="videos">
<figure className="vcard rv" style={{"--i":"0"} as CSSProperties}>
<DeferredVideo poster="/assets/img/poster-dallas.jpg" src="/assets/video/why-dallas.mp4" />
<figcaption><small>{"Why Dallas"}</small><b>{"Why we chose Dallas"}</b><span>{"A colleague from our U.S. marketing team on the economy, talent and logistics of Dallas, and why we made it our headquarters."}</span></figcaption>
</figure>
</div>
</div></section>
<section className="section section--navy" id="team"><div className="wrap">
<div className="head-split">
<div><div className="kicker">{"U.S. team"}</div><h2 className="title rv">{"Delivered in the U.S. by a local team"}</h2></div>
<p className="lead">{"Finance, warehouse, marketing, product, HR and operations teams across the Happy Global network work mainly from our Dallas headquarters; our Los Angeles base handles brand showcasing and partner relations. For work in the U.S., a local colleague is your point of contact."}</p>
</div>
<div className="mosaic mosaic--work mosaic--w3"><SiteImage src="/assets/img/us-team-pano.jpg" alt="Dallas team spring outing" width="1920" height="1280" loading="lazy" decoding="async" style={{"objectPosition":"center 62%"} as CSSProperties} /><SiteImage src="/assets/img/us-share-organic.jpg" alt="Internal workshop at the Dallas office: organic media and SEO" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/us-office-left.jpg" alt="The Dallas office" width="857" height="1051" loading="lazy" decoding="async" style={{"objectPosition":"center 30%"} as CSSProperties} /></div>
<div className="mosaic mosaic--3" style={{"marginTop":"12px"} as CSSProperties}><SiteImage src="/assets/img/us-mascot-plants.jpg" alt="A corner of the Dallas office, with Jojo, our mascot" width="995" height="1050" loading="lazy" decoding="async" style={{"objectPosition":"center 42%"} as CSSProperties} /><SiteImage src="/assets/img/base-merch-wall.jpg" alt="Brand display wall" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/us-jojo.jpg" alt="Jojo, our mascot" width="667" height="1000" loading="lazy" decoding="async" style={{"objectPosition":"center 62%"} as CSSProperties} /></div>
<p className="note">{"The Dallas team: internal workshops, office life, team outings and community volunteering."}</p>
<div className="head-split block-gap" id="china">
<div><div className="kicker">{"China team"}</div><h2 className="title rv">{"Two teams, one process"}</h2><p className="lead">{"Our U.S. team handles matters on the ground; our China team works in step with our Dallas headquarters. Requirements, quotations, contracts and progress can all be discussed in Chinese."}</p></div>
<div className="points"><div><i>{"1"}</i><p><b>{"One language. "}</b>{"A bilingual team that can work with you directly in Chinese, without translators."}</p></div><div><i>{"2"}</i><p><b>{"Two shifts. "}</b>{"Our U.S. team covers channels, warehousing and on-site matters; the China team prepares documents, reconciles and plans the next step."}</p></div><div><i>{"3"}</i><p><b>{"One team. "}</b>{"Across two locations."}</p></div></div>
</div>
<div className="mosaic mosaic--5"><SiteImage src="/assets/img/cn-2026-balloons.jpg" alt="China team outing" width="1400" height="934" loading="lazy" decoding="async" style={{"objectPosition":"center 66%"} as CSSProperties} /><SiteImage src="/assets/img/cn-lobby.jpg" alt="China office reception" width="1400" height="1014" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-2026-group.jpg" alt="China team group photo" width="1500" height="1000" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-office.jpg" alt="China office" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-2026-drums.jpg" alt="China team outing" width="1400" height="934" loading="lazy" decoding="async" /></div>
<p className="note">{"Our China team: the same flag, the same way of working."}</p>
<div className="head-split block-gap" id="community">
<div><div className="kicker">{"Community"}</div><h2 className="title title--sm">{"Part of the Dallas community"}</h2></div>
<p className="lead">{"Sponsor of the Texas Chinese American Chamber of Commerce, long-standing volunteer at the North Texas Food Bank, and organizer of community donations. Operating in the U.S. begins with being a responsible local business."}</p>
</div>
<div className="mosaic mosaic--3"><SiteImage src="/assets/img/culture-foodbank.jpg" alt="Volunteer day at the North Texas Food Bank" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/family-wall-shay.jpg" alt="A North Texas Food Bank drive run from our office" width="637" height="1050" loading="lazy" decoding="async" style={{"objectPosition":"center 26%"} as CSSProperties} /><SiteImage src="/assets/img/us-chamber-shay.jpg" alt="At a Texas Chinese American Chamber of Commerce event" width="679" height="934" loading="lazy" decoding="async" style={{"objectPosition":"center 34%"} as CSSProperties} /></div>
</div></section>
</main>
</>);
}
