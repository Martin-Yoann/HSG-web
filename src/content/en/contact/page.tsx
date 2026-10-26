import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Contact · Happy Global Service",
  "description": "Tell us briefly about your products and requirements, and the lead for the relevant service line will be in touch.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/contact/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/contact/",
      "en": "https://happyglobalinc.com/en/contact/",
      "x-default": "https://happyglobalinc.com/contact/"
    }
  },
  "openGraph": {
    "title": "Contact · Happy Global Service",
    "description": "Tell us briefly about your products and requirements, and the lead for the relevant service line will be in touch.",
    "url": "https://happyglobalinc.com/en/contact/",
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
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — sales channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S.","url":"https://happyglobalinc.com/"}]} />
<main id="main">
<section className="section section--soft" id="contact"><div className="wrap contact">
<div>
<div className="kicker">{"Contact"}</div>
<h1 className="title">{"We look forward to hearing from you"}</h1>
<p className="lead">{"Email us at service@happyglobalinc.com. Please tell us briefly about your products, target market and current stage, and the lead for the relevant service line will be in touch."}</p>
<p className="contact__mail"><a className="btn" href="mailto:service@happyglobalinc.com">{"Send an email · service@happyglobalinc.com"}</a></p><p className="contact__privacy">{"How we handle the information you send us is explained in our "}<Link href="/en/privacy/">{"Privacy Policy"}</Link>{"."}</p>
<ContactForm locale="en" />
</div>
<div className="contact__side">
<div className="card"><h3>{"Email"}</h3><p><a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a></p></div>
<div className="card"><p style={{"margin":"0"} as CSSProperties}>{"Happy Global Inc. · Dallas, Texas (HQ) · Los Angeles (base)"}</p></div>
<div className="card"><h3>{"Notice"}</h3><p className="disclaimer">{"Content on this site and initial conversations are general information intended to help companies understand common questions in entering the U.S. market. They are not an offer or a commitment and do not constitute legal, tax, securities, financial or investment advice. The scope, fees and responsibilities of any service are defined by a written agreement signed by both parties; legal, tax, securities, immigration, customs and product-certification matters are handled by licensed professionals. We make no commitment regarding channel acceptance or commercial outcomes."}</p></div>
</div>
</div></section>
</main>
</>);
}
