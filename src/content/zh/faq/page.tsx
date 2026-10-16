import { SiteImage } from '@/components/SiteImage';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "常见问题 · Happy Global Service",
  "description": "关于 Happy Global Service 的常见问题：服务范围、服务对象、服务主体与专业意见边界。",
  "alternates": {
    "canonical": "/faq/",
    "languages": {
      "zh-CN": "/faq/",
      "en": "/en/faq/"
    }
  },
  "openGraph": {
    "title": "常见问题 · Happy Global Service",
    "description": "关于 Happy Global Service 的常见问题：服务范围、服务对象、服务主体与专业意见边界。",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "/assets/img/hero-lobby.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。"},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"Happy Global Service 是 Happy Global Inc. 的服务品牌。各项服务由 Happy Global Inc. 签约、对接与交付。"},"name":"Happy Global Service 和 Happy Global Inc. 是什么关系？"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"面向进入美国市场的品牌企业，提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工六大板块的服务。总部位于美国德克萨斯州达拉斯，在洛杉矶设有办事处，服务由 Happy Global Inc. 统一承接。"},"name":"Happy Global Service 提供哪些服务？"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"不是。我们在达拉斯设有总部、内容中心与研发实验室，在洛杉矶设有办事处，四地仓点可就近履约，并运营自有品牌。各项服务均由自有团队在美国执行。"},"name":"你们是咨询公司吗？"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"拥有自主产品与品牌价值、计划在美国市场长期经营的企业。规模并非首要条件。"},"name":"你们主要服务什么样的企业？"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"可以。多数企业在设立美国主体之前即与我们接触，我们可就先后顺序提供建议；需要先行雇佣美国员工的，可评估名义雇主（EOR）方式。"},"name":"尚未在美国设立公司，是否可以沟通？"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"不能。我们提供渠道准入的评估、准备、对接与跟进，准入决定权在渠道方。"},"name":"能否保证进入特定零售渠道？"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"法律、税务、证券与移民意见由持牌专业机构出具。我们对接已合作的律师与会计师，并协调推进至完成。"},"name":"能否提供法律或税务意见？"},{"@type":"Question","acceptedAnswer":{"@type":"Answer","text":"支持。美国团队在当地执行，中国团队可直接以中文对接贵司总部。"},"name":"支持中英文沟通吗？"}]}]} />
<main id="main">
<section className="page-hero">
<SiteImage src="/assets/img/hero-lobby.jpg" alt="" width="1920" height="1080" loading="eager" decoding="async" />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"常见问题"}</div>
<h1>{"常见问题"}</h1>
</div>
</section>
<section className="section section--soft"><div className="wrap">
<div className="faq"><details open><summary>{"Happy Global Service 和 Happy Global Inc. 是什么关系？"}</summary><p>{"Happy Global Service 是 Happy Global Inc. 的服务品牌。各项服务由 Happy Global Inc. 签约、对接与交付。"}</p></details><details><summary>{"Happy Global Service 提供哪些服务？"}</summary><p>{"面向进入美国市场的品牌企业，提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工六大板块的服务。总部位于美国德克萨斯州达拉斯，在洛杉矶设有办事处，服务由 Happy Global Inc. 统一承接。"}</p></details><details><summary>{"你们是咨询公司吗？"}</summary><p>{"不是。我们在达拉斯设有总部、内容中心与研发实验室，在洛杉矶设有办事处，四地仓点可就近履约，并运营自有品牌。各项服务均由自有团队在美国执行。"}</p></details><details><summary>{"你们主要服务什么样的企业？"}</summary><p>{"拥有自主产品与品牌价值、计划在美国市场长期经营的企业。规模并非首要条件。"}</p></details><details><summary>{"尚未在美国设立公司，是否可以沟通？"}</summary><p>{"可以。多数企业在设立美国主体之前即与我们接触，我们可就先后顺序提供建议；需要先行雇佣美国员工的，可评估名义雇主（EOR）方式。"}</p></details><details><summary>{"能否保证进入特定零售渠道？"}</summary><p>{"不能。我们提供渠道准入的评估、准备、对接与跟进，准入决定权在渠道方。"}</p></details><details><summary>{"能否提供法律或税务意见？"}</summary><p>{"法律、税务、证券与移民意见由持牌专业机构出具。我们对接已合作的律师与会计师，并协调推进至完成。"}</p></details><details><summary>{"支持中英文沟通吗？"}</summary><p>{"支持。美国团队在当地执行，中国团队可直接以中文对接贵司总部。"}</p></details></div>
<p style={{"marginTop":"32px"} as CSSProperties}><Link className="btn" href="/contact/">{"联系我们"}</Link></p>
</div></section>
</main>
</>);
}
