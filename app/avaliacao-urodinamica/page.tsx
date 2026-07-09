import type { Metadata } from 'next';
import Link from 'next/link';
import { AgendarButton, CtaBlock } from '@/components/Cta';
import JsonLd from '@/components/JsonLd';
import { testPageSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title:
    'Urodinâmica em Fortaleza — Avaliação Urológica Completa | Dr. Ricardo Reges',
  description:
    'Estudo urodinâmico e avaliação urológica completa em Fortaleza. Antes de tratar, medir: o exame realizado e interpretado por quem escreveu o livro de referência sobre ele.',
  alternates: { canonical: '/avaliacao-urodinamica/' },
  openGraph: {
    title: 'Urodinâmica em Fortaleza — Avaliação Urológica Completa',
    description:
      'Estudo urodinâmico e avaliação urológica completa: antes de tratar, medir. Realizado e interpretado por quem escreveu o livro sobre o exame.',
    url: '/avaliacao-urodinamica/',
  },
};

const FAQ = [
  {
    q: 'O exame dói?',
    a: 'Desconforto leve na passagem das sondas, semelhante ao de uma sondagem simples; passa rápido e não exige anestesia.',
  },
  {
    q: 'Preciso de preparo?',
    a: 'Sim, e ele é enviado no agendamento: tricotomia (raspagem dos pelos da região íntima); ausência de infecção urinária ativa, comprovada por exame de urina recente; e, para quem tem mobilidade reduzida, vir com um acompanhante para auxiliar a subir e descer da mesa de exame.',
  },
  {
    q: 'Convênio cobre o exame?',
    a: 'O estudo urodinâmico é realizado tanto pela agenda de convênios quanto em regime particular — as condições do seu caso são informadas no agendamento.',
  },
  {
    q: 'Já tenho exames — preciso repetir?',
    a: 'Traga tudo; o que estiver válido é aproveitado. Repetir sem necessidade não é conduta desta prática.',
  },
];

export default function AvaliacaoPage() {
  return (
    <>
      <JsonLd
        data={[
          testPageSchema({
            path: '/avaliacao-urodinamica/',
            name: 'Avaliação Urológica Completa e Estudo Urodinâmico',
            description: metadata.description as string,
          }),
          faqSchema(FAQ),
        ]}
      />

      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Avaliação e diagnóstico</p>
          <h1>
            Avaliação Urológica Completa e Estudo Urodinâmico em Fortaleza
          </h1>
          <p className="subtitle">
            <strong>Antes de tratar, medir.</strong> O diagnóstico certo é metade
            do tratamento.
          </p>
          <div className="cta-row">
            <AgendarButton campaign="avaliacao" />
          </div>
        </div>
      </header>

      <div className="section">
        <div className="wrap prose">
          <p>
            Sintomas urinários enganam. O jato fraco pode ser próstata — ou pode
            ser a bexiga. A urgência pode ser obstrução — ou hiperatividade.
            Tratar o alvo errado é a razão pela qual tantos homens tomam remédio
            por anos sem melhorar, ou operam sem resolver. A avaliação completa
            existe para acertar o alvo antes de qualquer decisão.
          </p>

          <h2>O que compõe a avaliação</h2>
          <ul>
            <li>
              <strong>História e exame clínico</strong> — o padrão dos seus
              sintomas conta mais do que parece.
            </li>
            <li>
              <strong>Exames de imagem e laboratório</strong> — ultrassom com
              medida do volume prostático e do resíduo, PSA interpretado no seu
              contexto.
            </li>
            <li>
              <strong>Urofluxometria</strong> — a medida objetiva do jato.
            </li>
            <li>
              <strong>Estudo urodinâmico</strong>, quando indicado — o exame que
              observa a bexiga em funcionamento: como enche, quanta pressão faz,
              como esvazia, e onde exatamente está o problema.
            </li>
          </ul>

          <h2>O estudo urodinâmico, sem mistério</h2>
          <p>
            É um exame funcional: sondas finas medem pressões enquanto a bexiga é
            lentamente preenchida e depois esvaziada, reproduzindo de forma
            controlada o que acontece no seu dia a dia. Dura em torno de 30–40
            minutos, com desconforto leve e passageiro. O resultado responde
            perguntas que nenhum exame de imagem responde: a obstrução é real? A
            bexiga ainda tem força? O escape é da bexiga ou do esfíncter?
          </p>
          <p>
            E um diferencial objetivo desta prática:{' '}
            <strong>
              o exame é realizado e interpretado por quem escreveu o livro sobre
              ele
            </strong>{' '}
            — <em>Avaliação Urodinâmica e suas Aplicações Clínicas</em> (Ed.
            Atheneu, 345 páginas), obra de referência utilizada na formação de
            urologistas.
          </p>

          <h2>Quando a urodinâmica é indicada</h2>
          <ul>
            <li>
              Sintomas urinários que não melhoram com o tratamento inicial;
            </li>
            <li>
              Antes de decidir uma cirurgia de próstata, quando há dúvida se a
              obstrução é a causa;
            </li>
            <li>
              Incontinência urinária — inclusive pós-cirurgia de próstata (define
              o degrau certo do tratamento
              <span aria-hidden="true"> </span>
              <Link href="/pos-prostatectomia/">↗</Link>);
            </li>
            <li>
              Bexiga neurogênica e condições neurológicas com repercussão
              urinária;
            </li>
            <li>Retenção ou esvaziamento incompleto sem causa clara.</li>
          </ul>

          <h2>Perguntas frequentes</h2>
          {FAQ.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}

          <div className="crosslinks" style={{ marginTop: '2rem' }}>
            <Link href="/cirurgia-laser-prostata/">
              Decisão da técnica (próstata a laser) →
            </Link>
            <Link href="/pos-prostatectomia/">
              O degrau do tratamento pós-próstata →
            </Link>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <CtaBlock campaign="avaliacao" />
          </div>

          <p className="disclaimer">
            Conteúdo informativo, em conformidade com as normas de publicidade
            médica do Conselho Federal de Medicina. As informações desta página
            não substituem a consulta médica; indicações e resultados variam caso
            a caso.
          </p>
        </div>
      </div>
    </>
  );
}
