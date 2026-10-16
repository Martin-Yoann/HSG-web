import { SiteImage } from '@/components/SiteImage';
import { VideoPlaceholder } from '@/components/VideoPlaceholder';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "销售渠道服务 · Happy Global Service",
  "description": "协助品牌进入美国线下与线上销售渠道。渠道准入要求、标签与合规、定价体系与谈判节奏，均以自有品牌的实践为基础。",
  "alternates": {
    "canonical": "/services/channel/",
    "languages": {
      "zh-CN": "/services/channel/",
      "en": "/en/services/channel/"
    }
  },
  "openGraph": {
    "title": "销售渠道服务 · Happy Global Service",
    "description": "协助品牌进入美国线下与线上销售渠道。渠道准入要求、标签与合规、定价体系与谈判节奏，均以自有品牌的实践为基础。",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "/assets/img/field-booth.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"协助品牌进入美国线下与线上销售渠道。渠道准入要求、标签与合规、定价体系与谈判节奏，均以自有品牌的实践为基础。","name":"销售渠道服务","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/field-booth.jpg" alt="" width="1400" height="933" loading="eager" decoding="async" style={{"objectPosition":"center 35%"} as CSSProperties} />
<div className="wrap">
<div className="crumbs"><Link href="/services/">{"服务"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"服务 · 销售渠道服务"}</div>
<h1>{"销售渠道服务"}</h1>
<p>{"渠道准入是品牌进入美国市场的核心环节。我们以自有品牌完成了美国线下与线上主流渠道的准入过程，并以此为基础为品牌企业提供服务。"}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="服务板块"><Link scroll={false} href="/services/channel/" aria-current="page">{"销售渠道服务"}</Link><Link scroll={false} href="/services/content/">{"内容与本地化营销"}</Link><Link scroll={false} href="/services/recruiting/">{"招聘与猎头"}</Link><Link scroll={false} href="/services/finance-compliance/">{"财税与架构"}</Link><Link scroll={false} href="/services/warehousing/">{"物流与仓储"}</Link><Link scroll={false} href="/services/hr-ops/">{"人力资源与用工"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"适用场景"}</h2><ol className="numbered"><li>{"美国主流渠道普遍要求供应商在本地具备可追溯的责任主体。"}</li><li>{"标签、成分与包装须符合美国规范，调整周期较长。"}</li><li>{"渠道毛利结构与促销节奏直接影响报价与谈判。"}</li></ol></section>
<section><h2>{"服务内容"}</h2><ul className="bullets"><li>{"渠道评估与准入路径规划"}</li><li>{"合规与标签调整的路径与节奏（正式审核由持牌机构出具）"}</li><li>{"基于自有分销关系对接线上与线下渠道"}</li></ul></section>
<figure className="video video--inline"><VideoPlaceholder poster="/assets/img/poster-opc.jpg" english={false} /><figcaption><small>{"企业影像 · Open Platform Conference"}</small><b>{"渠道、合规与品牌企业的共同对话"}</b></figcaption></figure>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/field-sampling.jpg" alt="销售渠道服务" width="1400" height="933" loading="lazy" decoding="async" /><SiteImage src="/assets/img/field-expo.jpg" alt="销售渠道服务" width="933" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/field-tent.jpg" alt="销售渠道服务" width="1400" height="933" loading="lazy" decoding="async" /></div><p className="note">{"渠道之前，首先是消费者。自有品牌在美国市场一线积累的理解，是渠道判断的依据。"}</p></section>
</div>
<aside className="aside">
<h2>{"联系我们"}</h2>
<p>{"请说明贵司的需求，我们将安排相应板块的负责人与您沟通。"}</p>
<Link className="btn btn--block" href="/contact/">{"联系我们"}</Link>
<div className="aside__entity">{"服务主体：Happy Global Inc."}</div>
<SiteImage src="/assets/img/svc-sharing.jpg" alt="达拉斯办公室内部培训" width="1400" height="1050" loading="lazy" decoding="async" />
</aside>
</div>
</div>
</main>
</>);
}
