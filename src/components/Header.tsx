import { Logo } from './Logo';
import { NavLink, LanguageSwitch } from './Navigation';
import type { Locale } from '@/lib/locale';

const slugs = ['channel', 'content', 'recruiting', 'finance-compliance', 'warehousing', 'hr-ops'];
const labels = {
  zh: {
    home: '首页', services: '服务', network: 'Happy Global 体系', about: '关于我们', contact: '联系我们', nav: '主导航', menu: '菜单',
    items: [
      ['渠道', '销售渠道服务', '协助品牌进入美国线下与线上销售渠道'],
      ['营销', '内容与本地化营销', '面向美国市场的品牌内容制作与社交媒体运营'],
      ['招聘', '招聘与猎头', '高管寻访、专业人才招聘与人才咨询'],
      ['财税', '财税与架构', '财税规划、股权与上市架构规划，以及合规事务统筹'],
      ['物流', '物流与仓储', '跨境头程、美国多仓履约与 B2B 配送'],
      ['用工', '人力资源与用工', 'EOR／PEO、薪酬、入离职合规与人员赴美'],
    ],
  },
  en: {
    home: 'Home', services: 'Services', network: 'Our Network', about: 'About', contact: 'Contact us', nav: 'Main navigation', menu: 'Menu',
    items: [
      ['R', 'Retail & Channel Entry', 'Entry into U.S. offline and online sales channels'],
      ['C', 'Content & Localized Marketing', 'Brand content and social media for the U.S. market'],
      ['H', 'Recruiting & Search', 'Executive search, professional recruiting and talent advisory'],
      ['F', 'Tax & Structure', 'Tax planning, equity and listing-structure planning, and compliance'],
      ['W', 'Logistics & Warehousing', 'Cross-border freight, multi-warehouse U.S. fulfillment and B2B delivery'],
      ['HR', 'HR & Employment', 'EOR/PEO, payroll, compliance and relocation to the U.S.'],
    ],
  },
};

export function Header({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const prefix = locale === 'en' ? '/en' : '';
  return <header className="topbar" data-topbar="">
    <div className="wrap">
      <NavLink className="logo" href={`${prefix}/`}><Logo /></NavLink>
      <nav id="main-navigation" className="nav" aria-label={copy.nav}>
        <NavLink href={`${prefix}/`}>{copy.home}</NavLink>
        <div className="nav__item has-menu">
          <NavLink href={`${prefix}/services/`}>{copy.services}<span className="caret" aria-hidden="true" /></NavLink>
          <div className="menu" role="menu"><div className="menu__grid">
            {copy.items.map(([icon, title, description], index) => <NavLink key={slugs[index]} className="menu__link" role="menuitem" href={`${prefix}/services/${slugs[index]}/`}>
              <span className="menu__icon" style={locale === 'zh' || icon === 'HR' ? { fontSize: 14 } : undefined}>{icon}</span>
              <b>{title}</b><small>{description}</small>
            </NavLink>)}
          </div></div>
        </div>
        <NavLink href={`${prefix}/ecosystem/`}>{copy.network}</NavLink>
        <NavLink href={`${prefix}/about/`}>{copy.about}</NavLink>
        <NavLink className="nav__cta" href={`${prefix}/contact/`}>{copy.contact}</NavLink>
      </nav>
      <LanguageSwitch locale={locale} />
      <NavLink className="btn btn--sm" href={`${prefix}/contact/`}>{copy.contact}</NavLink>
      <button type="button" className="menu-btn" aria-label={copy.menu} aria-expanded="false" aria-controls="main-navigation" data-open-label={copy.menu} data-close-label={locale === 'en' ? 'Close menu' : '关闭菜单'}>
        <svg className="menu-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
          <path className="menu-btn__top" d="M3 5h18" />
          <path className="menu-btn__middle" d="M3 12h18" />
          <path className="menu-btn__bottom" d="M3 19h18" />
        </svg>
      </button>
    </div>
  </header>;
}
