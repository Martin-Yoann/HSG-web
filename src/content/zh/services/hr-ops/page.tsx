import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "人力资源运营与合规用工 · Happy Global Service",
  "description": "雇佣方案与薪酬福利（由第三方服务商提供，我们负责梳理与对接）、入职至离职的本地合规，以及关键人员赴美的行前与抵美安排。流程源于我们自身美国团队的运营实践。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/services/hr-ops/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/hr-ops/",
      "en": "https://happyglobalinc.com/en/services/hr-ops/",
      "x-default": "https://happyglobalinc.com/services/hr-ops/"
    }
  },
  "openGraph": {
    "title": "人力资源运营与合规用工 · Happy Global Service",
    "description": "雇佣方案与薪酬福利（由第三方服务商提供，我们负责梳理与对接）、入职至离职的本地合规，以及关键人员赴美的行前与抵美安排。流程源于我们自身美国团队的运营实践。",
    "url": "https://happyglobalinc.com/services/hr-ops/",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/hr-banner.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"雇佣方案与薪酬福利（由第三方服务商提供，我们负责梳理与对接）、入职至离职的本地合规，以及关键人员赴美的行前与抵美安排。流程源于我们自身美国团队的运营实践。","name":"人力资源运营与合规用工","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/hr-banner.jpg" alt="" width="1600" height="615" loading="eager" decoding="async" style={{"objectPosition":"right 30%"} as CSSProperties} />
<div className="wrap">
<div className="crumbs"><Link href="/services/">{"服务"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"服务 · 人力资源与用工"}</div>
<h1>{"人力资源运营与合规用工"}</h1>
<p>{"在美国的团队规模或许不大，但人力资源事务并不因此减少。从首位美国员工如何合规雇佣，到贵司关键人员从中国赴美，我们以自身美国团队的运营实践为基础，提供人力资源运营支持。"}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="服务板块"><Link scroll={false} href="/services/channel/">{"销售渠道服务"}</Link><Link scroll={false} href="/services/content/">{"内容与本地化营销"}</Link><Link scroll={false} href="/services/recruiting/">{"招聘与猎头"}</Link><Link scroll={false} href="/services/finance-compliance/">{"财税与架构"}</Link><Link scroll={false} href="/services/warehousing/">{"物流与仓储"}</Link><Link scroll={false} href="/services/hr-ops/" aria-current="page">{"人力资源与用工"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"适用场景"}</h2><ol className="numbered"><li>{"尚未设立美国实体，或首批员工的雇佣、薪酬与福利需要规范起步。"}</li><li>{"各州法规存在差异，入职、在职与离职的合规事项需持续关注。"}</li><li>{"贵司关键人员从中国赴美，签证与抵美后的人事安排需要衔接。"}</li></ol></section>
<section><h2>{"服务内容"}</h2><ul className="bullets"><li>{"雇佣方案：尚无美国实体时，可通过第三方名义雇主（EOR）服务商先行雇佣；已有实体的，可评估第三方 PEO。雇佣关系及相关服务由持牌或登记的服务商依其协议提供，我们负责需求梳理、比选与对接"}</li><li>{"薪酬与福利：由第三方薪酬服务商及持牌保险机构提供，我们负责需求梳理与对接"}</li><li>{"入职、在职与离职：入职流程与员工档案、员工手册与合规提示、离职流程衔接，美国员工的日常对接"}</li><li>{"人员赴美：行前安排（行程、住房与入学信息）、按律师清单协助收集材料，以及抵美后的入职与人事衔接。签证事务由贵司直接委托的美国持牌移民律师办理，我们可协助介绍"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-hr-handshake.jpg" alt="人力资源运营与合规用工" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"right center"} as CSSProperties} /><SiteImage src="/assets/img/stock-hr-interview.jpg" alt="人力资源运营与合规用工" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"38% center"} as CSSProperties} /><SiteImage src="/assets/img/stock-hr-team.jpg" alt="人力资源运营与合规用工" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /></div><p className="note">{"图片为示意。"}</p></section>
</div>
<aside className="aside">
<h2>{"联系我们"}</h2>
<p>{"请说明贵司的需求，我们将安排相应板块的负责人与您沟通。"}</p>
<Link className="btn btn--block" href="/contact/">{"联系我们"}</Link>
<div className="aside__entity">{"服务主体：Happy Global Inc."}</div>
<SiteImage src="/assets/img/hero-lobby.jpg" alt="达拉斯办公室内部培训" width="1920" height="1080" loading="lazy" decoding="async" />
</aside>
</div>
</div>
</main>
</>);
}
