import { SiteImage } from '@/components/SiteImage';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "人力资源运营与合规用工 · Happy Global Service",
  "description": "雇佣方案（EOR／PEO）、薪酬发放、入职至离职的本地合规，以及关键人员赴美的协同。流程源于我们自身美国团队的运营实践。",
  "alternates": {
    "canonical": "/services/hr-ops/",
    "languages": {
      "zh-CN": "/services/hr-ops/",
      "en": "/en/services/hr-ops/"
    }
  },
  "openGraph": {
    "title": "人力资源运营与合规用工 · Happy Global Service",
    "description": "雇佣方案（EOR／PEO）、薪酬发放、入职至离职的本地合规，以及关键人员赴美的协同。流程源于我们自身美国团队的运营实践。",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "/assets/img/hr-banner.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"雇佣方案（EOR／PEO）、薪酬发放、入职至离职的本地合规，以及关键人员赴美的协同。流程源于我们自身美国团队的运营实践。","name":"人力资源运营与合规用工","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
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
<section><h2>{"服务内容"}</h2><ul className="bullets"><li>{"雇佣方案：尚无美国实体时，可通过名义雇主（EOR）方式先行雇佣；已有实体，可评估 PEO（协同持牌服务机构）"}</li><li>{"薪酬与福利：薪资计算与发放、法定申报、福利与假期管理（协同持牌薪酬与福利服务机构）"}</li><li>{"入职、在职与离职：入职流程与员工档案、员工手册与合规提示、离职流程衔接，美国员工的日常对接"}</li><li>{"人员赴美：关键人员从中国赴美的前期梳理、材料协调与抵美后的人事衔接（签证申请由合作持牌移民律师办理）"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-paperwork.jpg" alt="人力资源运营与合规用工" width="1400" height="933" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-folders.jpg" alt="人力资源运营与合规用工" width="1400" height="760" loading="lazy" decoding="async" /><SiteImage src="/assets/img/culture-foodbank.jpg" alt="人力资源运营与合规用工" width="1400" height="1050" loading="lazy" decoding="async" /></div></section>
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
