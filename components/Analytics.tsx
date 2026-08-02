import Script from 'next/script';
import { GA_ID, GA_DEBUG } from '@/lib/site';
import CtaTracking from './CtaTracking';

// GA4 — carrega gtag em produção. Measurement ID vem de NEXT_PUBLIC_GA_ID
// (nunca hardcoded). Sem anonymize_ip: é herança do Universal Analytics, o
// GA4 ignora como diretiva e ainda o reenviava como parâmetro em todo evento.
// NEXT_PUBLIC_GA_DEBUG=true libera a tag fora de produção e liga o
// debug_mode, para validar os eventos no DebugView antes de publicar.
export default function Analytics() {
  if (!GA_ID) return null;
  if (process.env.NODE_ENV !== 'production' && !GA_DEBUG) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}'${GA_DEBUG ? ", { debug_mode: true }" : ''});
        `}
      </Script>
      {/* Listener delegado dos eventos de conversão — sobe junto com a tag. */}
      <CtaTracking />
    </>
  );
}
