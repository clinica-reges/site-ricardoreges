import Script from 'next/script';
import { GA_ID } from '@/lib/site';

// GA4 — carrega gtag apenas em produção, com anonymize_ip ativo.
// Measurement ID vem de NEXT_PUBLIC_GA_ID (nunca hardcoded).
export default function Analytics() {
  if (process.env.NODE_ENV !== 'production' || !GA_ID) return null;

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
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
