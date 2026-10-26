import { DeferredVideo } from '@/components/DeferredVideo';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { SiteImage } from '@/components/SiteImage';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "关于我们 · Happy Global Service",
  "description": "Happy Global Service 是 Happy Global Inc. 的服务品牌，为企业提供进入美国市场的全链路服务。总部位于美国德克萨斯州达拉斯，在洛杉矶设有办事处。",
  "alternates": {
    "canonical": "https://happyglobalinc.com/about/",
    "languages": {
      "zh-CN": "https://happyglobalinc.com/about/",
      "en": "https://happyglobalinc.com/en/about/",
      "x-default": "https://happyglobalinc.com/about/"
    }
  },
  "openGraph": {
    "title": "关于我们 · Happy Global Service",
    "description": "Happy Global Service 是 Happy Global Inc. 的服务品牌，为企业提供进入美国市场的全链路服务。总部位于美国德克萨斯州达拉斯，在洛杉矶设有办事处。",
    "url": "https://happyglobalinc.com/about/",
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
<section className="page-hero">
<SiteImage src="/assets/img/hero-hq-roof.jpg" alt="" width="1920" height="1440" loading="eager" decoding="async" style={{"objectPosition":"center 32%"} as CSSProperties} />
<div className="wrap">
<div className="kicker" style={{"marginTop":"10px"} as CSSProperties}>{"关于我们"}</div>
<h1><span className="nw">{"Happy Global Service"}</span></h1>
<p>{"Happy Global Service 是 Happy Global Inc.（德克萨斯州公司）的服务品牌，为企业提供进入美国市场的全链路服务；服务由 Happy Global Inc. 签约。"}</p>
</div>
</section>
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
<section className="section" id="track"><div className="wrap">
<div className="kicker">{"自有品牌实践"}</div>
<h2 className="title rv"><span className="cl">{"自有品牌，"}</span><span className="cl">{"是我们的第一个客户"}</span></h2>
<p className="lead">{"为将自有品牌带入美国市场，Happy Global 体系在达拉斯建立了团队、仓库、内容中心与研发实验室，并走过了渠道准入的完整过程。这些实践，是今天服务能力的来源。"}</p>
<div className="mosaic mosaic--5"><SiteImage src="/assets/img/opc-audience.jpg" alt="Open Platform Conference 现场" width="1715" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-victor.jpg" alt="Open Platform Conference · Defining Vision, Achieving Shared Value" width="860" height="788" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-rubie.jpg" alt="Open Platform Conference · Operational Excellence" width="1000" height="788" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-sarah.jpg" alt="Open Platform Conference · Global B2B Distribution and Service" width="851" height="638" loading="lazy" decoding="async" /><SiteImage src="/assets/img/opc-liyan.jpg" alt="Open Platform Conference · Team and Culture" width="851" height="638" loading="lazy" decoding="async" /></div>
<p className="note">{"Open Platform Conference · 达拉斯。"}</p>
<div className="timeline"><div><b>{"建立达拉斯团队与仓库"}</b><p>{"在美国设立运营基础。"}</p></div><div><b>{"自有品牌进入美国渠道"}</b><p>{"完成定价、合规与主流渠道准入。"}</p></div><div><b>{"建立内容中心"}</b><p>{"承担展会、企业影像与双语内容制作。"}</p></div><div><b>{"服务能力对外开放"}</b><p>{"以招聘与猎头为起点，逐步开放各服务板块。"}</p></div></div></div></section>
<section className="section" id="base"><div className="wrap base">
<div>
<div className="kicker">{"美国布局"}</div>
<h2 className="title rv"><span className="cl">{"总部与研发在达拉斯，"}</span><span className="cl">{"品牌展示在洛杉矶"}</span></h2>
<p className="lead">{"达拉斯是总部，团队在此办公、制作内容、接待客户；自有品牌 PulseOn 以此为基地。PulseOn 与 Glimboo 的研发实验室设于总部，规模更大的研发中心正在建设中。洛杉矶是许多中国品牌进入美国的第一站，我们在此设有办事处，以品牌展示与合作方对接为主。仓储以达拉斯仓（由 Happy Global Logistics 运营）为中心，洛杉矶、芝加哥、凤凰城仓点协同，就近履约。欢迎到访。"}</p>
<div className="base__items"><div><b>{"达拉斯 · 总部"}</b><span>{"办公室、内容中心（由 Happy Global Studio 运营）与研发实验室；研发中心建设中"}</span></div><div><b>{"洛杉矶 · 办事处"}</b><span>{"品牌展示与合作方对接"}</span></div><div><b>{"仓储"}</b><span>{"达拉斯仓（由 Happy Global Logistics 运营）；洛杉矶、芝加哥、凤凰城仓点协同"}</span></div></div>
</div>
<div className="base__photos"><SiteImage src="/assets/img/hero-hq-roof.jpg" alt="达拉斯总部大楼" width="1920" height="1440" loading="lazy" decoding="async" style={{"objectPosition":"center 32%"} as CSSProperties} /><SiteImage src="/assets/img/base-office-sign.jpg" alt="办公室 Happy Global 标识" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/hero-lobby.jpg" alt="总部大堂" width="1920" height="1080" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-merch-wall.jpg" alt="办公室品牌陈列墙" width="1050" height="1400" loading="lazy" decoding="async" /><SiteImage src="/assets/img/base-mascot.jpg" alt="品牌吉祥物" width="1328" height="1050" loading="lazy" decoding="async" /></div>
</div></section>
<section className="section" id="videos"><div className="wrap">
<div className="head-split"><div><div className="kicker">{"企业影像"}</div><h2 className="title rv">{"为什么选择达拉斯"}</h2></div><p className="lead">{"美国市场部同事介绍达拉斯的经济、人才与物流条件，以及我们在此设立总部的考量。"}</p></div>
<div className="videos">
<figure className="vcard rv" style={{"--i":"0"} as CSSProperties}>
<DeferredVideo poster="/assets/img/poster-dallas.jpg" src="/assets/video/why-dallas.mp4" />
<figcaption><small>{"Why Dallas"}</small><b>{"为什么选择达拉斯"}</b><span>{"美国市场部同事介绍达拉斯的经济、人才与物流条件，以及我们在此设立总部的考量。"}</span></figcaption>
</figure>
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
</main>
</>);
}
