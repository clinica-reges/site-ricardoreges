'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, bookingUrl, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">Dr. Ricardo Reges</span>
          <span className="brand__role">Urologia · Fortaleza</span>
        </Link>

        {/* Número visível como texto: o público é 60+ e precisa enxergar,
            não adivinhar um ícone. */}
        <a className="site-header__tel" href={PHONE_TEL}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
          </svg>
          <span>{PHONE_DISPLAY}</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          <span className="nav-toggle__label">Menu</span>
        </button>

        <nav
          id="menu-principal"
          className={open ? 'nav nav--open' : 'nav'}
          aria-label="Navegação principal"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a className="btn btn--gold" href={bookingUrl('menu')}>
                Agendar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
