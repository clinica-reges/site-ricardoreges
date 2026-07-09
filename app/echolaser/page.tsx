import type { Metadata } from 'next';
import Link from 'next/link';
import { AgendarButton, CtaBlock } from '@/components/Cta';
import References from '@/components/References';
import VideoSlot from '@/components/VideoSlot';
import JsonLd from '@/components/JsonLd';
import { procedurePageSchema, faqSchema } from '@/lib/schema';
import { DOCTOR } from '@/lib/site';

export const metadata: Metadata = {
  title:
    'EchoLASER em Fortaleza — Ablação da Próstata a Laser sem Cortes (TPLA) | Dr. Ricardo Reges',
  description:
    'Tratamento da próstata aumentada sem cortes e com anestesia local: como funciona a ablação transperineal a laser (EchoLASER/TPLA), para quem é indicada e o que dizem os estudos.',
  alternates: { canonical: '/echolaser/' },
  openGraph: {
    title: 'EchoLASER — Ablação da Próstata a Laser sem Cortes (TPLA) em Fortaleza',
    description:
      'Ablação transperineal a laser da próstata (EchoLASER/TPLA): sem cortes, com anestesia local. Para quem é indicada e o que dizem os estudos.',
    url: '/echolaser/',
  },
};

const FAQ = [
  {
    q: 'Dói?',
    a: 'No protocolo desta prática, o procedimento é feito com sedação leve associada à anestesia local — o desconforto relatado é baixo. No pós-operatório, sintomas urinários transitórios são esperados enquanto o tecido é reabsorvido.',
  },
  {
    q: 'Em quanto tempo sinto melhora?',
    a: 'Diferente das técnicas que removem tecido na hora, aqui a melhora é progressiva: começa nas primeiras semanas e segue evoluindo por 3 a 6 meses, conforme a próstata reduz.',
  },
  {
    q: 'A ejaculação é preservada mesmo?',
    a: 'É a marca da técnica: nas séries publicadas, a ejaculação foi preservada na totalidade ou quase totalidade dos pacientes. Nenhuma técnica garante resultado individual — mas nenhuma outra que reduza efetivamente a próstata tem perfil ejaculatório melhor.',
  },
  {
    q: 'Tomo anticoagulante. Posso fazer?',
    a: 'O perfil minimamente invasivo (agulhas finas, sem ressecção) torna a técnica particularmente interessante para quem não pode suspender antitrombóticos — a decisão é sempre compartilhada com o seu cardiologista.',
  },
  {
    q: 'Posso precisar de outro tratamento no futuro?',
    a: 'Possivelmente — como em toda técnica que preserva a próstata, o retratamento em longo prazo não está descartado, e os dados de 5+ anos ainda estão sendo produzidos. Isso é dito antes, não descoberto depois.',
  },
  {
    q: 'Por que quase ninguém oferece isso?',
    a: 'Porque a técnica é recente, exige equipamento dedicado e treinamento específico em ablação guiada por imagem. A adoção no Brasil está começando — e a seleção criteriosa de pacientes é mais importante do que a novidade.',
  },
  {
    q: 'Convênio cobre?',
    a: 'Não — o EchoLASER para HPB não possui cobertura pelos planos de saúde, sendo realizado exclusivamente em regime particular. As condições completas são apresentadas por escrito na avaliação, incluindo as alternativas que possuem cobertura pelo seu plano, quando indicadas para o seu caso — para que a escolha seja livre e bem informada.',
  },
];

