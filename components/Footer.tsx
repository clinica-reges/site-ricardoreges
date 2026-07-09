import Link from 'next/link';
import { NAV, DOCTOR, ADDRESS, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="site-footer__name">{DOCTOR.name}</p>
          <p>
            {DOCTOR.crm} · {DOCTOR.rqe}
            <br />
            Urologia · Cirurgia da próstata a laser e robótica
          </p>
        </div>

        <div>
          <h4>Contato</h4>
          <ul>
            <li>
              WhatsApp:{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>{ADDRESS.street}</li>
            <li>
              {ADDRESS.district} · {ADDRESS.city}/{ADDRESS.state}
            </li>
            <li>{ADDRESS.hours}</li>
          </ul>
        </div>

        <nav aria-label="Rodapé">
          <h4>Navegação</h4>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/agendar/">Agendar</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="wrap">
        <p className="site-footer__legal">
          {DOCTOR.name} · {DOCTOR.crm} · {DOCTOR.rqe} · {ADDRESS.street} ·{' '}
          {ADDRESS.district} · {ADDRESS.city}/{ADDRESS.state} · Conteúdo em
          conformidade com as normas de publicidade médica do Conselho Federal
          de Medicina (CFM).
        </p>
      </div>
    </footer>
  );
}
