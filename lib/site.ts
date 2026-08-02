// ─────────────────────────────────────────────────────────────
// Configuração central do site — Dr. Ricardo Reges
// Fonte única de verdade: telefone, agendamento, endereço, CRM/RQE.
// Nada de valores sensíveis hardcoded fora daqui.
// ─────────────────────────────────────────────────────────────

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ricardoreges.com.br'
).replace(/\/$/, '');

export const BOOKING_BASE =
  process.env.NEXT_PUBLIC_BOOKING_URL || 'https://docflow.med.br/dr-ricardo';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Liga o gtag fora de produção e ativa o debug_mode, para conferir os eventos
// no DebugView do GA4 antes de publicar. Nunca deve ficar 'true' em produção.
export const GA_DEBUG = process.env.NEXT_PUBLIC_GA_DEBUG === 'true';

// WhatsApp / telefone dos pacientes — (85) 99698-3366
export const WHATSAPP_DISPLAY = '(85) 99698-3366';
export const WHATSAPP_E164 = '5585996983366';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;

// Telefone clicável. Hoje é o mesmo número do WhatsApp, mas fica separado
// para poder divergir sem mexer em cada componente.
export const PHONE_DISPLAY = WHATSAPP_DISPLAY;
export const PHONE_TEL = `tel:+${WHATSAPP_E164}`;

// Identificação profissional
export const DOCTOR = {
  name: 'Dr. Ricardo Reges',
  fullName: 'Ricardo Reges Maia de Oliveira',
  crm: 'CRM-CE 10659',
  rqe: 'RQE 3860',
  specialty: 'Urologia',
};

// Endereço do consultório — Aldeota (padronizado 2026)
export const ADDRESS = {
  street: 'Rua Costa Barros, 833, 4º andar',
  district: 'Aldeota',
  city: 'Fortaleza',
  state: 'CE',
  region: 'CE',
  postalCode: '60160-280',
  country: 'BR',
  hours: 'Segunda a sexta, 9h às 18h',
};

// Perfis oficiais para Physician.sameAs (JSON-LD). Ordem exata confirmada:
// Lattes · Google Scholar · LinkedIn · Instagram · YouTube. Vazios são omitidos.
export const SAME_AS = [
  process.env.NEXT_PUBLIC_LATTES_URL || 'https://lattes.cnpq.br/4524635826900536',
  process.env.NEXT_PUBLIC_SCHOLAR_URL ||
    'https://scholar.google.com/citations?hl=pt-BR&user=s5ud4h8AAAAJ',
  process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/regesricardo/',
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/urologiabrasil/',
  process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://www.youtube.com/@RicardoReges',
].filter((u): u is string => Boolean(u && u.trim()));

// Monta a URL de agendamento com os UTM exatos de cada página.
export function bookingUrl(campaign: string): string {
  const sep = BOOKING_BASE.includes('?') ? '&' : '?';
  return `${BOOKING_BASE}${sep}utm_source=site&utm_medium=cta&utm_campaign=${campaign}`;
}

// Flag para exibir os placeholders de vídeo (Shorts entram depois).
export const SHOW_VIDEO_SLOTS =
  process.env.NEXT_PUBLIC_SHOW_VIDEO_SLOTS === 'true';

// Navegação principal (ordem no menu)
export const NAV = [
  { href: '/', label: 'Início' },
  { href: '/cirurgia-laser-prostata/', label: 'Cirurgia a Laser' },
  { href: '/cirurgia-robotica/', label: 'Cirurgia Robótica' },
  { href: '/echolaser/', label: 'EchoLASER' },
  { href: '/pos-prostatectomia/', label: 'Pós-prostatectomia' },
  { href: '/avaliacao-urodinamica/', label: 'Avaliação' },
  { href: '/sobre/', label: 'Sobre' },
];
