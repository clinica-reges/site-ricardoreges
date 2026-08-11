import Link from 'next/link';
import {
  NAV,
  DOCTOR,
  ADDRESS,
  WHATSAPP_DISPLAY,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/site';
import WhatsappAnchor from '@/components/WhatsappAnchor';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="site-footer__name">{DOCTOR.name}</p>
          <p>
            {DOCTOR.crm} · {DOCTOR.rqe}
            <br />
            Urologia · Cirurgia da próstata a Laser e robótica
          </p>
        </div>

        <div>
          <h2>Contato</h2>
          <ul>
            <li>
              Telefone:{' '}
              <a className="site-footer__tel" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              WhatsApp: <WhatsappAnchor>{WHATSAPP_DISPLAY}</WhatsappAnchor>
            </li>
            <li>{ADDRESS.street}</li>
            <li>
              {ADDRESS.district} · {ADDRESS.city}/{ADDRESS.state}
            </li>
            <li>{ADDRESS.hours}</li>
          </ul>
        </div>

        <nav aria-label="Rodapé">
          <h2>Navegação</h2>
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
