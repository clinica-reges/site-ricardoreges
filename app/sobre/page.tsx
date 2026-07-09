import type { Metadata } from 'next';
import Image from 'next/image';
import { AgendarButton } from '@/components/Cta';
import JsonLd from '@/components/JsonLd';
import { physicianSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title:
    'Sobre — Prof. Dr. Ricardo Reges | Urologista, Professor UFC, Doutor UNICAMP',
  description:
    'Trajetória do Prof. Dr. Ricardo Reges: urologista, professor da UFC, doutor pela UNICAMP. Cirurgia da próstata a Laser e robótica, pesquisa científica e formação de urologistas.',
  alternates: { canonical: '/sobre/' },
  openGraph: {
    title: 'Sobre — Prof. Dr. Ricardo Reges',
    description:
      'Urologista, professor da UFC, doutor pela UNICAMP. Cirurgia da próstata a Laser e robótica, pesquisa científica e formação de urologistas.',
    url: '/sobre/',
    images: ['/fotos/dr-ricardo-reges-retrato.jpg'],
  },
};

const TIMELINE: { year: string; text: React.ReactNode }[] = [
  { year: '2000', text: <>Graduação em Medicina, Universidade Federal do Ceará</> },
  {
    year: '2001–2006',
    text: <>Residências em Cirurgia Geral e Urologia, UNICAMP (bolsista FAPESP)</>,
  },
  {
    year: '2007',
    text: (
      <>
        1º lugar nacional no Título de Especialista (SBU) · <strong>Medalha
        Alberto Gentile</strong> (AMB/SBU)
      </>
    ),
  },
  { year: '2009', text: <>Doutorado em Ciências da Cirurgia, UNICAMP</> },
  { year: '2010–2013', text: <>Pós-doutorado, UFC (bolsista CNPq/FUNCAP)</> },
  {
    year: '2011–2012',
    text: (
      <>
        Formação internacional em cirurgia a Laser da próstata: BPH Laser
        Therapy (American Urological Association) e GreenLight (F. Brantley Scott
        Physician Academy, Houston, 40h); AMS 800 — esfíncter urinário artificial
        (F. Brantley Scott Academy, Houston, 40h)
      </>
    ),
  },
  {
    year: '2012',
    text: (
      <>
        Início da prática de cirurgia a Laser da próstata · Membro internacional
        da American Urological Association
      </>
    ),
  },
  {
    year: '2013 — atual',
    text: (
      <>
        Professor de Urologia, UFC; atualmente vice-chefe do Departamento de
        Cirurgia
      </>
    ),
  },
  {
    year: '2015',
    text: (
      <>
        Publicação do livro <em>Avaliação Urodinâmica e suas Aplicações
        Clínicas</em> (Ed. Atheneu, 345 p., com Carlos D’Ancona)
      </>
    ),
  },
  {
    year: '2009–2018',
    text: (
      <>
        Diretoria do Departamento de Sexualidade da SBU; Departamento de HPB da
        SBU (2016–2018)
      </>
    ),
  },
  {
    year: '2018',
    text: (
      <>
        Patente depositada no INPI: stent ureteral com cobertura de hidrogel e
        carga farmacológica
      </>
    ),
  },
  {
    year: '2025',
    text: (
      <>
        Certificação em cirurgia robótica (Intuitive — Hospital Israelita Albert
        Einstein, São Paulo); prática robótica no Hospital São Camilo, Fortaleza
      </>
    ),
  },
  {
    year: '2026',
    text: (
      <>
        Incorporação da ablação transperineal a Laser (EchoLASER), com os
        primeiros procedimentos em ambiente de hospital universitário (HUWC-UFC)
      </>
    ),
  },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={physicianSchema()} />

      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Sobre</p>
          <h1>Sobre o Dr. Ricardo Reges</h1>
        </div>
      </header>

      <div className="section">
        <div className="wrap">
          <div className="hero__grid" style={{ alignItems: 'start' }}>
            <div className="prose" style={{ maxWidth: 'none' }}>
              <p>
                Ricardo Reges Maia de Oliveira é urologista, professor de
                Urologia da Universidade Federal do Ceará e doutor em Cirurgia
                pela Universidade Estadual de Campinas (UNICAMP). Sua trajetória
                combina três frentes raramente reunidas no mesmo profissional: a
                cirurgia de alta complexidade da próstata, a pesquisa científica
                com publicação internacional, e a formação de novos urologistas —
                como docente, orientador de mestrado e doutorado, e instrutor de
                técnicas cirúrgicas para colegas no Brasil e na América Latina.
              </p>
              <p>
                Formado pela UFC (2000), fez residência em Cirurgia Geral e em
                Urologia na UNICAMP, onde concluiu o programa com o 1º lugar
                nacional na prova de título de especialista da Sociedade
                Brasileira de Urologia e a <strong>Medalha Alberto Gentile</strong>{' '}
                — distinção concedida pela Associação Médica Brasileira e pela SBU
                a um único residente de urologia do país por ano.
              </p>
              <p>
                Nas duas décadas seguintes, especializou-se no aparelho urinário
                inferior masculino em todo o seu ciclo: da hiperplasia e do câncer
                de próstata (cirurgia a Laser desde 2012; robótica com agenda
                semanal regular) à reabilitação das suas sequelas — incontinência
                urinária e disfunção erétil — área em que dirigiu o Departamento
                de Sexualidade da Sociedade Brasileira de Urologia por quase uma
                década.
              </p>
            </div>
            <Image
              className="hero__photo"
              src="/fotos/dr-ricardo-reges-retrato.jpg"
              alt="Prof. Dr. Ricardo Reges"
              width={900}
              height={1257}
            />
          </div>

          <div className="narrow" style={{ marginTop: '3rem' }}>
            <h2>Linha do tempo</h2>
            <ul className="timeline">
              {TIMELINE.map((item) => (
                <li key={item.year}>
                  <span className="timeline__year">{item.year}</span>
                  <span className="timeline__text">{item.text}</span>
                </li>
              ))}
            </ul>

            <h2>Produção científica e reconhecimento</h2>
            <ul className="prose">
              <li>
                Mais de 35 artigos em periódicos nacionais e internacionais —{' '}
                <em>The Journal of Urology</em>, <em>European Journal of
                Pharmacology</em>, <em>Sexual Medicine Reviews</em>,{' '}
                <em>International Brazilian Journal of Urology</em> — com linha de
                pesquisa em disfunção miccional e sexual.
              </li>
              <li>
                Autor de capítulos de livro, incluindo colaboração internacional
                em <em>Neuropatias Periféricas</em> (SBU, 2017).
              </li>
              <li>
                Ex-editor associado e revisor do <em>International Brazilian
                Journal of Urology</em>; revisor de periódicos internacionais.
              </li>
              <li>
                Orientador de dissertações de mestrado, teses de doutorado e
                supervisões de pós-doutorado na UFC, com linha ativa em câncer de
                próstata (efeitos da terapia de privação androgênica) e pesquisa
                translacional (reconstrução com matriz de pele de tilápia; novas
                formulações para disfunção erétil).
              </li>
              <li>
                Instrutor e proctor em educação médica: participação no
                treinamento de dezenas de urologistas latino-americanos em
                cirurgia a Laser da próstata, e em programas de formação em
                restauração erétil ao lado de referências internacionais.
              </li>
            </ul>

            <div className="cta-row" style={{ marginTop: '2rem' }}>
              <span className="cta-alt" style={{ marginRight: '0.25rem' }}>
                Conheça a abordagem:
              </span>
              <AgendarButton campaign="sobre" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
