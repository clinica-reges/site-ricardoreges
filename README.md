# Site — Dr. Ricardo Reges

Site institucional do Prof. Dr. Ricardo Reges, urologista em Fortaleza.
Next.js (App Router) com **export estático** (`output: 'export'`), sem CMS,
sem banco, sem autenticação. Deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build e preview do site estático

```bash
npm run build        # gera ./out (HTML estático)
npm run serve        # serve ./out em http://localhost:4321
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha. Nenhum valor sensível fica
hardcoded no código — tudo passa por aqui.

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica (sitemap, canonical, OG). Sem barra final. |
| `NEXT_PUBLIC_BOOKING_URL` | Base do agendamento (booking DocFlow). Os UTM são acrescentados por página. |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID (`G-4DB4Z1Y232`). gtag só carrega em produção. |
| `NEXT_PUBLIC_LATTES_URL` | Perfil Lattes → `Physician.sameAs` (opcional). |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram → `Physician.sameAs` (opcional). |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn → `Physician.sameAs` (opcional). |
| `NEXT_PUBLIC_SHOW_VIDEO_SLOTS` | `true` exibe os placeholders de vídeo (Shorts). Padrão: oculto. |

## Deploy na Vercel

1. `vercel` (ou conectar o repositório no dashboard da Vercel).
2. Framework detectado automaticamente: **Next.js**. O `output: 'export'` é
   respeitado; nada a configurar além disso.
3. Defina as variáveis de ambiente acima em *Project → Settings → Environment
   Variables*.
4. Deploy gera a URL de preview para revisão visual **antes** de configurar o
   domínio/DNS.

## Estrutura

```
app/                 páginas (uma pasta por rota) + layout, globals.css,
                     sitemap.ts, robots.ts, icon.svg
components/          Header, Footer, Cta, References, Figure, VideoSlot,
                     Analytics, JsonLd
lib/site.ts          config central: telefone, agendamento, endereço, CRM/RQE
lib/schema.ts        construtores de JSON-LD (Physician, MedicalProcedure,
                     MedicalTest, FAQPage, MedicalClinic)
public/fotos/        fotos otimizadas
public/figuras/      figuras SVG
conteudo/            fonte editorial (.md e SVG originais) — não publicada
```

## Requisitos atendidos

- 8 páginas com slugs de SEO definitivos.
- Schema.org (JSON-LD) por página + FAQPage nas FAQs.
- CTAs de agendamento com UTM por página (`utm_campaign` específico).
- Rodapé global com CRM-CE 10659, RQE 3860, endereço Aldeota e linha CFM.
- WhatsApp (85) 99698-3366 em `wa.me` em todo o site.
- Referências recolhíveis (`details/summary`) nas páginas P1–P4.
- Slots de vídeo ocultos por flag (sem buraco visual).
- `sitemap.xml`, `robots.txt`, metatags/OG por página.
- GA4 via env var, só em produção, com `anonymize_ip`.
- Tipografia Lora (títulos) + Inter (corpo) via `next/font` (self-hosted).
```
