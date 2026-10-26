import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "跨境物流与仓储履约 · Happy Global Service",
  "description": "从中国工厂到美国门店一条线衔接：跨境头程与清关衔接、达拉斯仓与协同仓点的仓储履约、干线与 B2B 到货统筹；运输与清关由持牌机构执行。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/services/warehousing/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/warehousing/",
      "en": "https://happyglobalinc.com/en/services/warehousing/",
      "x-default": "https://happyglobalinc.com/services/warehousing/"
    }
  },
  "openGraph": {
    "title": "跨境物流与仓储履约 · Happy Global Service",
    "description": "从中国工厂到美国门店一条线衔接：跨境头程与清关衔接、达拉斯仓与协同仓点的仓储履约、干线与 B2B 到货统筹；运输与清关由持牌机构执行。",
    "url": "https://happyglobalinc.com/services/warehousing/",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/stock-warehouse.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"从中国工厂到美国门店一条线衔接：跨境头程与清关衔接、达拉斯仓与协同仓点的仓储履约、干线与 B2B 到货统筹；运输与清关由持牌机构执行。","name":"跨境物流与仓储履约","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/stock-warehouse.jpg" alt="" width="1500" height="1000" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/services/">{"服务"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"服务 · 物流与仓储"}</div>
<h1>{"跨境物流与仓储履约"}</h1>
<p>{"货物从中国工厂到美国门店和消费者手中，要经过头程、清关、入库、干线与派送多个环节。我们以达拉斯仓（由 Happy Global Logistics 运营）为中心，洛杉矶、芝加哥、凤凰城仓点协同，四地均可履约，把这些环节一条线衔接起来。跨境头程的海运、空运由持牌货代承运，清关由持牌报关行办理，美国干线与派送由持牌承运商执行；我们负责统筹衔接。"}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="服务板块"><Link scroll={false} href="/services/channel/">{"销售渠道服务"}</Link><Link scroll={false} href="/services/content/">{"内容与本地化营销"}</Link><Link scroll={false} href="/services/recruiting/">{"招聘与猎头"}</Link><Link scroll={false} href="/services/finance-compliance/">{"财税与架构"}</Link><Link scroll={false} href="/services/warehousing/" aria-current="page">{"物流与仓储"}</Link><Link scroll={false} href="/services/hr-ops/">{"人力资源与用工"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"适用场景"}</h2><ol className="numbered"><li>{"美国线下渠道的货多由分销商自行进口，品牌直接做 B2B，需要自己衔接头程、清关与干线。"}</li><li>{"零售渠道对贴标、打托、预约送货有严格要求，不符合将被拒收或扣款。"}</li><li>{"多件订单与退货只靠单一仓处理，运费与时效难以兼顾。"}</li></ol></section>
<section><h2>{"服务内容"}</h2><ul className="bullets"><li>{"跨境头程衔接：海运、空运由持牌货代承运，清关由持牌报关行办理"}</li><li>{"就近仓点履约（达拉斯仓，洛杉矶、芝加哥、凤凰城协同仓点）：入库、贴标、拣选、合单发货与退货接收"}</li><li>{"美国干线与派送（整车、零担）由持牌承运商执行，我们按渠道要求统筹 B2B 到货"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/stock-wh-aisle.jpg" alt="跨境物流与仓储履约" width="1400" height="933" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-wh-forklift.jpg" alt="跨境物流与仓储履约" width="1400" height="933" loading="lazy" decoding="async" /><SiteImage src="/assets/img/stock-wh-pallets.jpg" alt="跨境物流与仓储履约" width="1400" height="933" loading="lazy" decoding="async" /></div><p className="note">{"图片为示意。各仓点可承接的业务类型、运输时效与费用，以具体方案为准。"}</p></section>
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
