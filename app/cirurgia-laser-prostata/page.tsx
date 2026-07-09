import type { Metadata } from 'next';
import Link from 'next/link';
import { AgendarButton, CtaBlock } from '@/components/Cta';
import Figure from '@/components/Figure';
import References from '@/components/References';
import VideoSlot from '@/components/VideoSlot';
import JsonLd from '@/components/JsonLd';
import { procedurePageSchema, faqSchema } from '@/lib/schema';
import { DOCTOR } from '@/lib/site';

export const metadata: Metadata = {
  title:
    'Cirurgia a Laser da Próstata em Fortaleza | HoLEP, GreenLight e Rezūm — Dr. Ricardo Reges',
  description:
    'Tratamento da próstata aumentada (HPB) com laser HoLEP, GreenLight e Rezūm em Fortaleza. Mais de uma década de experiência. Entenda qual técnica é a certa para o seu caso.',
  alternates: { canonical: '/cirurgia-laser-prostata/' },
  openGraph: {
    title: 'Cirurgia a Laser da Próstata em Fortaleza — HoLEP, GreenLight e Rezūm',
    description:
      'Próstata aumentada (HPB): entenda as técnicas a laser e minimamente invasivas e qual é a certa para o seu caso.',
    url: '/cirurgia-laser-prostata/',
  },
};

const FAQ = [
  {
    q: 'A cirurgia dói?',
    a: 'É realizada sob anestesia (raqui ou geral, definida com o anestesista). No pós-operatório, o desconforto típico é ardência ao urinar nos primeiros dias, controlada com medicação simples.',
  },
  {
    q: 'Quantos dias fico internado?',
    a: 'Na maioria dos casos, 1 a 2 diárias. O Rezūm é ambulatorial.',
  },
  {
    q: 'Quando volto a dirigir e trabalhar?',
    a: 'Atividades leves e direção em poucos dias; trabalho de esforço físico, em geral, após 2 a 4 semanas.',
  },
  {
    q: 'A próstata pode voltar a crescer?',
    a: 'Após a enucleação, a recidiva da obstrução é rara — é a técnica com menor taxa de reoperação entre todas. Na vaporização e no Rezūm, o retratamento em longo prazo é possível (no Rezūm, cerca de 4,4% dos pacientes precisaram de novo procedimento em 5 anos), e isso entra na conversa sobre a escolha da técnica.',
  },
  {
    q: 'Preciso continuar o rastreamento de câncer de próstata depois?',
    a: 'Sim. A cirurgia de HPB trata a parte interna da próstata; a cápsula permanece, e o acompanhamento (PSA e exame) continua no ritmo adequado à sua idade e risco.',
  },
  {
    q: 'Tomo anticoagulante. Posso operar?',
    a: 'Frequentemente sim — essa é uma das principais vantagens do laser. A conduta sobre a medicação é individualizada com o cardiologista.',
  },
  {
    q: 'O convênio cobre? Como funciona o particular?',
    a: 'As técnicas a laser são realizadas em regime particular; a cobertura por planos de saúde depende de cada contrato e técnica, e orientamos a verificação caso a caso. Na consulta de avaliação, você recebe todas as condições com transparência, sem surpresas.',
  },
  {
    q: 'Existe idade limite?',
    a: 'Não há limite rígido de idade — a decisão considera o estado clínico geral, e o objetivo é justamente devolver qualidade de vida e sono em qualquer fase.',
  },
];

