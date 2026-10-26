import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "FAQ · Happy Global Service",
  "description": "Common questions about Happy Global Service: scope of services, who we serve, our service entity and the boundaries of professional advice.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/faq/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/faq/",
      "en": "https://happyglobalinc.com/en/faq/",
      "x-default": "https://happyglobalinc.com/faq/"
    }
  },
  "openGraph": {
    "title": "FAQ · Happy Global Service",
    "description": "Common questions about Happy Global Service: scope of services, who we serve, our service entity and the boundaries of professional advice.",
    "url": "https://happyglobalinc.com/en/faq/",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/hero-lobby.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — sales channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S.","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"Happy Global Service is the service brand of Happy Global Inc. All services are contracted and coordinated by Happy Global Inc.; regulated professional matters are handled by licensed providers."},"name":"How are Happy Global Service and Happy Global Inc. related?"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"For brand companies entering the U.S. market, we provide six service lines: sales channel entry, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance. We are headquartered in Dallas, Texas, with a base in Los Angeles, and all services are contracted through Happy Global Inc."},"name":"What does Happy Global Service do?"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"No. We have our headquarters and R&D lab in Dallas and a base in Los Angeles, and we operate brands of our own. The Happy Global network also has a content studio in Dallas (run by Happy Global Studio) and a Dallas warehouse (operated by Happy Global Logistics), with coordinated locations elsewhere. All services are contracted by Happy Global Inc. and led and coordinated by our U.S. team; legal, tax, immigration, customs and transportation matters are handled by licensed providers."},"name":"Are you a consulting firm?"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"Companies with products and brand value of their own that plan to operate in the U.S. market for the long term. Size is not the deciding factor."},"name":"Which companies do you work with?"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"Yes. Many companies contact us before establishing a U.S. entity, and we can advise on sequencing. If you need to hire U.S. employees first, hiring through a third-party Employer of Record (EOR) can be considered."},"name":"We do not have a U.S. entity yet. Can we still talk?"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"No. We provide channel assessment, preparation, introductions and follow-up; the decision rests with the retailer."},"name":"Can you guarantee placement with a specific retailer?"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"No. Legal, tax, securities and immigration opinions are issued by licensed professionals. We can introduce the lawyers and accountants we work with and coordinate the work to completion."},"name":"Do you provide legal or tax advice?"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"Yes. Our team is bilingual and can work with you directly in Chinese; our U.S. team operates locally."},"name":"Do you work in English and Chinese?"}]}]} />
<main id="main">
<section className="page-hero">
<SiteImage src="/assets/img/hero-lobby.jpg" alt="" width="1920" height="1080" loading="eager" decoding="async" />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"FAQ"}</div>
<h1>{"Frequently asked questions"}</h1>
</div>
</section>
<section className="section section--soft"><div className="wrap">
<div className="faq"><details open><summary>{"How are Happy Global Service and Happy Global Inc. related?"}</summary><p>{"Happy Global Service is the service brand of Happy Global Inc. All services are contracted and coordinated by Happy Global Inc.; regulated professional matters are handled by licensed providers."}</p></details><details><summary>{"What does Happy Global Service do?"}</summary><p>{"For brand companies entering the U.S. market, we provide six service lines: sales channel entry, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance. We are headquartered in Dallas, Texas, with a base in Los Angeles, and all services are contracted through Happy Global Inc."}</p></details><details><summary>{"Are you a consulting firm?"}</summary><p>{"No. We have our headquarters and R&D lab in Dallas and a base in Los Angeles, and we operate brands of our own. The Happy Global network also has a content studio in Dallas (run by Happy Global Studio) and a Dallas warehouse (operated by Happy Global Logistics), with coordinated locations elsewhere. All services are contracted by Happy Global Inc. and led and coordinated by our U.S. team; legal, tax, immigration, customs and transportation matters are handled by licensed providers."}</p></details><details><summary>{"Which companies do you work with?"}</summary><p>{"Companies with products and brand value of their own that plan to operate in the U.S. market for the long term. Size is not the deciding factor."}</p></details><details><summary>{"We do not have a U.S. entity yet. Can we still talk?"}</summary><p>{"Yes. Many companies contact us before establishing a U.S. entity, and we can advise on sequencing. If you need to hire U.S. employees first, hiring through a third-party Employer of Record (EOR) can be considered."}</p></details><details><summary>{"Can you guarantee placement with a specific retailer?"}</summary><p>{"No. We provide channel assessment, preparation, introductions and follow-up; the decision rests with the retailer."}</p></details><details><summary>{"Do you provide legal or tax advice?"}</summary><p>{"No. Legal, tax, securities and immigration opinions are issued by licensed professionals. We can introduce the lawyers and accountants we work with and coordinate the work to completion."}</p></details><details><summary>{"Do you work in English and Chinese?"}</summary><p>{"Yes. Our team is bilingual and can work with you directly in Chinese; our U.S. team operates locally."}</p></details></div>
<p style={{"marginTop":"32px"} as CSSProperties}><Link className="btn" href="/en/contact/">{"Contact us"}</Link></p>
</div></section>
</main>
</>);
}
