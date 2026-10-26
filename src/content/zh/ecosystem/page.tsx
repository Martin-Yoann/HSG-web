import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Happy Global 体系 · Happy Global Service",
  "description": "Happy Global Service 是 Happy Global Inc. 的服务品牌，也是服务的统一窗口；Glimboo、PulseOn 两个成员品牌，以及产品与分销站 happyglobals.com。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/ecosystem/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/ecosystem/",
      "en": "https://happyglobalinc.com/en/ecosystem/",
      "x-default": "https://happyglobalinc.com/ecosystem/"
    }
  },
  "openGraph": {
    "title": "Happy Global 体系 · Happy Global Service",
    "description": "Happy Global Service 是 Happy Global Inc. 的服务品牌，也是服务的统一窗口；Glimboo、PulseOn 两个成员品牌，以及产品与分销站 happyglobals.com。",
    "url": "https://happyglobalinc.com/ecosystem/",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/hero-hq-roof.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。","url":"https://happyglobalinc.com/"}]} />
<main id="main">
<section className="page-hero">
<SiteImage src="/assets/img/hero-dallas.jpg" alt="" width="1500" height="844" loading="eager" decoding="async" />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"Happy Global 体系"}</div>
<h1><span className="cl">{"服务、"}</span><span className="cl">{"品牌与专项能力，"}</span><span className="cl">{"同属一个体系"}</span></h1>
<p>{"Happy Global Service 是 Happy Global Inc. 的服务品牌，为企业提供进入美国市场的全链路服务；服务由 Happy Global Inc. 签约。服务能力源于实际经营：自有品牌、产品分销、招聘与内容制作，各有独立团队与站点。"}</p>
</div>
</section>
<section className="section section--soft"><div className="wrap">
<div className="eco">
<div className="hub"><small>{"统一服务窗口"}</small><h2>{"Happy Global Service"}</h2><p>{"本站。六大服务板块由此进入，由 Happy Global Inc. 统一签约。"}</p><Link href="/">{"返回首页 →"}</Link></div>
<a className="etile rv" style={{"--i":"0"} as CSSProperties} href="https://glimboo.com" rel="noopener" target="_blank"><SiteImage src="/assets/img/eco-glimboo.jpg" alt="Glimboo" width="1400" height="687" loading="lazy" decoding="async" /><div><h3><i>{"G"}</i>{"Glimboo"}</h3><p>{"成员品牌。音乐棒棒糖与「星际熊」系列。"}</p><span>{"前往 →"}</span></div></a><a className="etile rv" style={{"--i":"1"} as CSSProperties} href="https://pulseonworld.com/" rel="noopener" target="_blank"><SiteImage src="/assets/img/eco-pulseon.jpg" alt="PulseOn" width="1400" height="933" loading="lazy" decoding="async" style={{"objectPosition":"center 58%"} as CSSProperties} /><div><h3><i>{"P"}</i>{"PulseOn"}</h3><p>{"成员品牌。功能饮料，立足达拉斯。"}</p><span>{"前往 →"}</span></div></a><a className="etile rv" style={{"--i":"2"} as CSSProperties} href="https://happyglobals.com" rel="noopener" target="_blank"><SiteImage src="/assets/img/base-office-sign.jpg" alt="happyglobals.com" width="1050" height="1400" loading="lazy" decoding="async" /><div><h3><i>{"HG"}</i>{"happyglobals.com"}</h3><p>{"产品与分销站。自有品牌在美国的线上与线下渠道。"}</p><span>{"前往 →"}</span></div></a>
</div>
<div style={{"marginTop":"56px"} as CSSProperties}><div className="kicker">{"体系说明"}</div><h2 className="title title--sm"><span className="cl">{"服务为底座，"}</span><span className="cl">{"品牌由此生长"}</span></h2></div>
<div className="explain"><div><h3>{"服务窗口"}</h3><p>{"即本站。六大服务板块统一由此进入，由 Happy Global Inc. 签约。"}</p></div><div><h3>{"自有经营"}</h3><p>{"产品分销与两个自有品牌，是服务能力的来源，也是可验证的实践。"}</p></div><div><h3>{"其他网站"}</h3><p>{"Happy Global 体系由 Happy Global Inc. 与多家合作公司组成，各公司均为独立法人。本页所列网站由各自公司运营，适用其各自的条款与隐私政策。"}</p></div></div>
</div></section>
</main>
</>);
}
