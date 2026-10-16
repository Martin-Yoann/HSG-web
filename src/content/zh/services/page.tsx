import { SiteImage } from '@/components/SiteImage';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "服务 · Happy Global Service",
  "description": "销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工。六大板块，由 Happy Global Inc. 统一承接。",
  "alternates": {
    "canonical": "/services/",
    "languages": {
      "zh-CN": "/services/",
      "en": "/en/services/"
    }
  },
  "openGraph": {
    "title": "服务 · Happy Global Service",
    "description": "销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工。六大板块，由 Happy Global Inc. 统一承接。",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "/assets/img/opc-launch.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。"}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/opc-launch.jpg" alt="" width="1198" height="747" loading="eager" decoding="async" style={{"objectPosition":"center 22%"} as CSSProperties} />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"服务"}</div>
<h1><span className="cl">{"六大服务板块，"}</span><span className="cl">{"一个责任主体"}</span></h1>
<p>{"渠道、内容、招聘、财税与架构规划、跨境物流与仓储、人力资源运营与合规用工，均由 Happy Global Inc. 统一承接。"}</p>
</div>
</section>
<section className="section" id="services"><div className="wrap">
<div className="kicker">{"服务"}</div>
<h2 className="title"><span className="cl">{"六大服务板块，"}</span><span className="cl">{"一个责任主体"}</span></h2>
<p className="lead">{"渠道、内容、招聘、财税与架构规划、跨境物流与仓储、人力资源运营与合规用工，均由 Happy Global Inc. 统一承接。"}</p>
<div className="sgrid">
<Link className="scard rv" style={{"--i":"0"} as CSSProperties} href="/services/channel/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"渠道"}</span><h3>{"销售渠道服务"}</h3><p>{"协助品牌进入美国线下与线上销售渠道。渠道准入要求、标签与合规、定价体系与谈判节奏，均以自有品牌的实践为基础。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"1"} as CSSProperties} href="/services/content/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"营销"}</span><h3>{"内容与本地化营销"}</h3><p>{"面向美国市场的品牌内容制作与社交媒体运营：展会影像、品牌与产品视频、双语内容，以及美国本地社交账号的代运营。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"2"} as CSSProperties} href="/services/recruiting/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"招聘"}</span><h3>{"招聘与猎头"}</h3><p>{"为进入美国市场的企业寻访高管与专业人才，并提供薪酬对标、组织设计等人才咨询。我们首先以此建立了自己的美国团队。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"3"} as CSSProperties} href="/services/finance-compliance/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"财税"}</span><h3>{"财税与上市架构规划"}</h3><p>{"从一开始把在美业务的财税、股权与上市架构规划好，公司设立、记账报税与银行开户等合规事务随后推进。专业意见由合作的持牌会计师、律师出具，我们统筹推进至落地。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"4"} as CSSProperties} href="/services/warehousing/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"物流"}</span><h3>{"跨境物流与仓储履约"}</h3><p>{"从中国工厂到美国门店一条线衔接：跨境头程与清关对接、四地仓储履约、干线运输与 B2B 配送。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"5"} as CSSProperties} href="/services/hr-ops/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"用工"}</span><h3>{"人力资源运营与合规用工"}</h3><p>{"雇佣方案（EOR／PEO）、薪酬发放、入职至离职的本地合规，以及关键人员赴美的协同。流程源于我们自身美国团队的运营实践。"}</p><span className="scard__more">{"了解更多 →"}</span></Link>
</div>
</div></section>
<section className="section" id="fit"><div className="wrap fit">
<div>
<div className="kicker">{"服务对象"}</div>
<h2 className="title rv">{"我们服务的品牌企业"}</h2>
<p className="lead">{"拥有自主产品与品牌价值，计划在美国市场长期经营的企业。规模并非首要条件，长期投入的决心才是。"}</p>
<div className="fit__points"><div className="rv" style={{"--i":"0"} as CSSProperties}><b>{"自主产品与品牌"}</b><span>{"以自有品牌面向市场，而非仅从事代工。"}</span></div><div className="rv" style={{"--i":"1"} as CSSProperties}><b>{"长期经营意愿"}</b><span>{"愿意在美国设立主体、建立团队，逐步建立渠道。"}</span></div><div className="rv" style={{"--i":"2"} as CSSProperties}><b>{"需要本地执行力量"}</b><span>{"不止需要建议，更需要在美国落地执行的团队。"}</span></div></div>
</div>
<div className="fit__aside"><h3><span className="cl">{"尚在评估阶段？"}</span></h3><p>{"欢迎与我们联系。我们将基于贵司的产品与目标，给出初步判断与建议。"}</p><Link className="btn" href="/contact/">{"联系我们"}</Link></div>
</div></section>
<section className="section"><div className="wrap"><div className="boundary"><h3>{"服务说明"}</h3><p>{"本网站及服务介绍仅为服务方向说明，不构成要约或承诺，也不构成法律、税务或合规意见。各项服务可按需组合、分阶段开展，范围、费用与责任以双方签署的书面协议为准；法律、税务、证券、移民、清关、产品认证等专业事项由持牌专业机构办理；仓点、运输时效与费用以具体方案为准；我们不对渠道准入或商业结果作出承诺。"}</p></div></div></section>
</main>
</>);
}
