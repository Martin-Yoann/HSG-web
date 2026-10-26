import { Logo } from './Logo';
import { NavLink, LanguageSwitch } from './Navigation';
import type { Locale } from '@/lib/locale';

const slugs = ['channel', 'content', 'recruiting', 'finance-compliance', 'warehousing', 'hr-ops'];
import labels from '@/data/navigation.json';

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
