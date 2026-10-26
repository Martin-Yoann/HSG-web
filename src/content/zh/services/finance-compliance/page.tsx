import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "财税与上市架构规划 · Happy Global Service",
  "description": "从一开始把在美业务的财税、股权与上市架构规划好，公司设立、记账报税与银行开户等合规事务随后推进。专业意见由合作的持牌会计师、律师出具，我们统筹推进至落地。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/services/finance-compliance/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/finance-compliance/",
      "en": "https://happyglobalinc.com/en/services/finance-compliance/",
      "x-default": "https://happyglobalinc.com/services/finance-compliance/"
    }
  },
  "openGraph": {
    "title": "财税与上市架构规划 · Happy Global Service",
    "description": "从一开始把在美业务的财税、股权与上市架构规划好，公司设立、记账报税与银行开户等合规事务随后推进。专业意见由合作的持牌会计师、律师出具，我们统筹推进至落地。",
    "url": "https://happyglobalinc.com/services/finance-compliance/",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/stock-desk.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"从一开始把在美业务的财税、股权与上市架构规划好，公司设立、记账报税与银行开户等合规事务随后推进。专业意见由合作的持牌会计师、律师出具，我们统筹推进至落地。","name":"财税与上市架构规划","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/stock-desk.jpg" alt="" width="1400" height="788" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/services/">{"服务"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"服务 · 财税与架构"}</div>
<h1>{"财税与上市架构规划"}</h1>
<p>{"财税与股权架构越早规划，后续调整成本越低。我们与合作的持牌会计师、律师一起，先做财税规划与跨境架构设计、股权与上市架构的前期规划，再推进公司设立、记账报税与银行开户。我们不替代律师与会计师，专业意见由其出具。"}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="服务板块"><Link scroll={false} href="/services/channel/">{"销售渠道服务"}</Link><Link scroll={false} href="/services/content/">{"内容与本地化营销"}</Link><Link scroll={false} href="/services/recruiting/">{"招聘与猎头"}</Link><Link scroll={false} href="/services/finance-compliance/" aria-current="page">{"财税与架构"}</Link><Link scroll={false} href="/services/warehousing/">{"物流与仓储"}</Link><Link scroll={false} href="/services/hr-ops/">{"人力资源与用工"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"适用场景"}</h2><ol className="numbered"><li>{"在美业务的主体与跨境架构，影响税负、资金往来与后续融资。"}</li><li>{"计划引入投资或未来上市的企业，股权结构需要提前规划。"}</li><li>{"注册州、主体类型、银行开户与各级申报，环节多、周期长。"}</li></ol></section>
<section><h2>{"服务内容"}</h2><ul className="bullets"><li>{"财税规划与跨境架构设计"}</li><li>{"股权与上市架构的前期规划（与持牌律师、会计师协同）"}</li><li>{"公司设立、记账报税、银行开户等合规事务（由持牌机构执行，开户以银行审核为准）"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-fin-advisors.jpg" alt="财税与上市架构规划" width="1400" height="788" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-fin-taxform.jpg" alt="财税与上市架构规划" width="1400" height="933" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><SiteImage src="/assets/img/stock-fin-review.jpg" alt="财税与上市架构规划" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"35% center"} as CSSProperties} /></div><p className="note">{"图片为示意。"}</p></section>
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
