'use client';

import { useEffect } from 'react';
import { GA_ID, GA_DEBUG } from '@/lib/site';

// ─────────────────────────────────────────────────────────────
// Eventos de conversão (GA4) — um único listener delegado no
// document. O evento é decidido pelo padrão da URL, não por
// classe ou id de botão: qualquer CTA novo que aponte para
// WhatsApp, DocFlow ou tel: passa a ser medido sozinho.
// ─────────────────────────────────────────────────────────────

type CtaEvent = 'whatsapp_click' | 'agendar_click' | 'tel_click';

const CTA_EVENTS: readonly string[] = [
  'whatsapp_click',
  'agendar_click',
  'tel_click',
];

const CTA_LOCATIONS: readonly string[] = [
  'header',
  'menu',
  'hero',
  'flutuante',
  'meio-texto',
  'faq',
  'rodape',
  // Seção "Raspagem, RTU e HoLEP" (/cirurgia-laser-prostata/#rtu-e-holep):
  // porta de entrada de campanha própria, medida separada do meio de texto.
  'rtu-holep',
];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Qual evento este link representa — ou null, se não for um ponto de contato.
// `data-cta-event` no próprio link é a válvula de escape para um botão de
// agendamento que um dia não aponte para o DocFlow.
function resolveEvent(anchor: Element): CtaEvent | null {
  const forced = anchor.getAttribute('data-cta-event');
  if (forced && CTA_EVENTS.includes(forced)) return forced as CtaEvent;

  const raw = (anchor.getAttribute('href') || '').trim();
  if (!raw) return null;
  if (/^tel:/i.test(raw)) return 'tel_click';

  let url: URL;
  try {
    url = new URL(raw, window.location.href);
  } catch {
    return null;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;

  const host = url.hostname.toLowerCase().replace(/^www\./, '');
  if (host === 'wa.me' || host === 'whatsapp.com' || host.endsWith('.whatsapp.com')) {
    return 'whatsapp_click';
  }
  if (host === 'docflow.med.br' || host.endsWith('.docflow.med.br')) {
    return 'agendar_click';
  }
  return null;
}

// Onde na página o clique aconteceu. Derivado dos marcos de layout do site,
// com `data-cta-location` tendo prioridade para casos que fujam do padrão
// (ex.: o botão flutuante).
function resolveLocation(el: Element): string {
  const tagged = el.closest('[data-cta-location]');
  const declared = tagged?.getAttribute('data-cta-location');
  if (declared && CTA_LOCATIONS.includes(declared)) return declared;

  if (el.closest('.site-footer')) return 'rodape';

  if (el.closest('.site-header')) {
    // No celular o CTA do topo só é alcançável com o menu aberto; no desktop
    // ele fica visível na barra. Separar os dois responde "veio do menu
    // sanfonado ou da barra fixa?".
    const nav = el.closest('#menu-principal');
    return nav?.classList.contains('nav--open') ? 'menu' : 'header';
  }

  if (el.closest('.faq-item')) return 'faq';
  if (el.closest('.hero, .page-head')) return 'hero';
  return 'meio-texto';
}

// Fila de emergência para o caso raro de um clique acontecer antes de a tag
// terminar de carregar: gtag.js consome o objeto `arguments` empilhado no
// dataLayer (um array simples não é reconhecido) e processa o que já estiver lá.
function queueOnDataLayer(this: void) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function sendToGa4(name: CtaEvent, params: Record<string, string>) {
  const send = window.gtag ?? (queueOnDataLayer as (...args: unknown[]) => void);
  send('event', name, params);
}

export default function CtaTracking() {
  useEffect(() => {
    if (!GA_ID) return;

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      // closest() já garante um disparo por clique mesmo com link e botão
      // sobrepostos: só o elemento âncora mais interno é considerado.
      const anchor = target.closest('a[href], [data-cta-event]');
      if (!anchor) return;

      const name = resolveEvent(anchor);
      if (!name) return;

      const href = (anchor.getAttribute('href') || '').trim();
      let linkUrl = href;
      try {
        linkUrl = /^tel:/i.test(href)
          ? href
          : new URL(href, window.location.href).href;
      } catch {
        /* mantém o href cru */
      }

      const params = {
        link_url: linkUrl,
        page_location: window.location.href,
        cta_location: resolveLocation(anchor),
        // Sem isto o GA4 agrupa o evento e só o envia segundos depois — tempo
        // suficiente para o clique no agendamento já ter trocado de página e
        // levado o evento junto. Com 'beacon' ele sai na hora, num fetch
        // keepalive que sobrevive à navegação, sem atrasá-la.
        transport_type: 'beacon',
      };

      sendToGa4(name, params);

      if (GA_DEBUG) {
        // eslint-disable-next-line no-console
        console.log('[cta]', name, params);
      }
    }

    // Fase de captura: o evento é registrado mesmo que algum handler adiante
    // chame stopPropagation. `click` cobre mouse, toque e teclado.
    document.addEventListener('click', onClick, { capture: true, passive: true });
    return () =>
      document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
