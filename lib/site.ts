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

// ─────────────────────────────────────────────────────────────
// Mensagem pré-preenchida do WhatsApp, por página de origem.
//
// O clique é medido pelo GA4, mas o que o consultório precisa saber é de que
// página veio o paciente que efetivamente operou — e isso nenhum painel liga.
// Com a origem escrita na primeira linha da conversa, a secretária só anota.
//
// Distingue por página, não por posição do botão: a posição já está no
// `cta_location`, e repeti-la no texto deixaria a mensagem estranha para quem
// a envia. Curtas de propósito — mensagem longa parece robô e o paciente apaga.
//
// PENDENTE DE APROVAÇÃO — o texto é do Dr. Ricardo Reges e ele revisa antes
// do merge, mesmo critério da seção de RTU.
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_MESSAGE_PADRAO =
  'Olá! Vim pelo site e gostaria de agendar uma avaliação.';

// Chaves com barra no fim, como o `trailingSlash: true` do next.config.
// Rota não listada cai no padrão — inclusive a 404, que atende URL arbitrária.
export const WHATSAPP_MESSAGES: Readonly<Record<string, string>> = {
  '/': WHATSAPP_MESSAGE_PADRAO,
  '/cirurgia-robotica/':
    'Olá! Vim pela página de cirurgia robótica e gostaria de agendar uma avaliação.',
  '/cirurgia-laser-prostata/':
    'Olá! Vim pela página de cirurgia a laser da próstata e gostaria de agendar uma avaliação.',
  '/echolaser/':
    'Olá! Vim pela página do EchoLASER e gostaria de agendar uma avaliação.',
  '/pos-prostatectomia/':
    'Olá! Vim pela página sobre sequelas da cirurgia de próstata e gostaria de agendar uma avaliação.',
  '/avaliacao-urodinamica/':
    'Olá! Vim pela página de avaliação urodinâmica e gostaria de agendar uma avaliação.',
  '/sobre/': WHATSAPP_MESSAGE_PADRAO,
  '/agendar/': 'Olá! Gostaria de agendar uma consulta.',
};

export function whatsappMessage(pathname?: string | null): string {
  if (!pathname) return WHATSAPP_MESSAGE_PADRAO;
  const path = pathname.split(/[?#]/)[0];
  const key = path.endsWith('/') ? path : `${path}/`;
  return WHATSAPP_MESSAGES[key] ?? WHATSAPP_MESSAGE_PADRAO;
}

// Fonte única do href de WhatsApp do site. Nenhum link deve montar essa URL
// na mão — é isso que garante que toda origem nova já nasça com mensagem.
export function whatsappUrl(pathname?: string | null): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage(pathname))}`;
}

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
