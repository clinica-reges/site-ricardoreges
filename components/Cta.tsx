import { bookingUrl, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/site';

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
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        {WHATSAPP_DISPLAY}
      </a>
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
