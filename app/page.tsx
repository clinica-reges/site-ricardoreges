import type { Metadata } from 'next';
import Link from 'next/link';
import { AgendarButton, CtaBlock } from '@/components/Cta';
import JsonLd from '@/components/JsonLd';
import { physicianSchema } from '@/lib/schema';
import { DOCTOR } from '@/lib/site';

export const metadata: Metadata = {
  title:
    'Dr. Ricardo Reges — Urologista em Fortaleza | Cirurgia de Próstata a Laser e Robótica',
  description:
    'Urologista em Fortaleza. Professor da UFC, doutor pela UNICAMP. Cirurgia da próstata a Laser (HoLEP, GreenLight), robótica, EchoLASER e tratamento de incontinência e disfunção erétil pós-prostatectomia.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dr. Ricardo Reges — Urologista em Fortaleza',
    description:
      'Cirurgia da próstata a Laser e robótica, EchoLASER e reabilitação pós-prostatectomia. Professor da UFC, doutor pela UNICAMP.',
    url: '/',
    images: ['/fotos/og-home.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={physicianSchema()} />

      {/* ── Dobra principal ─────────────────────────────── */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <h1>Dr. Ricardo Reges — Urologista em Fortaleza</h1>
            <p className="hero__sub">
              Prof. Dr. Ricardo Reges · {DOCTOR.crm} · {DOCTOR.rqe}
            </p>
            <p className="hero__credentials">
              Cirurgia da próstata a Laser e robótica · Professor de Urologia da
              UFC · Doutor pela UNICAMP
            </p>
            <p className="lede">
              Há mais de vinte anos, dedico minha prática a devolver aos homens
              duas coisas que os problemas urológicos costumam roubar primeiro:
              o sono e a confiança. Se você chegou até aqui pesquisando um
              sintoma, um diagnóstico ou um procedimento, esta página existe
              para te dar o mapa — com informação honesta, opções completas e
              uma avaliação que trata o seu caso como único.
            </p>
            <div className="cta-row">
              <AgendarButton campaign="home" size="lg" />
            </div>
          </div>
          <picture>
            <source
              type="image/webp"
              srcSet="/fotos/hero-ricardo-mobile.webp 534w, /fotos/hero-ricardo.webp 1067w"
              sizes="(min-width: 54rem) 26rem, 100vw"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero__photo"
              src="/fotos/hero-ricardo.jpg"
              alt="Dr. Ricardo Reges, urologista em Fortaleza"
              width={1067}
              height={1333}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* ── O que trato ─────────────────────────────────── */}
      <section className="section section--mist">
        <div className="wrap">
          <p className="eyebrow">O que trato</p>
          <h2>Encontre o seu caso abaixo — e o caminho para resolvê-lo.</h2>
          <div className="grid grid--2" style={{ marginTop: '1.75rem' }}>
            <div className="card door">
              <h3>Próstata aumentada (HPB)</h3>
              <p>
                Levantar várias vezes à noite, jato fraco, a sensação de nunca
                esvaziar. Quando o remédio já não basta, as técnicas modernas —
                Laser, vapor, ablação — resolvem com menos internação e
                recuperação rápida.
              </p>
              <p>
                <Link className="card__link" href="/cirurgia-laser-prostata/">
                  Cirurgia a Laser da próstata →
                </Link>
                <br />
                <Link className="card__link" href="/echolaser/">
                  EchoLASER: ablação sem cortes →
                </Link>
              </p>
            </div>

            <div className="card door">
              <h3>Câncer de próstata</h3>
              <p>
                Do diagnóstico à decisão, com todas as rotas na mesa — cirurgia
                robótica, radioterapia, vigilância ativa — e o acompanhamento
                completo, incluindo a reabilitação que a maioria dos serviços
                não oferece.
              </p>
              <p>
                <Link className="card__link" href="/cirurgia-robotica/">
                  Cirurgia robótica →
                </Link>
              </p>
            </div>

            <div className="card door">
              <h3>Sequelas de cirurgia de próstata</h3>
              <p>
                Escape de urina ou disfunção erétil depois de operar — aqui ou
                em qualquer serviço — têm tratamento. Da fisioterapia ao
                esfíncter artificial e à prótese, com um subespecialista no
                assunto.
              </p>
              <p>
                <Link className="card__link" href="/pos-prostatectomia/">
                  Incontinência e função sexual pós-próstata →
                </Link>
              </p>
            </div>

            <div className="card door">
              <h3>Sintomas urinários sem diagnóstico claro</h3>
              <p>
                Antes de tratar, medir. A avaliação urodinâmica revela o que a
                bexiga e a próstata estão realmente fazendo — e define o
                tratamento certo.
              </p>
              <p>
                <Link className="card__link" href="/avaliacao-urodinamica/">
                  Avaliação e diagnóstico →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Por que aqui ────────────────────────────────── */}
      <section className="section">
        <div className="wrap narrow">
          <p className="eyebrow">Por que aqui</p>
          <h2>Cinco fatos que pesam na sua decisão</h2>
          <ul className="facts" style={{ marginTop: '1.75rem' }}>
            <li>
              <strong>Medalha Alberto Gentile</strong> — concedida pela AMB/SBU
              ao melhor residente de urologia do Brasil; 1º lugar nacional no
              título de especialista (2007).
            </li>
            <li>
              <strong>
                Mais de uma década de cirurgia a Laser da próstata
              </strong>{' '}
              (desde 2012), com formação em Houston e na American Urological
              Association — e participação no treinamento de dezenas de
              urologistas na América Latina.
            </li>
            <li>
              <strong>Cirurgia robótica</strong> com agenda semanal regular no
              Hospital São Camilo; certificação Intuitive no Hospital Israelita
              Albert Einstein.
            </li>
            <li>
              <strong>
                Professor de Urologia da Universidade Federal do Ceará
              </strong>
              , doutor pela UNICAMP, autor do livro{' '}
              <em>Avaliação Urodinâmica e suas Aplicações Clínicas</em> e de mais
              de 35 artigos científicos.
            </li>
            <li>
              <strong>Subespecialização única no ciclo completo:</strong> as
              duas complicações mais temidas da cirurgia de próstata —
              continência e função sexual — são a minha área de pesquisa e
              prática há duas décadas.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Como funciona ───────────────────────────────── */}
      <section className="section section--mist">
        <div className="wrap narrow">
          <p className="eyebrow">Como funciona</p>
          <h2>Do primeiro contato ao plano</h2>
          <ol className="steps" style={{ marginTop: '1.75rem' }}>
            <li>
              <strong>Avaliação completa</strong> — história, exames, e quando
              indicado, o estudo urodinâmico.
            </li>
            <li>
              <strong>O mapa honesto</strong> — todas as opções do seu caso, com
              números da literatura, benefícios e limites de cada rota.
            </li>
            <li>
              <strong>A decisão é sua</strong> — informada, sem pressa e sem
              pressão. O plano, executamos juntos.
            </li>
          </ol>
          <CtaBlock campaign="home" />
        </div>
      </section>
    </>
  );
}
