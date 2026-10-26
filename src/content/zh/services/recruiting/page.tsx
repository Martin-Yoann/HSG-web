import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "招聘与猎头 · Happy Global Service",
  "description": "为进入美国市场的企业寻访高管与专业人才，并提供薪酬对标、组织设计等人才咨询。我们首先以此建立了自己的美国团队。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/services/recruiting/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/recruiting/",
      "en": "https://happyglobalinc.com/en/services/recruiting/",
      "x-default": "https://happyglobalinc.com/services/recruiting/"
    }
  },
  "openGraph": {
    "title": "招聘与猎头 · Happy Global Service",
    "description": "为进入美国市场的企业寻访高管与专业人才，并提供薪酬对标、组织设计等人才咨询。我们首先以此建立了自己的美国团队。",
    "url": "https://happyglobalinc.com/services/recruiting/",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/hero-lobby.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"为进入美国市场的企业寻访高管与专业人才，并提供薪酬对标、组织设计等人才咨询。我们首先以此建立了自己的美国团队。","name":"招聘与猎头","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/hero-lobby.jpg" alt="" width="1920" height="1080" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/services/">{"服务"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"服务 · 招聘与猎头"}</div>
<h1>{"招聘与猎头"}</h1>
<p>{"在美国招聘的难点，不在于发布职位，而在于判断人选是否可靠。我们以同一套方法建立了自己的达拉斯团队，现已为品牌企业提供服务。"}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="服务板块"><Link scroll={false} href="/services/channel/">{"销售渠道服务"}</Link><Link scroll={false} href="/services/content/">{"内容与本地化营销"}</Link><Link scroll={false} href="/services/recruiting/" aria-current="page">{"招聘与猎头"}</Link><Link scroll={false} href="/services/finance-compliance/">{"财税与架构"}</Link><Link scroll={false} href="/services/warehousing/">{"物流与仓储"}</Link><Link scroll={false} href="/services/hr-ops/">{"人力资源与用工"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"适用场景"}</h2><ol className="numbered"><li>{"首批美国高管与核心岗位，直接决定业务能否在美国落地。"}</li><li>{"对美国薪酬水平、人才市场与招聘渠道不熟悉，影响岗位设计与人选质量。"}</li><li>{"跨文化面试判断难度大，错配成本高。"}</li></ol></section>
<section><h2>{"服务内容"}</h2><ul className="bullets"><li>{"高管寻访：董事、C-level 与副总裁级岗位的保密寻访与深度评估（背景调查经候选人授权、由合规第三方执行）"}</li><li>{"专业人才招聘：高级经理至总监级及专业岗位的多渠道寻访与能力评估"}</li><li>{"人才咨询：薪酬对标与职级设计、组织架构、人才市场洞察"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/eco-hrs.jpg" alt="招聘与猎头" width="1400" height="700" loading="lazy" decoding="async" /><SiteImage src="/assets/img/hero-lobby.jpg" alt="招聘与猎头" width="1920" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-mascot.jpg" alt="招聘与猎头" width="1328" height="1050" loading="lazy" decoding="async" /></div><p className="note">{"第一张图片为示意。"}</p></section>
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
