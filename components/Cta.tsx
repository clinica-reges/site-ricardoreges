import { bookingUrl, WHATSAPP_DISPLAY } from '@/lib/site';
import WhatsappAnchor from '@/components/WhatsappAnchor';

// Botão primário de agendamento — recebe a campanha UTM da página.
export function AgendarButton({
  campaign,
  children = 'Agendar avaliação',
  size,
  block,
}: {
  campaign: string;
  children?: React.ReactNode;
  size?: 'lg';
  block?: boolean;
}) {
  const cls = [
    'btn',
    'btn--gold',
    size === 'lg' ? 'btn--lg' : '',
    block ? 'btn--block' : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <a className={cls} href={bookingUrl(campaign)}>
      {children}
    </a>
  );
}

// Link do WhatsApp (alternativa de contato).
export function WhatsappLink({ prefix }: { prefix?: string }) {
  return (
    <span className="cta-alt">
      {prefix ?? 'WhatsApp da clínica: '}
      <WhatsappAnchor>{WHATSAPP_DISPLAY}</WhatsappAnchor>
    </span>
  );
}

// Bloco padrão: CTA primário + alternativa por WhatsApp.
export function CtaBlock({
  campaign,
  whatsappPrefix,
  size,
}: {
  campaign: string;
  whatsappPrefix?: string;
  size?: 'lg';
}) {
  return (
    <div className="cta-row">
      <AgendarButton campaign={campaign} size={size} />
      <WhatsappLink prefix={whatsappPrefix} />
    </div>
  );
}
