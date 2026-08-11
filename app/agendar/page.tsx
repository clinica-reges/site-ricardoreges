import type { Metadata } from 'next';
import { AgendarButton, WhatsappLink } from '@/components/Cta';
import WhatsappAnchor from '@/components/WhatsappAnchor';
import JsonLd from '@/components/JsonLd';
import { clinicSchema } from '@/lib/schema';
import { ADDRESS, WHATSAPP_DISPLAY } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Agendar Consulta — Dr. Ricardo Reges, Urologista em Fortaleza',
  description:
    'Agende a sua avaliação urológica com o Dr. Ricardo Reges em Fortaleza. Online em tempo real ou por WhatsApp. Rua Costa Barros, 833 — Aldeota.',
  alternates: { canonical: '/agendar/' },
  openGraph: {
    title: 'Agendar Consulta — Dr. Ricardo Reges',
    description:
      'Agende a sua avaliação urológica em Fortaleza. Online em tempo real ou por WhatsApp.',
    url: '/agendar/',
  },
};

const MAP_QUERY = encodeURIComponent(
  'Rua Costa Barros 833, Aldeota, Fortaleza - CE',
);

export default function AgendarPage() {
  return (
    <>
      <JsonLd data={clinicSchema()} />

      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Agendar</p>
          <h1>Agendar a sua Avaliação</h1>
          <p className="subtitle">
            O primeiro passo é uma consulta de avaliação — sem compromisso com
            nenhum procedimento. Você sai dela com o seu caso mapeado e as opções
            na mesa.
          </p>
        </div>
      </header>

      <div className="section">
        <div className="wrap prose">
          <h2>Três formas de agendar</h2>

          <div className="callout">
            <h3>1. Online, agora</h3>
            <p>Escolha data e horário na agenda em tempo real:</p>
            <AgendarButton campaign="agendar" size="lg" block>
              Agendar online
            </AgendarButton>
          </div>

          <div className="callout">
            <h3>2. WhatsApp</h3>
            <p style={{ marginBottom: 0 }}>
              Fale com a equipe da clínica:{' '}
              <WhatsappAnchor>
                <strong>{WHATSAPP_DISPLAY}</strong>
              </WhatsappAnchor>{' '}
              (atendimento em horário comercial).
            </p>
          </div>

          <h2>O que levar na primeira consulta</h2>
          <ul>
            <li>
              Exames anteriores (PSA, ultrassom, ressonância, biópsia — o que
              tiver, mesmo antigos);
            </li>
            <li>Lista das medicações em uso;</li>
            <li>
              Suas perguntas anotadas — a consulta é o lugar delas.
            </li>
          </ul>

          <h2>Transparência no agendamento</h2>
          <p>
            O consultório mantém agendas organizadas para atendimento particular
            e por convênios, com informação clara sobre qual modalidade cada
            horário integra — em conformidade com as normas do Conselho Federal
            de Medicina. Sendo beneficiário de plano, você é sempre informado das
            suas opções antes de qualquer escolha.
          </p>

          <h2>Onde fica</h2>
          <div className="address-block">
            <p style={{ margin: 0 }}>
              <strong>{ADDRESS.street}</strong>
              <br />
              {ADDRESS.district} · {ADDRESS.city}/{ADDRESS.state}
              <br />
              {ADDRESS.hours}
            </p>
          </div>
          <div className="map-embed">
            <iframe
              title="Mapa — consultório na Aldeota, Fortaleza"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="cta-row" style={{ marginTop: '2rem' }}>
            <AgendarButton campaign="agendar" />
            <WhatsappLink />
          </div>
        </div>
      </div>
    </>
  );
}
