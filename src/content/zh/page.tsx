import { AudiencePoint } from '@/components/AudiencePoint';
import { ServiceCarousel } from '@/components/ServiceCarousel';
import { DeferredVideo } from '@/components/DeferredVideo';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "Happy Global Service · 美国市场进入与本地经营服务 · 达拉斯",
  "description": "Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/",
      "en": "https://happyglobalinc.com/en/",
      "x-default": "https://happyglobalinc.com/"
    }
  },
  "openGraph": {
    "title": "Happy Global Service · 美国市场进入与本地经营服务 · 达拉斯",
    "description": "Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。",
    "url": "https://happyglobalinc.com/",
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
<section className="hero hero--video" aria-label="首屏">
<SiteImage src="/assets/img/hero-hq-front.jpg" alt="达拉斯总部" width="1920" height="1130" className="hero__poster" loading="eager" decoding="async" style={{"objectPosition":"78% 40%"} as CSSProperties} />
<video className="hero__video" muted loop playsInline preload="none" data-src="/assets/video/hero-loop.mp4" aria-hidden="true"></video>
<div className="wrap">
<div className="hero__copy">
<div className="hero__kicker rv" style={{"--i":"0"} as CSSProperties}>{"美国市场进入 · 本地经营服务"}</div>
<h1 className="rv" style={{"--i":"1"} as CSSProperties}><span className="cl">{"进入美国市场，"}</span><br />{"由"}<em>{"已在美国"}</em>{"的团队承接"}</h1>
<p className="hero__lead rv" style={{"--i":"2"} as CSSProperties}>{"Happy Global Service 是 Happy Global Inc. 的服务品牌，立足美国，为品牌企业提供市场进入与本地经营服务。总部位于达拉斯，在洛杉矶设有办事处，仓储以达拉斯仓（由 Happy Global Logistics 运营）为中心，洛杉矶、芝加哥、凤凰城仓点协同；团队覆盖美国与中国两地。我们在美国既运营自有品牌，也提供服务，品牌进入美国要走的路，我们已先行走过。"}</p>
<p className="hero__slogan rv" style={{"--i":"3"} as CSSProperties}>{"Happy Global，出海美国的靠谱伙伴。"}</p>
<div className="hero__ctas rv" style={{"--i":"4"} as CSSProperties}>
<Link className="btn" href="/contact/">{"联系我们"}</Link>
<Link className="btn btn--ghost" href="/ecosystem/">{"了解 Happy Global 体系"}</Link>
</div>
</div>
<div className="stats rv" style={{"--i":"3"} as CSSProperties}>
<div className="stat"><div className="stat__num">{"达拉斯总部"}</div><div className="stat__label stat__label--split"><span className="pt">{"洛杉矶办事处"}</span><span className="sep">{" · "}</span><span className="pt">{"达拉斯仓"}</span></div></div>
<div className="stat"><div className="stat__num">{"中美两地 "}<small>{"服务团队"}</small></div><div className="stat__split"><span>{"美国本土团队现场承接"}</span><i></i><span>{"中国团队同步协同"}</span></div></div>
<div className="stat"><div className="stat__num">{"自有品牌"}</div><div className="stat__label">{"Glimboo · PulseOn"}</div></div>
<div className="stat"><div className="stat__num">{"六大板块"}</div><div className="stat__label">{"由 Happy Global Inc. 统一签约"}</div></div>
<ul className="proof"><li>{"方案落地，实操执行"}</li><li>{"美国本地签约主体"}</li><li>{"中英双语团队"}</li></ul>
</div>
</div>
<a className="hero__scroll" href="#strip" aria-label="轮播"><span></span></a>
</section>
<section className="strip" id="strip" aria-label="轮播">
<div className="strip__track"><figure className="strip__item"><SiteImage src="/assets/img/hero-hq-roof.jpg" alt="达拉斯总部" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"达拉斯总部"}</figcaption></figure><figure className="strip__item"><SiteImage src="/assets/img/hero-dallas.jpg" alt="达拉斯" width="1500" height="844" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"达拉斯"}</figcaption></figure><figure className="strip__item"><SiteImage src="/assets/img/hero-lobby.jpg" alt="总部大堂" width="1920" height="1080" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"总部大堂"}</figcaption></figure><figure className="strip__item"><SiteImage src="/assets/img/base-office-sign.jpg" alt="办公室" width="1050" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"办公室"}</figcaption></figure><figure className="strip__item"><SiteImage src="/assets/img/base-merch-wall.jpg" alt="品牌陈列墙" width="1050" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"品牌陈列墙"}</figcaption></figure><figure className="strip__item"><SiteImage src="/assets/img/hero-hq-entrance.jpg" alt="总部入口" width="1768" height="1176" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"总部入口"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage src="/assets/img/hero-hq-roof.jpg" alt="" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"达拉斯总部"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage src="/assets/img/hero-dallas.jpg" alt="" width="1500" height="844" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"达拉斯"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage src="/assets/img/hero-lobby.jpg" alt="" width="1920" height="1080" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"总部大堂"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage src="/assets/img/base-office-sign.jpg" alt="" width="1050" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"办公室"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage src="/assets/img/base-merch-wall.jpg" alt="" width="1050" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"品牌陈列墙"}</figcaption></figure><figure className="strip__item" aria-hidden="true"><SiteImage src="/assets/img/hero-hq-entrance.jpg" alt="" width="1768" height="1176" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} sizes="(max-width: 760px) 260px, 380px" /><figcaption>{"总部入口"}</figcaption></figure></div>
</section>
<section className="section" id="questions"><div className="wrap">
<div className="kicker">{"关于 Happy Global Service"}</div>
<h2 className="title rv"><span className="cl">{"实操、"}</span><span className="cl">{"本地、"}</span><span className="cl">{"先行"}</span></h2>
<div className="qgrid">
<div className="qcard rv" style={{"--i":"0"} as CSSProperties}><div className="qcard__q">{"实操型服务"}</div><div className="qcard__a">{"各项服务由 Happy Global Inc. 签约，由我们的美国团队主导和统筹。"}</div><p className="qcard__d">{"法律、税务、移民、清关和运输等受监管事项由持牌机构办理。达拉斯总部设有办公室、内容中心与研发实验室，洛杉矶设有办事处，仓储以达拉斯仓为中心、多地仓点协同；自有品牌在美国市场持续运营。交付给我们的工作，正是我们自身每日在做的工作。"}</p></div><div className="qcard rv" style={{"--i":"1"} as CSSProperties}><div className="qcard__q">{"美国签约主体"}</div><div className="qcard__a">{"Happy Global Inc. 可在书面协议约定的范围内，作为贵司在美国的服务签约方与对接方。"}</div><p className="qcard__d">{"具体职责以协议为准。"}</p></div><div className="qcard rv" style={{"--i":"2"} as CSSProperties}><div className="qcard__q">{"先行实践"}</div><div className="qcard__a">{"以自有品牌先行验证进入美国市场的完整路径。"}</div><p className="qcard__d">{"定价体系、标签合规、主流渠道准入、仓储建设、本地招聘与专业机构协同——品牌企业无需从零开始。"}</p></div>
</div>
</div></section>
<section className="section" id="videos"><div className="wrap">
<div className="head-split"><div><div className="kicker">{"企业影像"}</div><h2 className="title rv">{"我们在美国"}</h2></div><p className="lead">{"一段来自我们在达拉斯主办的 Open Platform Conference，一段由美国市场部同事介绍我们选择达拉斯的原因。"}</p></div>
<div className="videos">
<figure className="vcard rv" style={{"--i":"0"} as CSSProperties}>
<DeferredVideo poster="/assets/img/poster-opc-short.jpg" src="/assets/video/opc.mp4" />
<figcaption><small>{"Open Platform Conference · 达拉斯"}</small><b>{"开放平台大会现场"}</b><span>{"我们邀请合作的法律、财税、渠道机构与品牌企业共聚一堂，探讨进入美国市场的实际议题。"}</span></figcaption>
</figure>
<figure className="vcard rv" style={{"--i":"1"} as CSSProperties}>
<DeferredVideo poster="/assets/img/poster-dallas.jpg" src="/assets/video/why-dallas.mp4" />
<figcaption><small>{"Why Dallas"}</small><b>{"为什么选择达拉斯"}</b><span>{"美国市场部同事介绍达拉斯的经济、人才与物流条件，以及我们在此设立总部的考量。"}</span></figcaption>
</figure>
</div>
</div></section>
<section className="section" id="fit"><div className="wrap fit">
<div>
<div className="kicker">{"服务对象"}</div>
<h2 className="title rv">{"我们服务的品牌企业"}</h2>
<p className="lead">{"拥有自主产品与品牌价值，计划在美国市场长期经营的企业。规模并非首要条件，长期投入的决心才是。"}</p>
<div className="fit__points"><AudiencePoint title="自主产品与品牌" index={0}><span>{"以自有品牌面向市场，而非仅从事代工。"}</span></AudiencePoint><AudiencePoint title="长期经营意愿" index={1}><span>{"愿意在美国设立主体、建立团队，逐步建立渠道。"}</span></AudiencePoint><AudiencePoint title="需要本地执行力量" index={2}><span>{"不止需要建议，更需要在美国落地执行的团队。"}</span></AudiencePoint></div>
</div>
<div className="fit__aside"><h3><span className="cl">{"尚在评估阶段？"}</span></h3><p>{"欢迎与我们联系。我们将基于贵司的产品与目标，给出初步判断与建议。"}</p><Link className="btn" href="/contact/">{"联系我们"}</Link></div>
</div></section>
<section className="section section--soft" id="services"><div className="wrap">
<div className="kicker">{"服务"}</div>
<h2 className="title"><span className="cl">{"六大服务板块，"}</span><span className="cl">{"一个美国签约主体"}</span></h2>
<p className="lead">{"渠道、内容、招聘、财税与架构规划、跨境物流与仓储、人力资源运营与合规用工，均由 Happy Global Inc. 统一签约，由美国团队主导和统筹。"}</p>
<ServiceCarousel locale="zh">
<Link className="scard rv" style={{"--i":"0"} as CSSProperties} href="/services/channel/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"渠道"}</span><h3>{"销售渠道服务"}</h3><p>{"协助品牌进入美国线下与线上销售渠道。渠道准入要求、标签与合规、定价体系与谈判节奏，均以自有品牌的实践为基础。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"1"} as CSSProperties} href="/services/content/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"营销"}</span><h3>{"内容与本地化营销"}</h3><p>{"面向美国市场的品牌内容制作与社交媒体运营：展会影像、品牌与产品视频、双语内容，以及美国本地社交账号的代运营。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"2"} as CSSProperties} href="/services/recruiting/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"招聘"}</span><h3>{"招聘与猎头"}</h3><p>{"为进入美国市场的企业寻访高管与专业人才，并提供薪酬对标、组织设计等人才咨询。我们首先以此建立了自己的美国团队。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"3"} as CSSProperties} href="/services/finance-compliance/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"财税"}</span><h3>{"财税与上市架构规划"}</h3><p>{"从一开始把在美业务的财税、股权与上市架构规划好，公司设立、记账报税与银行开户等合规事务随后推进。专业意见由合作的持牌会计师、律师出具，我们统筹推进至落地。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"4"} as CSSProperties} href="/services/warehousing/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"物流"}</span><h3>{"跨境物流与仓储履约"}</h3><p>{"从中国工厂到美国门店一条线衔接：跨境头程与清关衔接、达拉斯仓与协同仓点的仓储履约、干线与 B2B 到货统筹；运输与清关由持牌机构执行。"}</p><span className="scard__more">{"了解更多 →"}</span></Link><Link className="scard rv" style={{"--i":"5"} as CSSProperties} href="/services/hr-ops/"><span className="icon" style={{"fontSize":"15px"} as CSSProperties}>{"用工"}</span><h3>{"人力资源运营与合规用工"}</h3><p>{"雇佣方案与薪酬福利（由第三方服务商提供，我们负责梳理与对接）、入职至离职的本地合规，以及关键人员赴美的行前与抵美安排。流程源于我们自身美国团队的运营实践。"}</p><span className="scard__more">{"了解更多 →"}</span></Link>
</ServiceCarousel>
</div></section>
<section className="section" id="base"><div className="wrap base">
<div>
<div className="kicker">{"美国布局"}</div>
<h2 className="title rv"><span className="cl">{"总部与研发在达拉斯，"}</span><span className="cl">{"品牌展示在洛杉矶"}</span></h2>
<p className="lead">{"达拉斯是总部，团队在此办公、制作内容、接待客户；自有品牌 PulseOn 以此为基地。PulseOn 与 Glimboo 的研发实验室设于总部，规模更大的研发中心正在建设中。洛杉矶是许多中国品牌进入美国的第一站，我们在此设有办事处，以品牌展示与合作方对接为主。仓储以达拉斯仓（由 Happy Global Logistics 运营）为中心，洛杉矶、芝加哥、凤凰城仓点协同，就近履约。欢迎到访。"}</p>
<div className="base__items"><div><b>{"达拉斯 · 总部"}</b><span>{"办公室、内容中心（由 Happy Global Studio 运营）与研发实验室；研发中心建设中"}</span></div><div><b>{"洛杉矶 · 办事处"}</b><span>{"品牌展示与合作方对接"}</span></div><div><b>{"仓储"}</b><span>{"达拉斯仓（由 Happy Global Logistics 运营）；洛杉矶、芝加哥、凤凰城仓点协同"}</span></div></div>
</div>
<div className="base__photos"><SiteImage src="/assets/img/hero-hq-roof.jpg" alt="达拉斯总部大楼" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 32%"} as CSSProperties} /><SiteImage src="/assets/img/base-office-sign.jpg" alt="办公室 Happy Global 标识" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/hero-lobby.jpg" alt="总部大堂" width="1920" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-merch-wall.jpg" alt="办公室品牌陈列墙" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-mascot.jpg" alt="品牌吉祥物" width="1328" height="1050" loading="lazy" decoding="async" /></div>
</div></section>
<section className="section section--navy" id="how"><div className="wrap how">
<div>
<div className="kicker">{"做事原则"}</div>
<h2 className="title rv"><span className="cl">{"有实力、"}</span><span className="cl">{"敢担当、"}</span><span className="cl">{"有沉淀"}</span></h2>
<div className="principles"><div><b>{"有实力"}</b><span>{"在美国拥有完成工作所需的团队与资源。"}</span></div><div><b>{"敢担当"}</b><span>{"对约定范围内的工作负责到底。"}</span></div><div><b>{"有沉淀"}</b><span>{"每一次实践沉淀为方法、流程与资源，持续服务"}<span className="nw">{"后续客户"}</span>{"。"}</span></div></div>
</div>
<div className="how__principle-photo"><SiteImage src="/assets/img/opc-venue-clean.jpg" alt="有实力、敢担当、有沉淀" width="1920" height="1080" loading="lazy" decoding="async" /></div>
<div className="how__photos">
<div className="mosaic mosaic--3"><SiteImage src="/assets/img/opc-audience.jpg" alt="Open Platform Conference 现场" width="1715" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-stage.jpg" alt="Open Platform Conference 主舞台" width="1280" height="780" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-banquet.jpg" alt="Open Platform Conference · 晚宴" width="1920" height="1080" loading="lazy" decoding="async" /></div>
<p className="note">{"Open Platform Conference · 达拉斯。"}</p>
</div>
</div></section>
<section className="section section--soft" id="field"><div className="wrap">
<div className="head-split">
<div><div className="kicker">{"市场一线"}</div><h2 className="title rv">{"直面美国消费者"}</h2></div>
<p className="lead">{"自有品牌通过音乐节、城市游行、高校与行业展会，直接面向美国消费者。对市场的理解，来自现场。"}</p>
</div>
<div className="field" style={{"--rows":"4"} as CSSProperties}>
<figure className="tile" style={{"gridArea":"1 / 1 / 3 / 3"} as CSSProperties}><SiteImage src="/assets/img/field-yfcon-walkin.jpg" alt="达人与品牌对接活动" width="1400" height="861" loading="lazy" decoding="async" style={{"objectPosition":"center 50%"} as CSSProperties} /><figcaption><small>{"YFCon 2026 · Glimboo 展位"}</small><span>{"达人与品牌对接活动"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"1 / 3 / 2 / 5"} as CSSProperties}><SiteImage src="/assets/img/field-yfcon-letters.jpg" alt="展会现场" width="1400" height="788" loading="lazy" decoding="async" style={{"objectPosition":"center 25%"} as CSSProperties} /><figcaption><small>{"YFCon 2026"}</small><span>{"展会现场"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"2 / 4 / 3 / 5"} as CSSProperties}><SiteImage src="/assets/img/field-yfcon-v62.jpg" alt="展馆人流" width="1400" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><figcaption><small>{"YFCon 2026"}</small><span>{"展馆人流"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"2 / 3 / 3 / 4"} as CSSProperties}><SiteImage src="/assets/img/field-yfcon-plush.jpg" alt="展台上的公仔" width="1400" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption><small>{"YFCon 2026"}</small><span>{"展台上的公仔"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"3 / 1 / 4 / 3"} as CSSProperties}><SiteImage src="/assets/img/field-rooted-banners.jpg" alt="Irving 会展中心 · 2026 年 10 月" width="1400" height="1050" loading="lazy" decoding="async" style={{"objectPosition":"center 70%"} as CSSProperties} /><figcaption><small>{"Rooted Expo · 德州"}</small><span>{"Irving 会展中心 · 2026 年 10 月"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"3 / 3 / 4 / 4"} as CSSProperties}><SiteImage src="/assets/img/field-rooted-511.jpg" alt="Happy Global · 511 展位" width="1080" height="1080" loading="lazy" decoding="async" style={{"objectPosition":"center 40%"} as CSSProperties} /><figcaption><small>{"Rooted Expo"}</small><span>{"Happy Global · 511 展位"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"4 / 1 / 5 / 3"} as CSSProperties}><SiteImage src="/assets/img/field-rooted-booth.jpg" alt="我们的展位" width="1080" height="770" loading="lazy" decoding="async" style={{"objectPosition":"center 92%"} as CSSProperties} /><figcaption><small>{"Rooted Expo"}</small><span>{"我们的展位"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"3 / 4 / 4 / 5"} as CSSProperties}><SiteImage src="/assets/img/field-rooted-board.jpg" alt="展商名录" width="1160" height="760" loading="lazy" decoding="async" style={{"objectPosition":"center 50%"} as CSSProperties} /><figcaption><small>{"Rooted Expo"}</small><span>{"展商名录"}</span></figcaption></figure><figure className="tile" style={{"gridArea":"4 / 3 / 5 / 5"} as CSSProperties}><SiteImage src="/assets/img/field-rooted-letters.jpg" alt="展馆大厅" width="1400" height="1400" loading="lazy" decoding="async" style={{"objectPosition":"center 45%"} as CSSProperties} /><figcaption><small>{"Rooted Expo"}</small><span>{"展馆大厅"}</span></figcaption></figure>
</div>
</div></section>
<section className="section section--navy" id="team"><div className="wrap">
<div className="head-split">
<div><div className="kicker">{"美国团队"}</div><h2 className="title rv"><span className="cl">{"在美国，"}</span><span className="cl">{"由本地团队承接"}</span></h2></div>
<p className="lead">{"Happy Global 体系的财务、仓储、市场、产品、人力资源与运营团队主要在达拉斯总部办公；洛杉矶办事处负责品牌展示与合作方对接。在美国的工作，由本地同事作为您的对接人。"}</p>
</div>
<div className="mosaic mosaic--work mosaic--w3"><SiteImage src="/assets/img/us-team-pano.jpg" alt="达拉斯团队春季团建" width="1920" height="1280" loading="lazy" decoding="async" style={{"objectPosition":"center 62%"} as CSSProperties} /><SiteImage src="/assets/img/us-share-organic.jpg" alt="达拉斯办公室内部分享会 · 自然流量与 SEO" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/us-office-left.jpg" alt="达拉斯办公室" width="857" height="1051" loading="lazy" decoding="async" style={{"objectPosition":"center 30%"} as CSSProperties} /></div>
<div className="mosaic mosaic--3" style={{"marginTop":"12px"} as CSSProperties}><SiteImage src="/assets/img/us-mascot-plants.jpg" alt="达拉斯办公室一角 · 吉祥物 Jojo" width="995" height="1050" loading="lazy" decoding="async" style={{"objectPosition":"center 42%"} as CSSProperties} /><SiteImage src="/assets/img/base-merch-wall.jpg" alt="办公室品牌陈列墙" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/us-jojo.jpg" alt="吉祥物 Jojo" width="667" height="1000" loading="lazy" decoding="async" style={{"objectPosition":"center 62%"} as CSSProperties} /></div>
<p className="note">{"达拉斯团队：内部分享会、办公室日常、团建与社区志愿活动。"}</p>
<div className="head-split block-gap" id="china">
<div><div className="kicker">{"中国团队"}</div><h2 className="title rv"><span className="cl">{"两地团队，"}</span><span className="cl">{"同一套流程"}</span></h2><p className="lead">{"美国团队现场承接，中国团队与达拉斯总部同步协同。需求、报价、合同与进度，均可用中文沟通。"}</p></div>
<div className="points"><div><i>{"1"}</i><p><b>{"同一语言。"}</b>{"中英双语团队，可直接用中文沟通，无需翻译。"}</p></div><div><i>{"2"}</i><p><b>{"两地接力。"}</b>{"美国团队负责渠道、仓储与现场事务；中国团队负责资料、对账与下一步准备。"}</p></div><div><i>{"3"}</i><p><b>{"同一团队。"}</b>{"美国与中国两地分工。"}</p></div></div>
</div>
<div className="mosaic mosaic--5"><SiteImage src="/assets/img/cn-2026-balloons.jpg" alt="中国团队团建" width="1400" height="934" loading="lazy" decoding="async" style={{"objectPosition":"center 66%"} as CSSProperties} /><SiteImage src="/assets/img/cn-lobby.jpg" alt="中国办公室前台" width="1400" height="1014" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-2026-group.jpg" alt="中国团队团建合影" width="1500" height="1000" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-office.jpg" alt="中国办公室" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/cn-2026-drums.jpg" alt="中国团队团建" width="1400" height="934" loading="lazy" decoding="async" /></div>
<p className="note">{"中国团队：同一面旗帜，同一套方法。"}</p>
<div className="head-split block-gap" id="community">
<div><div className="kicker">{"社区"}</div><h2 className="title title--sm">{"达拉斯本地社区的一员"}</h2></div>
<p className="lead">{"德州美中商会赞助商，北德州食物银行长期志愿者，社区捐赠发起方。在美国经营，首先成为负责任的本地企业。"}</p>
</div>
<div className="mosaic mosaic--3"><SiteImage src="/assets/img/culture-foodbank.jpg" alt="北德州食物银行志愿日" width="1400" height="1050" loading="lazy" decoding="async" /><SiteImage src="/assets/img/family-wall-shay.jpg" alt="办公室发起的北德州食物银行募捐" width="637" height="1050" loading="lazy" decoding="async" style={{"objectPosition":"center 26%"} as CSSProperties} /><SiteImage src="/assets/img/us-chamber-shay.jpg" alt="德州美中商会活动 · 展位" width="679" height="934" loading="lazy" decoding="async" style={{"objectPosition":"center 34%"} as CSSProperties} /></div>
</div></section>
<section className="section" id="about"><div className="wrap about">
<div>
<div className="kicker">{"关于我们"}</div>
<h2 className="title title--sm title--statement"><span className="nw"><span className="nw">{"Happy Global Service"}</span></span>{" 是 "}<span className="nw"><span className="nw">{"Happy Global Inc."}</span></span><span className="nw">{"（德克萨斯州公司）"}</span>{"的"}<span className="nw">{"服务品牌"}</span>{"，为企业提供"}<span className="nw">{"进入美国市场"}</span>{"的"}<span className="nw">{"全链路服务"}</span>{"；"}<span className="nw">{"服务由 "}<span className="nw"><span className="nw">{"Happy Global Inc."}</span></span>{" 签约"}</span>{"。"}</h2>
<div className="brands"><span>{"成员品牌"}</span><Link className="brand brand--g" href="/ecosystem/"><i></i>{"Glimboo"}</Link><Link className="brand" href="/ecosystem/"><i></i>{"PulseOn"}</Link></div>
</div>
<div className="statements">
<div><b>{"定位"}</b><p>{"立足美国，专注于市场进入和本地经营服务。"}</p></div>
<div><b>{"使命"}</b><p>{"让企业进入美国市场、开展本地经营并持续成长，变得更简单、更可靠。"}</p></div>
<div><b>{"愿景"}</b><p>{"成为企业进入美国市场、需要本地服务时愿意主动联系并长期信赖的合作伙伴。"}</p></div>
</div>
</div></section>
<section className="section section--soft" id="contact"><div className="wrap contact">
<div>
<div className="kicker">{"联系我们"}</div>
<h2 className="title">{"期待与贵司沟通"}</h2>
<p className="lead">{"如有合作意向，欢迎发邮件至 service@happyglobalinc.com。请简要说明贵司的产品、目标市场与当前阶段，我们将安排相应板块的负责人与您对接。"}</p>
<p className="contact__mail"><a className="btn" href="mailto:service@happyglobalinc.com">{"发送邮件 · service@happyglobalinc.com"}</a></p><p className="contact__privacy">{"我们如何处理您通过邮件提供的信息，请见"}<Link href="/privacy/">{"隐私政策"}</Link>{"。"}</p>
</div>
<div className="contact__side">
<div className="card"><h3>{"邮箱"}</h3><p><a href="mailto:service@happyglobalinc.com">{"service@happyglobalinc.com"}</a></p></div>
<div className="card"><p style={{"margin":"0"} as CSSProperties}>{"Happy Global Inc. · 达拉斯（总部）· 洛杉矶（办事处）"}</p></div>
<div className="card"><h3>{"声明"}</h3><p className="disclaimer">{"本网站内容及初步沟通属一般性信息，旨在帮助企业了解进入美国市场的常见问题，不构成要约或承诺，也不构成法律、税务、证券、财务或投资意见。各项服务的范围、费用与责任以双方签署的书面协议为准；法律、税务、证券、移民、清关、产品认证等专业事项由持牌专业机构办理；我们不对渠道准入或商业结果作出承诺。"}</p></div>
</div>
</div></section>
</main>
</>);
}
