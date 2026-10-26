import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "内容与本地化营销 · Happy Global Service",
  "description": "面向美国市场的品牌内容制作与社交媒体运营：展会影像、品牌与产品视频、双语内容，以及美国本地社交账号的代运营。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/services/content/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/services/content/",
      "en": "https://happyglobalinc.com/en/services/content/",
      "x-default": "https://happyglobalinc.com/services/content/"
    }
  },
  "openGraph": {
    "title": "内容与本地化营销 · Happy Global Service",
    "description": "面向美国市场的品牌内容制作与社交媒体运营：展会影像、品牌与产品视频、双语内容，以及美国本地社交账号的代运营。",
    "url": "https://happyglobalinc.com/services/content/",
    "type": "website",
    "locale": "zh_CN",
    "images": [
      {
        "url": "https://happyglobalinc.com/assets/img/base-office-sign.jpg"
      }
    ]
  }
};

export default function Page() {
  return (<>
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。","url":"https://happyglobalinc.com/"},{"@context":"https://schema.org","@type":"Service","areaServed":"US","description":"面向美国市场的品牌内容制作与社交媒体运营：展会影像、品牌与产品视频、双语内容，以及美国本地社交账号的代运营。","name":"内容与本地化营销","provider":{"@type":"Organization","name":"Happy Global Inc."}}]} />
<main id="main">
<section className="page-hero service-hero">
<SiteImage src="/assets/img/base-office-sign.jpg" alt="" width="1050" height="1400" loading="eager" decoding="async" />
<div className="wrap">
<div className="crumbs"><Link href="/services/">{"服务"}</Link>{" / "}</div>
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"服务 · 内容与本地化营销"}</div>
<h1>{"内容与本地化营销"}</h1>
<p>{"美国消费者与渠道首先通过内容认识品牌。依托达拉斯的内容中心（由 Happy Global Studio 运营），我们为品牌企业提供面向美国市场的内容制作与本地社交媒体运营，并为自有品牌持续产出内容。"}</p>
</div>
</section>
<div className="wrap">
<nav className="tabs" aria-label="服务板块"><Link scroll={false} href="/services/channel/">{"销售渠道服务"}</Link><Link scroll={false} href="/services/content/" aria-current="page">{"内容与本地化营销"}</Link><Link scroll={false} href="/services/recruiting/">{"招聘与猎头"}</Link><Link scroll={false} href="/services/finance-compliance/">{"财税与架构"}</Link><Link scroll={false} href="/services/warehousing/">{"物流与仓储"}</Link><Link scroll={false} href="/services/hr-ops/">{"人力资源与用工"}</Link></nav>
<div className="svc">
<div className="svc__main">
<section><h2>{"适用场景"}</h2><ol className="numbered"><li>{"面向中国市场制作的内容，往往难以直接触达美国受众。"}</li><li>{"展会投入可观，现场影像与后续传播常未被充分利用。"}</li><li>{"美国本地社交媒体的运营节奏与表达方式，与国内不同。"}</li></ol></section>
<section><h2>{"服务内容"}</h2><ul className="bullets"><li>{"展会现场拍摄与即时传播素材"}</li><li>{"品牌与产品视频、双语内容制作"}</li><li>{"美国本地社交媒体账号的代运营"}</li></ul></section>
<section><div className="mosaic mosaic--3" style={{"marginTop":"0"} as CSSProperties}><SiteImage src="/assets/img/yfcon-materials.jpg" alt="内容与本地化营销" width="1400" height="787" loading="lazy" decoding="async" style={{"objectPosition":"center 55%"} as CSSProperties} /><SiteImage src="/assets/img/field-yfcon-crowd.jpg" alt="内容与本地化营销" width="1400" height="812" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><SiteImage src="/assets/img/yfcon-wristband.jpg" alt="内容与本地化营销" width="1400" height="787" loading="lazy" decoding="async" style={{"objectPosition":"58% center"} as CSSProperties} /></div></section>
<section><h2>{"客户案例"}</h2><div className="ph">{"[客户案例经授权后陆续发布。]"}</div></section>
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
