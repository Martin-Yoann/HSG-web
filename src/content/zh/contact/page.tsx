import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from '@/components/IntentLink';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  "title": "联系我们 · Happy Global Service",
  "description": "请简要说明贵司的产品与需求，我们将安排相应板块的负责人与您联系。",
  "alternates": {
    "canonical": "/contact/",
    "languages": {
      "zh-CN": "/contact/",
      "en": "/en/contact/"
    }
  },
  "openGraph": {
    "title": "联系我们 · Happy Global Service",
    "description": "请简要说明贵司的产品与需求，我们将安排相应板块的负责人与您联系。",
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
<StructuredData data={[{"@context":"https://schema.org","@type":"Organization","address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Dallas","addressRegion":"TX"},"alternateName":"Happy Global Service","areaServed":"US","description":"Happy Global Service 是 Happy Global Inc. 的服务品牌，总部位于美国达拉斯，在洛杉矶设有办事处，为进入美国市场的品牌企业提供销售渠道、内容与本地化营销、招聘与猎头、财税与上市架构规划、跨境物流与仓储履约、人力资源运营与合规用工服务。","name":"Happy Global Inc.","slogan":"Happy Global，出海美国的靠谱伙伴。"}]} />
<main id="main">
<section className="section section--soft" id="contact"><div className="wrap contact">
<div>
<div className="kicker">{"联系我们"}</div>
<h1 className="title">{"期待与贵司沟通"}</h1>
<p className="lead">{"如有合作意向，欢迎随时与我们联系。请简要说明贵司的产品、目标市场与当前阶段，我们将安排相应板块的负责人与您对接。"}</p>
<form className="form" data-form="" action="#" method="post" data-pending="在线表单将随正式域名启用，现阶段请通过邮件与我们联系。">
<label>{"姓名"}<input name="name" autoComplete="name" required /></label>
<label>{"公司与产品"}<input name="company" autoComplete="organization" /></label>
<label>{"邮箱或微信"}<input name="reach" required /></label>
<fieldset><legend>{"关注的服务"}</legend><div className="chips"><label><input type="checkbox" name="need" value="销售渠道" />{"销售渠道"}</label><label><input type="checkbox" name="need" value="内容与营销" />{"内容与营销"}</label><label><input type="checkbox" name="need" value="招聘与猎头" />{"招聘与猎头"}</label><label><input type="checkbox" name="need" value="财税与架构规划" />{"财税与架构规划"}</label><label><input type="checkbox" name="need" value="跨境物流与仓储" />{"跨境物流与仓储"}</label><label><input type="checkbox" name="need" value="人力资源与合规用工" />{"人力资源与合规用工"}</label><label><input type="checkbox" name="need" value="其他" />{"其他"}</label></div></fieldset>
<label>{"留言"}<textarea name="message"></textarea></label>
<button className="btn" type="submit">{"提交"}</button>
<p className="form__msg" role="status"></p>
</form>
</div>
<div className="contact__side">
<div className="card"><h3>{"微信"}</h3><p>{"扫码添加"}</p><div className="qr ph">{"[二维码]"}</div></div>
<div className="card"><h3>{"邮箱"}</h3><p>{"[联系邮箱，随域名启用]"}</p></div>
<div className="card"><p style={{"margin":"0"} as CSSProperties}>{"Happy Global Inc. · 达拉斯（总部）· 洛杉矶（办事处）"}</p></div>
<div className="card"><h3>{"声明"}</h3><p className="disclaimer">{"本网站内容及初步沟通属一般性信息，旨在帮助企业了解进入美国市场的常见问题，不构成要约或承诺，也不构成法律、税务、证券、财务或投资意见。各项服务的范围、费用与责任以双方签署的书面协议为准；法律、税务、证券、移民、清关、产品认证等专业事项由持牌专业机构办理；我们不对渠道准入或商业结果作出承诺。"}</p></div>
</div>
</div></section>
</main>
</>);
}