export default function EcholaserPage() {
  return (
    <>
      <JsonLd
        data={[
          procedurePageSchema({
            path: '/echolaser/',
            name: 'EchoLASER — Ablação Transperineal a Laser da Próstata (TPLA)',
            description: metadata.description as string,
            procedures: [
              'Ablação transperineal a laser da próstata (TPLA / EchoLASER)',
            ],
          }),
          faqSchema(FAQ),
        ]}
      />

      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Próstata aumentada (HPB) · técnica minimamente invasiva</p>
          <h1>
            EchoLASER: Ablação da Próstata a Laser Sem Cortes, com Anestesia
            Local
          </h1>
          <p className="subtitle">
            <strong>Prof. Dr. Ricardo Reges</strong> · Urologista · {DOCTOR.crm}{' '}
            · {DOCTOR.rqe}
            <br />
            Tratamento minimamente invasivo da hiperplasia prostática benigna
            (HPB)
          </p>
          <div className="cta-row">
            <AgendarButton campaign="echolaser" />
          </div>
        </div>
      </header>

      <div className="section">
        <div className="wrap prose">
          {/* S1 */}
          <h2>Para quem esta técnica existe</h2>
          <p>
            Há homens com próstata aumentada para quem a cirurgia convencional
            pesa demais — pela saúde, pela idade, pelos anticoagulantes que não
            podem parar, pelo medo da anestesia geral. E há os que poderiam
            operar, mas têm uma prioridade inegociável: preservar a ejaculação.
            Durante anos, esses dois grupos ficaram entre o remédio que já não
            basta e uma cirurgia que não cabia.
          </p>
          <p>
            A ablação transperineal a laser (TPLA, realizada com o sistema
            EchoLASER) nasceu exatamente para esse espaço: um procedimento sem
            cortes, sem passar instrumentos pelo canal da urina, realizável com
            anestesia local — em regime ambulatorial na maioria dos casos.
          </p>
          <VideoSlot label="A cirurgia de próstata sem cortes que quase ninguém conhece" />

          {/* S2 */}
          <h2>Como funciona</h2>
          <p>
            O princípio é elegante: fibras de laser finíssimas — da espessura de
            um fio de cabelo grosso — são introduzidas através da pele do períneo
            (a região entre o escroto e o ânus) por agulhas finas, guiadas em
            tempo real por ultrassom. Dentro da próstata, a energia do laser
            aquece e desativa (necrose de coagulação) o tecido que obstrui, a uma
            distância de segurança da uretra e do colo da bexiga, calculada pelo
            sistema de planejamento do próprio equipamento<sup>1</sup>.
          </p>
          <p>
            Nas semanas seguintes, o organismo reabsorve o tecido tratado e a
            próstata diminui — nos estudos com seguimento de 12 meses, a redução
            do adenoma (a parte que obstrui) chegou a ~58%<sup>2</sup>, com o
            canal urinário respirando de novo.
          </p>
          <p>
            O que NÃO acontece: nenhum corte, nenhuma passagem de aparelho pela
            uretra, nenhuma remoção imediata de tecido — e, na maioria dos
            protocolos, nenhuma anestesia geral.
          </p>

          {/* S3 */}
          <h2>O que dizem os estudos</h2>
          <p>
            Transparência sobre a evidência — o que já se sabe e o que ainda está
            em construção:
          </p>
          <p>
            <strong>O que os estudos mostram (seguimento de até 12 meses):</strong>
          </p>
          <ul>
            <li>
              Melhora significativa dos sintomas: nas séries publicadas, o escore
              de sintomas (IPSS) caiu de forma expressiva — numa coorte real de
              53 pacientes, a mediana foi de 30 para 13 pontos, com o jato
              urinário (Qmax) subindo de 5,5 para 13 ml/s<sup>2</sup>.
            </li>
            <li>
              <strong>Preservação ejaculatória como marca da técnica:</strong>{' '}
              séries reportam ejaculação anterógrada preservada na totalidade ou
              quase totalidade dos pacientes sexualmente ativos (85–100%)
              <sup>3·4</sup> — o melhor perfil entre os tratamentos que
              efetivamente reduzem a próstata. A função erétil permanece estável
              <sup>2</sup>.
            </li>
            <li>
              Segurança: procedimentos sob anestesia local, sem complicações
              maiores nas séries publicadas<sup>2·3·4</sup>, viabilidade
              demonstrada inclusive em consultório/ambulatório<sup>5</sup>.
            </li>
          </ul>
          <p>
            <strong>O que a honestidade exige dizer:</strong>
          </p>
          <ul>
            <li>
              É uma técnica recente — a evidência robusta é de curto e médio prazo
              (12 meses); resultados de longo prazo e taxas de retratamento em 5+
              anos ainda estão sendo construídos pela literatura.
            </li>
            <li>
              A melhora é progressiva, não imediata: o tecido leva semanas para
              ser reabsorvido; parte dos pacientes usa sonda temporária no
              pós-operatório, e retenção urinária transitória pode ocorrer nesse
              período<sup>4</sup>.
            </li>
            <li>
              Não é para todos: próstatas muito volumosas, casos com retenção
              crônica ou anatomias específicas tendem a se beneficiar mais da
              enucleação. A seleção correta do paciente é o que separa o bom
              resultado da frustração — e é feita na avaliação, não no catálogo.
            </li>
          </ul>
          <div className="crosslinks">
            <Link href="/cirurgia-laser-prostata/">
              Qual técnica para qual caso →
            </Link>
          </div>

          {/* S4 */}
          <h2>E para câncer de próstata?</h2>
          <p>
            Pergunta inevitável para quem pesquisou a tecnologia: o EchoLASER
            também aparece em publicações internacionais como terapia focal para
            câncer de próstata. A resposta honesta e direta:{' '}
            <strong>
              no Brasil, o uso oncológico é considerado experimental e não é
              oferecido neste consultório fora de protocolos de pesquisa.
            </strong>{' '}
            Nesta página, e nesta prática, o EchoLASER é tratamento da hiperplasia
            benigna — ponto.
          </p>
          <p>
            Se o seu caso é câncer, o caminho é outro: avaliação uro-oncológica
            completa e a conversa aberta sobre as rotas estabelecidas — cirurgia,
            radioterapia, vigilância ativa.
          </p>
          <div className="crosslinks">
            <Link href="/cirurgia-robotica/">
              Cirurgia robótica do câncer de próstata →
            </Link>
          </div>

          {/* S5 */}
          <h2>Como é o procedimento e a recuperação</h2>
          <ul>
            <li>
              <strong>Duração:</strong> em torno de 30–40 minutos nas séries
              publicadas<sup>3</sup>.
            </li>
            <li>
              <strong>Anestesia:</strong> sedação leve associada à anestesia
              local.
            </li>
            <li>
              <strong>Alta:</strong> na maioria dos casos, no mesmo dia; pacientes
              idosos ou com comorbidades permanecem 24 horas em observação.
            </li>
            <li>
              <strong>Sonda:</strong> todos os pacientes saem com sonda vesical,
              removida em consultório em torno de 7 dias.
            </li>
            <li>
              <strong>Sintomas:</strong> melhora progressiva ao longo de semanas,
              à medida que o tecido tratado é reabsorvido — diferente da
              desobstrução imediata da enucleação; a expectativa certa evita a
              ansiedade errada.
            </li>
            <li>
              <strong>Retorno às atividades:</strong> atividades leves em cerca de
              10 dias, com retomada gradual do ritmo normal.
            </li>
          </ul>

          {/* S6 */}
          <h2>Por que aqui</h2>
          <p>Fatos, não adjetivos:</p>
          <ul>
            <li>
              Técnica incorporada à prática em junho de 2026, com os primeiros
              procedimentos realizados em ambiente de hospital universitário — o
              Hospital Universitário Walter Cantídio (UFC), onde o Dr. Ricardo
              Reges é professor de urologia. A adoção dentro da estrutura
              acadêmica reflete o critério com que novas tecnologias entram nesta
              prática: avaliação rigorosa antes, seleção criteriosa sempre.
            </li>
            <li>
              A técnica não chegou aqui isolada: ela se soma a mais de uma década
              de cirurgia a laser da próstata (GreenLight desde 2012, enucleação,
              formação em Houston e na AUA) — o que importa, porque a força do
              EchoLASER está na <strong>seleção de quem se beneficia dele</strong>
              , e critério de seleção se constrói dominando todas as alternativas.
              Quem só tem um martelo vê pregos; aqui, a caixa de ferramentas está
              completa.
            </li>
            <li>
              Professor de Urologia da UFC, doutorado (UNICAMP), pós-doutorado;
              autor do livro “Avaliação Urodinâmica e suas Aplicações Clínicas” — a
              avaliação que define se esta técnica é a certa para você.
            </li>
          </ul>

          {/* S7 — FAQ */}
          <h2>Perguntas frequentes</h2>
          {FAQ.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}

          {/* S8 */}
          <h2>O primeiro passo</h2>
          <p>
            Esta técnica é excelente — para o paciente certo. Descobrir se você é
            esse paciente exige avaliação: volume prostático, exames, prioridades
            suas. Se for, você sai com o plano; se não for, sai sabendo exatamente
            qual técnica serve melhor ao seu caso — e por quê.
          </p>
          <CtaBlock campaign="echolaser" />

          <References
            items={[
              <>
                Pacella CM, et al. Transperineal interstitial laser ablation of
                the prostate (SoracteLite/EchoLaser): técnica e resultados
                funcionais. <em>Eur Urol Open Sci / Minerva Urol</em> (2020) —
                IPSS −13,1 em 6 meses; anestesia local; alta em 24h.
              </>,
              <>
                Coorte real 53 pacientes, 12 meses: IPSS mediana 30→13; Qmax
                5,5→13 ml/s; redução de volume do adenoma 58,3%; função erétil
                estável; melhora ejaculatória (MSHQ). <em>J Clin Med</em> (2025).
              </>,
              <>
                Série EchoLaser 38 pacientes: procedimento mediano 31 min;
                ambulatorial; ejaculação preservada em todos os pacientes ativos;
                sem complicações Clavien-Dindo ≥2. <em>Front Urol</em> (2022).
              </>,
              <>
                Estudo piloto multicêntrico prospectivo (n=20), 12 meses: IPSS
                21,3→10,9; ejaculação anterógrada preservada em 85%; retenção
                transitória com sonda temporária em parte dos casos; sem eventos
                adversos do dispositivo. <em>BJUI Compass</em> (2023).
              </>,
              <>
                Programa office-based sob anestesia local — viabilidade e
                segurança em consultório.{' '}
                <em>ClinicalTrials NCT04760483</em>; séries AUA (2025–2026).
              </>,
            ]}
          />

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