export default function LaserProstataPage() {
  return (
    <>
      <JsonLd
        data={[
          procedurePageSchema({
            path: '/cirurgia-laser-prostata/',
            name: 'Cirurgia a Laser da Próstata — HoLEP, GreenLight e Rezūm',
            description: metadata.description as string,
            procedures: [
              'Enucleação prostática a laser (HoLEP / ThuLEP)',
              'Vaporização prostática (GreenLight / PVP)',
              'Terapia com vapor d’água (Rezūm)',
            ],
          }),
          faqSchema(FAQ),
        ]}
      />

      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Próstata aumentada (HPB)</p>
          <h1>
            Cirurgia a Laser da Próstata em Fortaleza — HoLEP, GreenLight e
            Rezūm
          </h1>
          <p className="subtitle">
            <strong>Prof. Dr. Ricardo Reges</strong> · Urologista · {DOCTOR.crm}{' '}
            · {DOCTOR.rqe}
            <br />
            Cirurgia a laser da próstata desde 2012 · Mais de cem procedimentos
            realizados
          </p>
          <div className="cta-row">
            <AgendarButton campaign="laser-prostata" />
          </div>
        </div>
      </header>

      <div className="section">
        <div className="wrap prose">
          {/* S1 */}
          <h2>O problema, na língua do paciente</h2>
          <p>
            Levantar três, quatro vezes por noite para urinar. Jato fraco, que
            demora a começar. A sensação de que a bexiga nunca esvazia por
            completo. A vida organizada em volta do banheiro mais próximo.
          </p>
          <p>
            Se você reconheceu esses sinais, saiba que eles têm nome —
            hiperplasia prostática benigna (HPB), o aumento benigno da
            próstata — e que atingem mais da metade dos homens acima dos 60
            anos. Na maioria dos casos, o tratamento começa com medicamentos.
            Mas quando o remédio deixa de bastar, ou quando os efeitos colaterais
            pesam mais que o benefício, a cirurgia moderna da próstata é muito
            diferente da que o seu pai talvez tenha feito.
          </p>
          <p>
            Hoje, as técnicas a laser e minimamente invasivas permitem tratar a
            obstrução com menos sangramento, menos tempo de sonda e recuperação
            mais rápida — inclusive em próstatas muito volumosas e em pacientes
            que usam anticoagulantes.
          </p>
          <VideoSlot label="Os sinais de que sua próstata cresceu" />

          {/* S2 */}
          <h2>Como funciona a cirurgia a laser</h2>
          <p>
            Uma imagem ajuda: pense na próstata como uma laranja. Com o
            crescimento benigno, o miolo da laranja cresce e aperta o canal da
            urina que passa por dentro dela. A cirurgia a laser remove esse miolo
            obstrutivo <strong>preservando a casca</strong> (a cápsula
            prostática) — tudo por dentro do canal da urina, sem nenhum corte
            externo.
          </p>
          <Figure
            src="/figuras/enucleation.jpg"
            webp="/figuras/enucleation.webp"
            alt="Ilustração esquemática da enucleação a laser da próstata: o adenoma é separado da cápsula, que é preservada"
            caption="Ilustração esquemática, sem escala anatômica · finalidade educativa"
            width={1600}
            height={995}
          />
          <p>
            Existem duas famílias de técnica a laser, e a diferença importa:
          </p>
          <p>
            <strong>Enucleação (HoLEP / ThuLEP)</strong> — o laser descola e
            remove o miolo inteiro, em bloco. O tecido removido é enviado para
            análise patológica (biópsia completa do que foi retirado). É a
            técnica de escolha para próstatas grandes e o tratamento mais
            definitivo que existe: a chance de a obstrução voltar é a menor entre
            todas as opções.
          </p>
          <p>
            <strong>Vaporização (GreenLight / PVP)</strong> — o laser vaporiza o
            tecido obstrutivo, camada por camada, com selamento imediato dos
            vasos. Sangramento mínimo, o que a torna especialmente valiosa para
            pacientes que não podem suspender anticoagulantes.
          </p>
          <p>E há uma terceira via, sem laser:</p>
          <p>
            <strong>Rezūm (vapor d’água)</strong> — injeções de vapor no tecido
            prostático, em procedimento rápido e ambulatorial, indicado para
            próstatas menores em pacientes que priorizam a preservação da
            ejaculação e um retorno quase imediato à rotina.
          </p>

          {/* S3 */}
          <h2>Qual técnica para qual caso</h2>
          <p>
            Não existe &ldquo;a melhor técnica&rdquo; — existe a técnica certa
            para a sua próstata, seus exames e sua história. Alguns dos critérios
            que orientam a decisão:
          </p>
          <ul>
            <li>
              <strong>Volume da próstata:</strong> próstatas grandes (acima de
              ~80 g) favorecem a enucleação; volumes menores abrem espaço para
              vaporização ou Rezūm.
            </li>
            <li>
              <strong>Uso de anticoagulantes:</strong> o laser (em especial a
              vaporização GreenLight) permite operar com segurança pacientes que
              não podem suspender a medicação — estudos multicêntricos, incluindo
              o ensaio randomizado GOLIATH, demonstraram segurança comparável ou
              superior à cirurgia convencional, com taxas de transfusão
              desprezíveis mesmo em pacientes mantidos em antitrombóticos
              <sup>7·8</sup>.
            </li>
            <li>
              <strong>Retenção urinária / uso de sonda:</strong> casos que já
              dependem de sonda tendem a se beneficiar da desobstrução mais
              completa (enucleação).
            </li>
            <li>
              <strong>Prioridade na preservação ejaculatória:</strong> o Rezūm
              apresenta as maiores taxas de preservação; nas técnicas de remoção,
              a ejaculação retrógrada é frequente (explicada na seção seguinte).
            </li>
            <li>
              <strong>Necessidade de análise do tecido:</strong> a enucleação
              fornece todo o tecido removido para o patologista.
            </li>
          </ul>
          <Figure
            src="/figuras/fig-tecnicas-comparativo.svg"
            alt="Comparativo geral das técnicas: enucleação (HoLEP), vaporização (GreenLight) e Rezūm, por volume, sangramento, preservação ejaculatória e análise de tecido."
            caption="Qual técnica para qual caso — visão geral comparativa."
            width={900}
            height={470}
          />
          <p>
            A técnica certa para o seu caso é definida na avaliação — com exame
            de imagem, avaliação do volume prostático e, quando indicado, estudo
            urodinâmico. <strong>É essa avaliação, e não a preferência por uma
            tecnologia, que define a indicação.</strong>
          </p>
          <div className="crosslinks">
            <Link href="/avaliacao-urodinamica/">
              Avaliação e diagnóstico →
            </Link>
            <Link href="/echolaser/">
              EchoLASER — ablação transperineal (casos selecionados) →
            </Link>
          </div>

          {/* S4 */}
          <h2>As duas perguntas que todo homem quer fazer</h2>
          <div className="callout">
            <h3>&ldquo;Vou ficar incontinente?&rdquo;</h3>
            <p>
              É a pergunta mais importante — e merece resposta com números,
              separando duas coisas diferentes:
            </p>
            <p>
              <strong>Escape temporário (transitório):</strong> nas primeiras
              semanas após a enucleação, parte dos pacientes apresenta algum grau
              de escape — os estudos reportam tipicamente entre 8% e 17% dos
              casos, com a grande maioria recuperando o controle completo nos
              primeiros 3 meses; numa das maiores séries publicadas, quase 90%
              dos casos transitórios resolveram já nas primeiras 6 semanas
              <sup>1‑3</sup>. É parte esperada da recuperação: a bexiga e o
              esfíncter passaram anos trabalhando contra a obstrução e precisam
              de um período de readaptação. Fisioterapia do assoalho pélvico
              acelera essa fase quando indicada.
            </p>
            <p>
              <strong>
                Incontinência definitiva (que persiste e requer tratamento):
              </strong>{' '}
              essa é rara — na ordem de 1,5% a 2,7% na literatura<sup>1·4</sup>.
              E mesmo nesses casos incomuns existe tratamento eficaz, incluindo o
              esfíncter urinário artificial nos casos graves — que é uma das
              subespecialidades do Dr. Ricardo Reges. Aqui, o compromisso com a
              sua continência não termina na cirurgia.{' '}
              <Link href="/pos-prostatectomia/">
                Ver tratamento da incontinência →
              </Link>
            </p>
          </div>
          <div className="callout">
            <h3>&ldquo;E a parte sexual?&rdquo;</h3>
            <p>
              É importante separar duas coisas que costumam ser confundidas:
            </p>
            <ul>
              <li>
                <strong>Ereção:</strong> os estudos das técnicas a laser não
                mostram piora da função erétil atribuível à cirurgia; a disfunção
                erétil nova é incomum. No Rezūm, o ensaio clínico randomizado com
                5 anos de seguimento não encontrou declínio clinicamente
                significativo da função erétil<sup>5·6</sup>.
              </li>
              <li>
                <strong>Ejaculação:</strong> nas técnicas de remoção de tecido
                (enucleação, vaporização), a <strong>ejaculação retrógrada</strong>{' '}
                é frequente — o sêmen passa a ir para a bexiga em vez de sair, sem
                dor e sem alterar a sensação do orgasmo. Para homens em que a
                preservação ejaculatória é prioridade, o Rezūm apresenta as
                melhores taxas: no seguimento de 5 anos, os pacientes mantiveram
                ejaculação anterógrada, sem piora significativa dos escores
                ejaculatórios<sup>5·6</sup>.
              </li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              Falar disso abertamente na consulta não é constrangimento — é parte
              do planejamento cirúrgico.
            </p>
          </div>
          <VideoSlot label="Cirurgia de próstata e vida sexual: o que é mito" />

          {/* S5 */}
          <h2>Como é a recuperação</h2>
          <p>
            Cada caso tem seu ritmo, mas o roteiro típico da cirurgia a laser é
            este:
          </p>
          <ul>
            <li>
              <strong>Internação:</strong> alta em 24–48 horas na maioria dos
              casos.
            </li>
            <li>
              <strong>Sonda:</strong> retirada precoce — frequentemente em 24–48
              horas.
            </li>
            <li>
              <strong>Primeiros dias:</strong> ardência ao urinar e urgência são
              esperadas e transitórias; sangue diluído na urina pode aparecer e
              desaparecer nas primeiras semanas.
            </li>
            <li>
              <strong>Retorno ao trabalho:</strong> atividades leves em poucos
              dias; esforço físico e atividade sexual, em geral, liberados entre
              2 e 4 semanas.
            </li>
            <li>
              <strong>Resultado:</strong> a melhora do jato costuma ser percebida
              de imediato; o padrão urinário segue refinando ao longo de semanas.
            </li>
          </ul>
          <Figure
            src="/figuras/fig-recuperacao-laser.svg"
            alt="Linha do tempo típica da recuperação da cirurgia a laser da próstata: D0, D2, semana 1 e semana 4."
            caption="Recuperação típica — do dia da cirurgia à quarta semana."
            width={900}
            height={300}
          />

          {/* S6 */}
          <h2>Por que o Dr. Ricardo Reges</h2>
          <p>Fatos, não adjetivos:</p>
          <ul>
            <li>
              Cirurgia a laser da próstata desde 2012 — mais de uma década de
              prática contínua, com mais de cem procedimentos realizados.
            </li>
            <li>
              Formação internacional na técnica: BPH Laser Therapy — American
              Urological Association (2011); Current Trends in the Treatment of
              BPH — GreenLight, F. Brantley Scott Physician Academy, Houston,
              Texas (2012, 40h).
            </li>
            <li>
              Entre os primeiros urologistas do Brasil a realizar a vaporização
              GreenLight, com participação no treinamento de dezenas de
              urologistas na América Latina na técnica.
            </li>
            <li>
              Medalha Alberto Gentile (AMB/SBU) — concedida anualmente a um único
              residente de urologia no país; 1º lugar nacional no título de
              especialista da SBU (2007).
            </li>
            <li>
              Doutorado em Cirurgia (UNICAMP) e pós-doutorado (UFC); Professor de
              Urologia da Universidade Federal do Ceará, com mais de 35 artigos
              publicados em periódicos como <em>The Journal of Urology</em> e{' '}
              <em>International Brazilian Journal of Urology</em>.
            </li>
            <li>
              Membro internacional da American Urological Association desde 2012;
              ex-membro do Departamento de HPB da Sociedade Brasileira de
              Urologia.
            </li>
          </ul>
          <VideoSlot label="Minha trajetória com o laser de próstata" />

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
            O primeiro passo não é escolher uma técnica — é uma avaliação
            completa: história, exames de imagem, volume prostático e, quando
            indicado, estudo urodinâmico. A partir dela, você recebe a indicação
            certa para o seu caso, com todas as opções na mesa.
          </p>
          <CtaBlock
            campaign="laser-prostata"
            whatsappPrefix="Prefere falar com a equipe? WhatsApp da clínica: "
          />

          <References
            items={[
              <>
                Houssin V, et al. Stress urinary incontinence after HoLEP:
                incidence and risk factors. <em>J Mens Health</em> (2022) — SUI
                7,3% em 1 mês; 2,6–2,7% persistente em 12 meses.
              </>,
              <>
                Elzayat EA, et al. / Cho MC, et al. Transient urinary
                incontinence after HoLEP — TUI 16,6%, 80% recuperados em 3 meses.{' '}
                <em>World J Mens Health</em> (2015).
              </>,
              <>
                Nevo A, et al. Stress urinary incontinence post-HoLEP:
                single-surgeon experience (589 pacientes). <em>Int Braz J Urol</em>{' '}
                (2020) — tSUI 8,8%, 88,5% resolvidos em 6 semanas; SUI persistente
                1,5%.
              </>,
              <>
                Yang M, et al. Meta-analysis of postoperative urinary
                incontinence in HoLEP. <em>Ther Adv Urol</em> (2024).
              </>,
              <>
                McVary KT, et al. Preservation of sexual function 5 years after
                water vapor thermal therapy (Rezūm II RCT). <em>Sex Med</em>{' '}
                (2021).
              </>,
              <>
                Rezūm II 5-year outcomes. <em>J Urol</em> (2021) — retratamento
                cirúrgico 4,4% em 5 anos.
              </>,
              <>
                Bachmann A, Tubaro A, Barber N, et al. GOLIATH study: 180-W XPS
                GreenLight vs TURP. <em>Eur Urol</em> (2014).
              </>,
              <>
                Estudos de PVP GreenLight em pacientes sob terapia antitrombótica
                — segurança com taxas de transfusão desprezíveis (Global
                GreenLight Group; séries multicêntricas).
              </>,
              <>
                Systematic review — Rezūm: retratamento 4,4–7,5% em 5 anos.{' '}
                <em>Sex Med Rev</em> (2022).
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
