'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, bookingUrl } from '@/lib/site';

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

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          <span>Menu</span>
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
