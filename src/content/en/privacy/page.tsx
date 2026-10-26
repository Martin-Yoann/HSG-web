import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Happy Global Inc. Privacy Policy · Happy Global Service",
  "description": "How Happy Global Inc. handles personal information you provide through this site, by email and other channels.",
  "alternates": {
    "canonical": "https://happyglobalinc.com/en/privacy/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/privacy/",
      "en": "https://happyglobalinc.com/en/privacy/",
      "x-default": "https://happyglobalinc.com/privacy/"
    }
  },
  "openGraph": {
    "title": "Happy Global Inc. Privacy Policy · Happy Global Service",
    "description": "How Happy Global Inc. handles personal information you provide through this site, by email and other channels.",
    "url": "https://happyglobalinc.com/en/privacy/",
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
<section className="page-hero legal-hero">
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Privacy Policy"}</div>
<h1><span className="nw">{"Happy Global Inc."}</span>
<span className="nw">{"Privacy Policy"}</span></h1>
</div>
</section>
<section className="section"><div className="wrap"><article className="legal"><p className="legal__date">{"Last updated: October 26, 2026"}</p>
<h2>{"1. Introduction and scope"}</h2>
<p>{"This policy explains how Happy Global Inc., a Texas corporation (\"we\", \"us\"), handles your personal information when you visit happyglobalinc.com (the \"Site\") or contact us by email, WeChat, at trade shows or on social media. Happy Global Service is a service brand of Happy Global Inc., which is responsible for the Site and the personal information collected through it."}</p>
<p>{"\"Personal information\" means information that identifies, relates to or could reasonably be linked to an individual. It does not include anonymized information or, under U.S. law, lawfully public, deidentified or aggregated information."}</p>
<p>{"If you contact us on behalf of an organization, you confirm that you are authorized to provide the contact details you submit."}</p>
<table className="legal__table"><tbody><tr><th>{"Company"}</th><td>{"Happy Global Inc."}</td></tr><tr><th>{"Address"}</th><td>{"1101 E Arapaho Rd, Suite 210, Richardson, TX 75081, USA"}</td></tr><tr><th>{"Email"}</th><td><a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a></td></tr><tr><th>{"Website"}</th><td><a href="https://happyglobalinc.com/">{"https://happyglobalinc.com/"}</a></td></tr></tbody></table>
<h2>{"2. What this policy does not cover"}</h2>
<ul className="legal__list"><li><b>{"Client engagements:"}</b>{" once your company becomes a client, personal information we process solely on its behalf under a signed service agreement (for example, employee payroll or onboarding records) is governed by that agreement and its data-processing terms. This policy still applies to business-contact and relationship information we process for our own purposes."}</li><li><b>{"Recruitment and candidates:"}</b>{" descriptions of recruiting and executive search on the Site are for information only. Candidate information such as résumés and work history is not collected through the Site and is handled under the notice given to the candidate at the time. The Site does not accept job applications or résumés."}</li><li><b>{"Other websites:"}</b>{" sites we link to are governed by their own policies."}</li></ul>
<h2>{"3. Personal information we collect"}</h2>
<h3>{"3.1 Information you provide"}</h3>
<ul className="legal__list"><li><b>{"Email:"}</b>{" your email address, signature and message content."}</li><li><b>{"WeChat:"}</b>{" if you communicate with our colleagues on WeChat, your WeChat ID, nickname, the profile details your settings make visible, and chat content."}</li><li><b>{"Trade shows and events:"}</b>{" the business card or contact details you give us."}</li><li><b>{"Social media:"}</b>{" messages and contact details you send our colleagues on social platforms."}</li></ul>
<p>{"Providing this information is voluntary; if you choose not to, we simply cannot reply to you."}</p>
<h3>{"3.2 Information collected automatically"}</h3>
<p>{"When you visit the Site, our hosting provider automatically records technical information: IP address (and the approximate country or city derived from it), browser type and version, operating system, device type, pages viewed, referring URL, and server and security logs."}</p>
<h3>{"3.3 Information from our correspondence"}</h3>
<p>{"When we reply to and follow up on your inquiry, we keep the resulting emails, calendar entries and meeting notes."}</p>
<h3>{"3.4 What we do not collect"}</h3>
<p>{"We do not seek to collect sensitive personal information through the Site, such as government ID numbers, bank account details, biometric or health data, religious beliefs, precise location, racial or ethnic origin, or information about children under 14. We also do not collect payment details, account passwords or résumés. Please do not include such information in your message."}</p>
<h3>{"3.5 Information about other people"}</h3>
<p>{"Please do not include other people's personal information, such as a candidate's or colleague's name, contact details or employment history. If you do, you confirm that you have a lawful basis and, where required, that person's consent; we will use it only to respond to you and delete it once it is no longer needed."}</p>
<h2>{"4. Sources of personal information"}</h2>
<ul className="legal__list"><li><b>{"You:"}</b>{" when you email us, communicate with our colleagues on WeChat, exchange business cards at trade shows or contact us on social media."}</li><li><b>{"Your device and browser:"}</b>{" automatically, when you visit the Site."}</li><li><b>{"Service providers:"}</b>{" in the course of operating the Site for us."}</li><li><b>{"Public business sources:"}</b>{" such as your company's website, to confirm the business context of an inquiry."}</li><li><b>{"Referrals:"}</b>{" when a client or partner introduces your company to us with your knowledge."}</li></ul>
<p>{"We do not buy personal information from data brokers."}</p>
<h2>{"5. How we use personal information"}</h2>
<ul className="legal__list"><li><b>{"To respond to you:"}</b>{" reviewing your inquiry, answering questions and, if you want one, preparing a proposal or quote."}</li><li><b>{"To manage the relationship:"}</b>{" once your company engages us, entering into and performing the service agreement and providing support."}</li><li><b>{"To share relevant updates:"}</b>{" sending service information and industry insights to business contacts, always with an easy way to opt out."}</li><li><b>{"To keep the Site secure:"}</b>{" preventing spam, fraud and abuse."}</li><li><b>{"To meet legal obligations:"}</b>{" including tax, accounting, export-control and sanctions requirements."}</li><li><b>{"To protect our rights:"}</b>{" establishing, exercising or defending legal claims and responding to lawful requests from authorities."}</li><li><b>{"Corporate transactions:"}</b>{" evaluating or completing a merger, acquisition, financing or sale of assets."}</li></ul>
<p>{"For individuals in mainland China, we rely on your consent, on what is necessary to enter into or perform a contract to which you are a party, and on what is necessary to meet legal duties. We ask separately for consent to the cross-border transfer (section 10)."}</p>
<p>{"We do not use automated decision-making to make decisions with legal or similarly significant effects on you; a person decides how to follow up on an inquiry."}</p>
<h2>{"6. Marketing communications"}</h2>
<p>{"Our replies to your inquiry are service messages. We may send service information or industry insights to business contacts; you can opt out at any time by replying \"unsubscribe\" or emailing "}<a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a>{", without affecting service messages."}</p>
<p>{"We do not sell or rent your email address or WeChat ID to anyone for their own marketing."}</p>
<h2>{"7. How we disclose personal information"}</h2>
<ul className="legal__list"><li><b>{"Service providers:"}</b>{" website hosting, business email, CRM, IT security and cloud storage providers, bound by contract to process it only on our instructions."}</li><li><b>{"Business support providers:"}</b>{" partner companies, and their staff, that help us respond to inquiries and support our operations. They process your information under written agreements and only to respond to your inquiry and provide our services."}</li><li><b>{"Professional advisers:"}</b>{" outside counsel, auditors, accountants and insurers."}</li><li><b>{"Government authorities:"}</b>{" where the law requires, or to establish, exercise or defend legal claims. We require valid legal process, disclose only the minimum necessary and, unless legally prohibited, tell you."}</li><li><b>{"Transaction counterparties:"}</b>{" in a merger, acquisition, financing or sale of assets, personal information may pass to the successor. We will tell you its name and contact details, and it must continue to honor this policy."}</li></ul>
<p>{"WeChat conversations take place on Tencent's WeChat platform, whose own privacy policy also applies. The companies listed on our \"Our Network\" page (such as Glimboo Inc. and PulseOn Inc.) are affiliates of Happy Global Inc. that operate independently; we will not share your information with them without your separate consent. For a current list of our main service providers, email us."}</p>
<h2>{"8. We do not sell personal information"}</h2>
<p>{"We do not sell personal information, and we do not \"share\" it for cross-context behavioral advertising or process it for targeted advertising, as U.S. state privacy laws use those terms. The Site runs no advertising and uses no analytics or advertising technology, so there is nothing to opt out of. We do not sell or share personal information of anyone we know to be under 18."}</p>
<p>{"If this changes, we will update this policy first, provide a clear opt-out and honor opt-out preference signals such as Global Privacy Control."}</p>
<h2>{"9. Cookies and browser signals"}</h2>
<p>{"The Site currently uses no cookies and no analytics, advertising, session-replay, heatmap or cross-site tracking tools, so it shows no cookie-consent banner. You can still block or delete cookies in your browser settings. If we introduce non-essential cookies or analytics, we will update this policy first and obtain prior consent where the law requires."}</p>
<p>{"Browser \"Do Not Track\" or Global Privacy Control signals: because we do not sell or share personal information or run advertising, there is no processing for these signals to stop; we will honor them if that changes."}</p>
<h2>{"10. Where information is stored and cross-border transfers"}</h2>
<p>{"We are a U.S. company, and personal information is stored in the United States."}</p>
<p>{"For individuals in mainland China, your information is transferred to the United States. The details required by Article 39 of the Personal Information Protection Law (PIPL) are:"}</p>
<table className="legal__table"><tbody><tr><th>{"Overseas recipient"}</th><td>{"Happy Global Inc., 1101 E Arapaho Rd, Suite 210, Richardson, TX 75081, USA"}</td></tr><tr><th>{"Contact"}</th><td><a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a></td></tr><tr><th>{"Purpose"}</th><td>{"Responding to inquiries, describing related services, entering into and performing service agreements"}</td></tr><tr><th>{"Method"}</th><td>{"Encrypted transmission to cloud services in the United States, where it is stored, reviewed and organized and used to contact you"}</td></tr><tr><th>{"Categories"}</th><td>{"The information in sections 3.1 and 3.3"}</td></tr><tr><th>{"Exercising your rights"}</th><td>{"Email the address above, or contact our representative in China (section 13)"}</td></tr></tbody></table>
<p>{"For inquiries received through email, WeChat, trade shows or social media, we make this Privacy Policy available to explain how personal information is collected, used and transferred. Where personal information collected in mainland China needs to be transferred to Happy Global Inc. in the United States, we will provide the required notice and obtain separate consent before the transfer, where required by applicable law. Consent may be obtained through an affirmative email or WeChat response or other appropriate means. Where separate consent is not legally required, we will still comply with applicable notification and data protection obligations. If the nature or volume of the information later requires a security assessment, standard contract or certification, we will complete it before the transfer."}</p>
<p>{"Privacy rules in the United States may differ from those in mainland China; we protect your information as described in section 12."}</p>
<h2>{"11. Retention"}</h2>
<ul className="legal__list"><li>{"Inquiries that do not lead to an engagement: 24 months after our last contact, then deleted or anonymized."}</li><li><b>{"Clients:"}</b>{" for the term of the engagement and any longer period the law requires."}</li><li><b>{"Server logs:"}</b>{" according to our hosting provider's settings, generally no more than 30 days."}</li></ul>
<p>{"In setting retention periods we consider legal record-keeping requirements and legal holds. We may anonymize information instead of deleting it, and we will not try to reidentify it. To find out how long we expect to keep information about you, contact us."}</p>
<h2>{"12. Security"}</h2>
<p>{"We use reasonable technical and organizational measures suited to the nature of the information and the risks, including access controls, encryption in transit, authentication, logging, vendor management, staff confidentiality obligations and incident response procedures. No internet transmission is completely secure, so we cannot guarantee absolute security."}</p>
<p>{"If a breach is likely to affect your rights, we will notify the competent authorities and, where required, you, as the law requires."}</p>
<h2>{"13. Your rights"}</h2>
<p>{"Depending on where you live and which law applies, you may have the following rights, and we are glad to help you exercise them."}</p>
<ul className="legal__list"><li><b>{"Know and access:"}</b>{" learn the categories, sources, purposes and recipient categories of the information we process, and get a copy."}</li><li><b>{"Correct:"}</b>{" correct or complete inaccurate or incomplete information."}</li><li><b>{"Delete:"}</b>{" ask us to delete your information, subject to legal exceptions."}</li><li><b>{"Portability:"}</b>{" where conditions are met, have your information transferred to another processor you designate."}</li><li><b>{"Restrict, refuse or withdraw consent:"}</b>{" withdrawal does not affect processing already carried out."}</li><li><b>{"Opt out of marketing:"}</b>{" unsubscribe at any time."}</li><li><b>{"Explanation:"}</b>{" ask us to explain this policy and our processing rules."}</li><li><b>{"Non-discrimination:"}</b>{" you will not be treated differently for exercising these rights."}</li><li><b>{"Appeal and complain:"}</b>{" appeal our decision or complain to the relevant authority."}</li></ul>
<p>{"How to ask: email "}<a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a>{" with a subject such as \"Privacy Request — Access\", \"Privacy Request — Deletion\", \"Unsubscribe\" or \"Privacy Rights Appeal\". Individuals in mainland China may also contact our representative below."}</p>
<p>{"Verification: before responding to an access, correction, deletion or portability request, we verify your identity using information you gave us before, usually your name, email address and company, and use it for no other purpose. An authorized agent must provide proof of authorization."}</p>
<p>{"Timing: we respond to requests from individuals in mainland China within 15 business days after verification, and to U.S. residents within the period their law requires (for example, 45 days under certain state laws, extendable where permitted)."}</p>
<p>{"Appeals: if we decline a request, we will explain why. You may appeal by email, including your original request, our response and why you think it was wrong; if we deny the appeal, we will tell you how to contact your state Attorney General or another relevant authority."}</p>
<p>{"Representative in China: under Article 53 of the PIPL, we have designated Xiuli Cong (丛秀丽) to handle personal information matters in mainland China: xiuli.cong@tjprog.com."}</p>
<h2>{"14. Additional information for U.S. residents"}</h2>
<p>{"U.S. state privacy laws apply only where their scope and thresholds are met, and some exclude individuals acting in a commercial capacity. Where an applicable state law gives you rights, we will honor them; as a matter of policy, we generally extend the rights in section 13 to other U.S. users too."}</p>
<table className="legal__table legal__table--wide"><thead><tr><th>{"Category"}</th><th>{"Examples"}</th><th>{"Source"}</th><th>{"Disclosed to"}</th></tr></thead><tbody><tr><th>{"Identifiers"}</th><td>{"Name, email, WeChat ID, IP address"}</td><td>{"You; our hosting provider"}</td><td>{"Service providers in section 7"}</td></tr><tr><th>{"Professional information"}</th><td>{"Company, product, job title"}</td><td>{"You"}</td><td>{"Service providers in section 7"}</td></tr><tr><th>{"Commercial information"}</th><td>{"Services of interest, engagement history"}</td><td>{"You"}</td><td>{"Service providers in section 7"}</td></tr><tr><th>{"Internet activity"}</th><td>{"Pages visited, referring URL, browser type"}</td><td>{"Our hosting provider"}</td><td>{"Our hosting provider"}</td></tr></tbody></table>
<p>{"We do not intentionally solicit sensitive personal information, protected classifications, biometric information, precise geolocation or individual profiles."}</p>
<p>{"California residents: in the past 12 months we have not sold or shared personal information. To make a request, email "}<a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a>{". We do not disclose personal information to third parties for their direct marketing, and we offer no financial incentive programs."}</p>
<h2>{"15. Children"}</h2>
<p>{"The Site is intended for adult business professionals, not for individuals under 18. We do not knowingly collect personal information from minors, and we do not sell or share it. If we learn we have collected a minor's information, we will delete it promptly; if you believe this has happened, please tell us."}</p>
<h2>{"16. Other websites and social media"}</h2>
<p>{"Other websites linked from the Site, and our social media pages, are run by their own platforms or companies and governed by their privacy policies. Anything you post publicly on social media may be seen by anyone and collected by the platform and others; please do not post confidential company information there."}</p>
<h2>{"17. Changes to this policy"}</h2>
<p>{"We may update this policy and will change the \"Last updated\" date on this page. We will highlight material changes on the Site, and give additional notice or seek consent again where the law requires."}</p>
<h2>{"18. Contact us and language"}</h2>
<table className="legal__table"><tbody><tr><th>{"Email"}</th><td><a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a></td></tr><tr><th>{"Representative in China"}</th><td>{"Xiuli Cong (丛秀丽) · xiuli.cong@tjprog.com"}</td></tr></tbody></table>
<p>{"This policy is available in Chinese and English. For individuals in mainland China, the Chinese version prevails if the two differ; for everyone else, the English version prevails."}</p>
</article></div></section>
</main>
</>);
}
