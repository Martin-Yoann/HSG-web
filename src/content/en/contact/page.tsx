import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Contact · Happy Global Service",
  "description": "Tell us briefly about your products and requirements, and the lead for the relevant service line will be in touch.",
  "alternates": {
    "canonical": "/en/contact/",
    "languages": {
      "zh-CN": "/contact/",
      "en": "/en/contact/"
    }
  },
  "openGraph": {
    "title": "Contact · Happy Global Service",
    "description": "Tell us briefly about your products and requirements, and the lead for the relevant service line will be in touch.",
    "type": "website",
    "locale": "en_US",
    "images": [
      {
        "url": "/assets/img/hero-lobby.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service, the service brand of Happy Global Inc., is headquartered in Dallas, Texas, with a base in Los Angeles. We help brands enter and operate in the U.S. — retail channels, content and localized marketing, recruiting and executive search, tax and listing-structure planning, cross-border logistics and fulfillment, and HR operations and employment compliance.","name":"Happy Global Inc.","slogan":"Happy Global — your partner on the ground in the U.S."}]} />
<main id="main">
<section className="section section--soft" id="contact"><div className="wrap contact">
<div>
<div className="kicker">{"Contact"}</div>
<h1 className="title">{"We look forward to hearing from you"}</h1>
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
