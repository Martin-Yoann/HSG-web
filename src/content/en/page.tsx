import { SiteImage } from '@/components/SiteImage';
import { VideoPlaceholder } from '@/components/VideoPlaceholder';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Happy Global Service · U.S. Market Entry and Local Operations · Dallas, Texas",
  "description": "Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — retail channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.",
  "alternates": {
    "canonical": "/en/",
    "languages": {
      "zh-CN": "/",
      "en": "/en/"
    }
  },
  "openGraph": {
    "title": "Happy Global Service · U.S. Market Entry and Local Operations · Dallas, Texas",
    "description": "Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — retail channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "/assets/img/hero-hq-roof.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — retail channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S."}]} />
<main id="main">
<section className="hero hero--video" aria-label="Introduction">
<SiteImage src="/assets/img/hero-hq-front.jpg" alt="Our headquarters in Dallas" width="1920" height="1130" className="hero__poster" loading="eager" decoding="async" style={{"objectPosition":"78% 40%"} as CSSProperties} />
<video className="hero__video" muted loop playsInline preload="none" data-src="/assets/video/hero-loop.mp4" aria-hidden="true"></video>
<div className="wrap">
<div className="hero__copy">
<div className="hero__kicker rv" style={{"--i":"0"} as CSSProperties}>{"U.S. market entry · local operations"}</div>
<h1 className="rv" style={{"--i":"1"} as CSSProperties}>{"Enter the U.S. market"}<br />{" with a team that is "}<em>{"already here"}</em></h1>
<p className="hero__lead rv" style={{"--i":"2"} as CSSProperties}>{"Happy Global Service is the service brand of Happy Global Inc., providing U.S.-based market-entry and local-operations services to brand companies. We are headquartered in Dallas, with a base in Los Angeles and fulfillment from four warehouse locations in Dallas, Los Angeles, Chicago and Phoenix; our teams work in both the U.S. and China. We operate brands of our own and provide services in the U.S. The road a brand takes into the U.S. is one we have already traveled."}</p>
<p className="hero__slogan rv" style={{"--i":"3"} as CSSProperties}>{"Happy Global — your partner on the ground in the U.S."}</p>
<div className="hero__ctas rv" style={{"--i":"4"} as CSSProperties}>
<Link className="btn" href="/en/contact/">{"Contact us"}</Link>
<Link className="btn btn--ghost" href="/en/ecosystem/">{"Explore the Happy Global network"}</Link>
</div>
</div>
<div className="stats rv" style={{"--i":"3"} as CSSProperties}>
<div className="stat"><div className="stat__num">{"Dallas HQ"}</div><div className="stat__label stat__label--split"><span className="pt">{"LA base"}</span><span className="sep">{" · "}</span><span className="pt">{"four-site fulfillment"}</span></div></div>
<div className="stat"><div className="stat__num">{"U.S. + China "}<small>{"teams"}</small></div><div className="stat__split"><span>{"U.S. team on the ground"}</span><i></i><span>{"China team in your time zone"}</span></div></div>
<div className="stat"><div className="stat__num">{"Own brands"}</div><div className="stat__label">{"Glimboo · PulseOn"}</div></div>
<div className="stat"><div className="stat__num">{"Six lines"}</div><div className="stat__label">{"delivered under Happy Global Inc."}</div></div>
<ul className="proof"><li>{"Hands-on implementation & execution"}</li><li>{"A U.S.-based accountable entity"}</li><li>{"Bilingual team"}</li></ul>
</div>
</div>
<a className="hero__scroll" href="#strip" aria-label="Slideshow"><span></span></a>
</section>
<section className="strip" id="strip" aria-label="Slideshow">
<div className="strip__track"><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-hq-roof.jpg" alt="Our headquarters in Dallas" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption>{"Our headquarters in Dallas"}</figcaption></figure><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-dallas.jpg" alt="Dallas" width="1500" height="844" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption>{"Dallas"}</figcaption></figure><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-lobby.jpg" alt="Headquarters lobby" width="1920" height="1080" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><figcaption>{"Headquarters lobby"}</figcaption></figure><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-us-collage.jpg" alt="In the U.S. market" width="1920" height="800" loading="lazy" decoding="async" style={{"objectPosition":"center"} as CSSProperties} /><figcaption>{"In the U.S. market"}</figcaption></figure><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/field-booth.jpg" alt="Happy Global × PulseOn joint booth" width="1400" height="933" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption>{"Happy Global × PulseOn joint booth"}</figcaption></figure><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/opc-group.jpg" alt="Open Platform Conference · Dallas" width="1920" height="1080" loading="lazy" decoding="async" style={{"objectPosition":"center 72%"} as CSSProperties} /><figcaption>{"Open Platform Conference · Dallas"}</figcaption></figure><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/opc-audience-hero.jpg" alt="Open Platform Conference · the venue" width="1715" height="655" loading="lazy" decoding="async" style={{"objectPosition":"center 100%"} as CSSProperties} /><figcaption>{"Open Platform Conference · the venue"}</figcaption></figure><figure className="strip__item"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-hq-entrance.jpg" alt="Main entrance" width="1768" height="1176" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><figcaption>{"Main entrance"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-hq-roof.jpg" alt="" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption>{"Our headquarters in Dallas"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-dallas.jpg" alt="" width="1500" height="844" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption>{"Dallas"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-lobby.jpg" alt="" width="1920" height="1080" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><figcaption>{"Headquarters lobby"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-us-collage.jpg" alt="" width="1920" height="800" loading="lazy" decoding="async" style={{"objectPosition":"center"} as CSSProperties} /><figcaption>{"In the U.S. market"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/field-booth.jpg" alt="" width="1400" height="933" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption>{"Happy Global × PulseOn joint booth"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/opc-group.jpg" alt="" width="1920" height="1080" loading="lazy" decoding="async" style={{"objectPosition":"center 72%"} as CSSProperties} /><figcaption>{"Open Platform Conference · Dallas"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/opc-audience-hero.jpg" alt="" width="1715" height="655" loading="lazy" decoding="async" style={{"objectPosition":"center 100%"} as CSSProperties} /><figcaption>{"Open Platform Conference · the venue"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage sizes="(max-width: 760px) 260px, 380px" src="/assets/img/hero-hq-entrance.jpg" alt="" width="1768" height="1176" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><figcaption>{"Main entrance"}</figcaption></figure></div>
</section>
<section className="section" id="questions"><div className="wrap">
<div className="kicker">{"About Happy Global Service"}</div>
<h2 className="title rv">{"Operating. Local. First-hand."}</h2>
<div className="qgrid">
<div className="qcard rv" style={{"--i":"0"} as CSSProperties}><div className="qcard__q">{"Hands-on service"}</div><div className="qcard__a">{"Every service is delivered by our own team in the U.S."}</div><p className="qcard__d">{"Our Dallas headquarters houses our office, content studio and R&D lab, we have a base in Los Angeles, and four warehouse locations fulfill close to the customer. Our own brands trade in the U.S. market. The work you hand to us is work we do for ourselves."}</p></div><div className="qcard rv" style={{"--i":"1"} as CSSProperties}><div className="qcard__q">{"A local accountable entity"}</div><div className="qcard__a">{"A U.S. entity that carries purchasing, compliance and after-sales responsibility."}</div><p className="qcard__d">{"Purchasing, compliance, after-sales and disputes all require a counterpart in the U.S. Happy Global Inc. fills that role."}</p></div><div className="qcard rv" style={{"--i":"2"} as CSSProperties}><div className="qcard__q">{"First-hand practice"}</div><div className="qcard__a">{"The full path into the U.S. market, validated with brands of our own."}</div><p className="qcard__d">{"Pricing, labeling compliance, mainstream channel entry, warehousing, local hiring and working with licensed professionals — a brand does not need to start from zero."}</p></div>
</div>
</div></section>
<section className="section" id="videos"><div className="wrap">
<div className="head-split"><div><div className="kicker">{"Corporate film"}</div><h2 className="title rv">{"Happy Global in the U.S."}</h2></div><p className="lead">{"One film from the Open Platform Conference we hosted in Dallas; in the other, a colleague from our U.S. marketing team explains why we chose Dallas."}</p></div>
<div className="videos">
<figure className="vcard rv" style={{"--i":"0"} as CSSProperties}>
<VideoPlaceholder poster="/assets/img/poster-opc.jpg" english={true} />
<figcaption><small>{"Open Platform Conference · Dallas"}</small><b>{"Inside the Open Platform Conference"}</b><span>{"We brought together the legal, tax and channel partners we work with and the brand companies we serve to discuss the practical questions of entering the U.S. market."}</span></figcaption>
</figure>
<figure className="vcard rv" style={{"--i":"1"} as CSSProperties}>
<VideoPlaceholder poster="/assets/img/poster-dallas.jpg" english={true} />
<figcaption><small>{"Why Dallas"}</small><b>{"Why we chose Dallas"}</b><span>{"A colleague from our U.S. marketing team on the economy, talent and logistics of Dallas, and why we made it our headquarters."}</span></figcaption>
</figure>
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
<section className="section section--soft" id="services"><div className="wrap">
<div className="kicker">{"Services"}</div>
<h2 className="title">{"Six service lines, one accountable entity"}</h2>
<p className="lead">{"Channels, content, recruiting, tax and structure planning, cross-border logistics and warehousing, HR operations and employment compliance — all delivered under Happy Global Inc."}</p>
<div className="sgrid">
<Link className="scard rv" style={{"--i":"0"} as CSSProperties} href="/en/services/channel/"><span className="icon">{"R"}</span><h3>{"Retail & Channel Entry"}</h3><p>{"Helping brands enter U.S. offline and online sales channels. Channel requirements, labeling and compliance, pricing and negotiation — grounded in the experience of our own brands."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"1"} as CSSProperties} href="/en/services/content/"><span className="icon">{"C"}</span><h3>{"Content & Localized Marketing"}</h3><p>{"Brand content and social media for the U.S. market: trade-show film, brand and product video, bilingual content, and management of U.S. social media accounts."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"2"} as CSSProperties} href="/en/services/recruiting/"><span className="icon">{"H"}</span><h3>{"Recruiting & Executive Search"}</h3><p>{"Executive search and professional recruiting for companies entering the U.S. market, plus talent advisory such as compensation benchmarking and organization design. We built our own U.S. team this way first."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"3"} as CSSProperties} href="/en/services/finance-compliance/"><span className="icon">{"F"}</span><h3>{"Tax & Listing-Structure Planning"}</h3><p>{"Planning the tax, equity and listing structure of your U.S. business from the start, followed by entity setup, bookkeeping, tax filing and bank accounts. Professional opinions are issued by the licensed accountants and lawyers we work with; we coordinate the work through to completion."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"4"} as CSSProperties} href="/en/services/warehousing/"><span className="icon">{"W"}</span><h3>{"Cross-Border Logistics & Fulfillment"}</h3><p>{"One connected line from a factory in China to a store in the U.S.: cross-border freight and customs coordination, fulfillment from four U.S. warehouse locations, and line-haul and B2B delivery."}</p><span className="scard__more">{"Learn more →"}</span></Link><Link className="scard rv" style={{"--i":"5"} as CSSProperties} href="/en/services/hr-ops/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"HR"}</span><h3>{"HR Operations & Employment Compliance"}</h3><p>{"Employment solutions (EOR/PEO), payroll, local compliance from onboarding to offboarding, and coordination for key staff relocating to the U.S. — a process that comes from running our own U.S. team."}</p><span className="scard__more">{"Learn more →"}</span></Link>
</div>
</div></section>
<section className="section" id="base"><div className="wrap base">
<div>
<div className="kicker">{"Our U.S. locations"}</div>
<h2 className="title rv">{"Headquarters and R&D in Dallas, brand showcase in Los Angeles"}</h2>
<p className="lead">{"Dallas is our headquarters: our team works, produces content and receives clients here, and our PulseOn brand is based here. The R&D lab for PulseOn and Glimboo is located at our headquarters, and a larger R&D center is under construction. Los Angeles is the first stop in the U.S. for many Chinese brands; our base there focuses on brand showcasing and partner relations. Warehousing is handled by four locations that fulfill close to the customer. Visitors are welcome."}</p>
<div className="base__items"><div><b>{"Dallas HQ"}</b><span>{"Office, content studio and R&D lab; R&D center under construction"}</span></div><div><b>{"Los Angeles base"}</b><span>{"Brand showcasing and partner relations"}</span></div><div><b>{"Four warehouses"}</b><span>{"Dallas, Los Angeles, Chicago and Phoenix, fulfilling close to the customer"}</span></div></div>
</div>
<div className="base__photos"><SiteImage src="/assets/img/hero-hq-roof.jpg" alt="Our headquarters in Dallas" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 32%"} as CSSProperties} /><SiteImage src="/assets/img/base-office-sign.jpg" alt="Happy Global sign in the office" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/hero-lobby.jpg" alt="Headquarters lobby" width="1920" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-merch-wall.jpg" alt="Brand display wall" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-mascot.jpg" alt="Brand mascot" width="1400" height="1050" loading="lazy" decoding="async" /></div>
</div></section>
<section className="section section--navy" id="how"><div className="wrap how">
<div>
<div className="kicker">{"How we work"}</div>
<h2 className="title rv">{"Capable. Accountable. Compounding."}</h2>
<div className="principles"><div><b>{"Capable"}</b><span>{"The team and resources in the U.S. to complete the work."}</span></div><div><b>{"Accountable"}</b><span>{"Responsible for the agreed scope"}</span></div><div><b>{"Compounding"}</b><span>{"Each engagement adds to our methods, processes and resources for the clients that follow."}</span></div></div>
</div>
<div className="how__principle-photo"><SiteImage src="/assets/img/opc-launch.jpg" alt="Capable. Accountable. Compounding." width="1198" height="747" loading="lazy" decoding="async" style={{"objectPosition":"center 22%"} as CSSProperties} /></div>
<div className="how__photos">
<div className="mosaic mosaic--3"><SiteImage src="/assets/img/opc-audience.jpg" alt="Open Platform Conference audience" width="1715" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-stage.jpg" alt="Open Platform Conference main stage" width="1280" height="780" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-banquet.jpg" alt="Open Platform Conference · dinner" width="1920" height="1080" loading="lazy" decoding="async" /></div>
<p className="note">{"Open Platform Conference, Dallas. The licensed professionals we work with shared the stage with us."}</p>
</div>
</div></section>
<section className="section section--soft" id="field"><div className="wrap">
<div className="head-split">
<div><div className="kicker">{"In the market"}</div><h2 className="title rv">{"Face to face with U.S. consumers"}</h2></div>
<p className="lead">{"Our own brands meet U.S. consumers directly — at music festivals, city parades, university campuses and industry trade shows. Our understanding of the market comes from the field."}</p>
</div>
<div className="field">
<figure className="tile" style={{"gridArea":"1 / 1 / 2 / 3"} as CSSProperties}><SiteImage src="/assets/img/field-sampling.jpg" alt="U.S. consumers" width="1400" height="933" loading="lazy" decoding="async" /><figcaption><small>{"Wildflower Festival · sampling"}</small><span>{"U.S. consumers"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"1 / 3 / 3 / 4"} as CSSProperties}><SiteImage src="/assets/img/field-expo.jpg" alt="Our own brand's booth" width="933" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 20%"} as CSSProperties} /><figcaption><small>{"Sweets & Snacks Expo"}</small><span>{"Our own brand's booth"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"1 / 4 / 3 / 5"} as CSSProperties}><SiteImage src="/assets/img/field-parade.jpg" alt="Our local team at the festival" width="933" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 25%"} as CSSProperties} /><figcaption><small>{"Dallas St. Patrick's Parade"}</small><span>{"Our local team at the festival"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"2 / 1 / 3 / 2"} as CSSProperties}><SiteImage src="/assets/img/field-tent.jpg" alt="Our local team" width="1400" height="933" loading="lazy" decoding="async" /><figcaption><small>{"Event activation"}</small><span>{"Our local team"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"2 / 2 / 3 / 3"} as CSSProperties}><SiteImage src="/assets/img/field-campus.jpg" alt="Younger consumers" width="1400" height="933" loading="lazy" decoding="async" /><figcaption><small>{"Campus · UTD"}</small><span>{"Younger consumers"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"3 / 1 / 4 / 3"} as CSSProperties}><SiteImage src="/assets/img/field-booth.jpg" alt="Happy Global and PulseOn joint booth" width="1400" height="933" loading="lazy" decoding="async" style={{"objectPosition":"center 35%"} as CSSProperties} /><figcaption><small>{"Wildflower Festival · booth"}</small><span>{"Happy Global and PulseOn joint booth"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"3 / 3 / 4 / 4"} as CSSProperties}><SiteImage src="/assets/img/field-night.jpg" alt="Brand activation" width="1400" height="933" loading="lazy" decoding="async" /><figcaption><small>{"Evening event"}</small><span>{"Brand activation"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"3 / 4 / 5 / 5"} as CSSProperties}><SiteImage src="/assets/img/field-campus-lift.jpg" alt="Products in everyday life" width="933" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 30%"} as CSSProperties} /><figcaption><small>{"Campus · UTD"}</small><span>{"Products in everyday life"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"4 / 1 / 5 / 4"} as CSSProperties}><SiteImage src="/assets/img/field-txcacc.jpg" alt="Chamber sponsor" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"center 35%"} as CSSProperties} /><figcaption><small>{"Texas Chinese American Chamber of Commerce"}</small><span>{"Chamber sponsor"}</span></figcaption></figure>
</div>
</div></section>
<section className="section section--navy" id="team"><div className="wrap">
<div className="head-split">
<div><div className="kicker">{"U.S. team"}</div><h2 className="title rv">{"Delivered in the U.S. by a local team"}</h2></div>
<p className="lead">{"Our finance, warehouse, marketing, product, HR and operations teams work mainly from our Dallas headquarters; our Los Angeles base handles brand showcasing and partner relations. Whatever arises in the U.S., a local colleague is responsible for it."}</p>
</div>
<div className="mosaic mosaic--work"><SiteImage src="/assets/img/us-team-pano.jpg" alt="Dallas team spring outing" width="1920" height="1280" loading="lazy" decoding="async" style={{"objectPosition":"center 62%"} as CSSProperties} /><SiteImage src="/assets/img/us-share-digital.jpg" alt="Internal workshop at the Dallas office: digital marketing" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/us-share-organic.jpg" alt="Internal workshop at the Dallas office: organic media and SEO" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/us-office-wide.jpg" alt="The Dallas office" width="1400" height="1051" loading="lazy" decoding="async" /></div>
<div className="mosaic mosaic--culture" style={{"marginTop":"12px"} as CSSProperties}><SiteImage src="/assets/img/culture-lawn.jpg" alt="Dallas team day" width="1400" height="1050" loading="lazy" decoding="async" style={{"objectPosition":"center 44%"} as CSSProperties} /><SiteImage src="/assets/img/us-picnic-coke.jpg" alt="Spring outing" width="734" height="1100" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><SiteImage src="/assets/img/us-picnic-floral.jpg" alt="Spring outing" width="734" height="1100" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><SiteImage src="/assets/img/culture-picnic.jpg" alt="Team picnic" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/culture-bday-hat.jpg" alt="Birthday celebration" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/culture-foodbank.jpg" alt="Volunteering at the food bank" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/us-jojo.jpg" alt="Jojo" width="667" height="1000" loading="lazy" decoding="async" style={{"objectPosition":"center 62%"} as CSSProperties} /></div>
<p className="note">{"The Dallas team: internal workshops, office life, team outings and community volunteering."}</p>
<div className="head-split block-gap" id="china">
<div><div className="kicker">{"China team"}</div><h2 className="title rv">{"Two teams, one process"}</h2><p className="lead">{"Our U.S. team handles matters on the ground; our China team works alongside you in your time zone. Requirements, quotations, contracts and progress can be handled directly, in Chinese, with your headquarters."}</p></div>
<div className="points"><div><i>{"1"}</i><p><b>{"One language. "}</b>{"Our China team works directly with your headquarters in China"}</p></div><div><i>{"2"}</i><p><b>{"Two shifts. "}</b>{"Our U.S. team covers channels, warehousing and on-site matters; the China team prepares documents, reconciles and plans the next step."}</p></div><div><i>{"3"}</i><p><b>{"One company. "}</b>{"Not an agency or an intermediary — one team across two locations."}</p></div></div>
</div>
<div className="mosaic mosaic--5"><SiteImage src="/assets/img/cn-2026-balloons.jpg" alt="China team outing" width="1400" height="934" loading="lazy" decoding="async" style={{"objectPosition":"center 66%"} as CSSProperties} /><SiteImage src="/assets/img/cn-lobby.jpg" alt="China office reception" width="1400" height="1014" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-2026-group.jpg" alt="China team group photo" width="1500" height="1000" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-office.jpg" alt="China office" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-2026-drums.jpg" alt="China team outing" width="1400" height="934" loading="lazy" decoding="async" /></div>
<p className="note">{"Our China team: the same flag, the same way of working."}</p>
<div className="head-split block-gap" id="community">
<div><div className="kicker">{"Community"}</div><h2 className="title title--sm">{"Part of the Dallas community"}</h2></div>
<p className="lead">{"Sponsor of the Texas Chinese American Chamber of Commerce, long-standing volunteer at the North Texas Food Bank, and organizer of community donations. Operating in the U.S. begins with being a responsible local business."}</p>
</div>
<div className="mosaic mosaic--4"><SiteImage src="/assets/img/field-txcacc.jpg" alt="Texas Chinese American Chamber of Commerce event" width="1400" height="788" loading="lazy" decoding="async" /><SiteImage src="/assets/img/culture-foodbank.jpg" alt="Volunteer day at the North Texas Food Bank" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/community-foodbank-pair.jpg" alt="Food bank volunteers" width="1400" height="1173" loading="lazy" decoding="async" /><SiteImage src="/assets/img/community-donation-car.jpg" alt="Community donation" width="1400" height="1050" loading="lazy" decoding="async" /></div>
</div></section>
<section className="section" id="about"><div className="wrap about">
<div>
<div className="kicker">{"About us"}</div>
<h2 className="title title--sm title--statement">{"Happy Global Service is the service brand of Happy Global Inc., helping companies enter and operate in the U.S. market. Contracting and delivery are handled by Happy Global Inc."}</h2>
<div className="brands"><span>{"Member brands"}</span><Link className="brand brand--g" href="/en/ecosystem/"><i></i>{"Glimboo"}</Link><Link className="brand" href="/en/ecosystem/"><i></i>{"PulseOn"}</Link></div>
</div>
<div className="statements">
<div><b>{"Positioning"}</b><p>{"U.S.-based, focused on market entry and local operations."}</p></div>
<div><b>{"Mission"}</b><p>{"To make entering the U.S. market, operating locally and growing there simpler and more reliable."}</p></div>
<div><b>{"Vision"}</b><p>{"To be the partner companies reach out to — and trust for the long run — when they enter the U.S. and need local support."}</p></div>
</div>
</div></section>
<section className="section section--soft" id="contact"><div className="wrap contact">
<div>
<div className="kicker">{"Contact"}</div>
<h2 className="title">{"We look forward to hearing from you"}</h2>
<p className="lead">{"Please tell us briefly about your products, target market and current stage. The lead for the relevant service line will be in touch."}</p>
<form className="form" data-form="" action="#" method="post" data-pending="The online form will go live with our domain. In the meantime, please reach us by email.">
<label>{"Name"}<input name="name" autoComplete="name" required /></label>
<label>{"Company and product"}<input name="company" autoComplete="organization" /></label>
<label>{"Email or WeChat"}<input name="reach" required /></label>
<fieldset><legend>{"Services of interest"}</legend><div className="chips"><label><input type="checkbox" name="need" value="Retail channels" />{"Retail channels"}</label><label><input type="checkbox" name="need" value="Content and marketing" />{"Content and marketing"}</label><label><input type="checkbox" name="need" value="Recruiting and search" />{"Recruiting and search"}</label><label><input type="checkbox" name="need" value="Tax and structure planning" />{"Tax and structure planning"}</label><label><input type="checkbox" name="need" value="Logistics and warehousing" />{"Logistics and warehousing"}</label><label><input type="checkbox" name="need" value="HR and employment" />{"HR and employment"}</label><label><input type="checkbox" name="need" value="Other" />{"Other"}</label></div></fieldset>
<label>{"Message"}<textarea name="message"></textarea></label>
<button className="btn" type="submit">{"Submit"}</button>
<p className="form__msg" role="status"></p>
</form>
</div>
<div className="contact__side">
<div className="card"><h3>{"WeChat"}</h3><p>{"Scan to connect"}</p><div className="qr ph">{"[QR code]"}</div></div>
<div className="card"><h3>{"Email"}</h3><p>{"[Email address to be set with the domain]"}</p></div>
<div className="card"><p style={{"margin":"0"} as CSSProperties}>{"Happy Global Inc. · Dallas, Texas (HQ) · Los Angeles (base)"}</p></div>
<div className="card"><h3>{"Notice"}</h3><p className="disclaimer">{"Content on this site and initial conversations are general information intended to help companies understand common questions in entering the U.S. market. They are not an offer or a commitment and do not constitute legal, tax, securities, financial or investment advice. The scope, fees and responsibilities of any service are defined by a written agreement signed by both parties; legal, tax, securities, immigration, customs and product-certification matters are handled by licensed professionals. We make no commitment regarding channel acceptance or commercial outcomes."}</p></div>
</div>
</div></section>
</main>
</>);
}
