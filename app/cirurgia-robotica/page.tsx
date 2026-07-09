import type { Metadata } from 'next';
import Link from 'next/link';
import { AgendarButton, CtaBlock } from '@/components/Cta';
import References from '@/components/References';
import VideoSlot from '@/components/VideoSlot';
import JsonLd from '@/components/JsonLd';
import { procedurePageSchema, faqSchema } from '@/lib/schema';
import { DOCTOR } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cirurgia Robótica do Câncer de Próstata em Fortaleza | Dr. Ricardo Reges',
  description:
    'Prostatectomia robótica em Fortaleza: como funciona, para quem é indicada, números reais de continência e função sexual, e o acompanhamento completo do diagnóstico à reabilitação.',
  alternates: { canonical: '/cirurgia-robotica/' },
  openGraph: {
    title: 'Cirurgia Robótica do Câncer de Próstata em Fortaleza',
    description:
      'Prostatectomia robótica: como funciona, indicações, números reais de continência e função sexual, e acompanhamento completo.',
    url: '/cirurgia-robotica/',
  },
};

const FAQ = [
  {
    q: 'Robótica é melhor que cirurgia aberta?',
    a: 'Em resultados oncológicos, as técnicas bem executadas são equivalentes. As vantagens consistentes da robótica são perioperatórias — menos sangramento, menos dor, internação e recuperação mais curtas — e a precisão que ela dá ao cirurgião nos passos delicados. A experiência do cirurgião pesa mais que a plataforma.',
  },
  {
    q: 'Quanto tempo entre a decisão e a cirurgia?',
    a: 'Há tempo para decidir bem — e a ciência atualizou essa resposta. A recomendação clássica de aguardar 6 a 8 semanas após a biópsia não é mais obrigatória na era robótica: uma meta-análise com mais de 8.500 pacientes mostrou que o intervalo biópsia–cirurgia não impactou nenhum desfecho da prostatectomia robótica, sendo segura mesmo em 2 a 6 semanas. No outro extremo, também não convém procrastinar: em tumores de alto risco, adiar a cirurgia por mais de 6 meses associou-se a pior controle da doença. O equilíbrio: semanas para exames completos e segunda opinião são bem-vindas; meses de adiamento, especialmente no alto risco, não.',
  },
  {
    q: 'O robô pode falhar durante a cirurgia?',
    a: 'Falhas são raríssimas e os protocolos preveem a conversão segura da cirurgia. O cirurgião está no comando o tempo todo.',
  },
  {
    q: 'E se a biópsia da peça mostrar algo diferente?',
    a: 'A análise da peça inteira (patologia definitiva) refina o estadiamento. Em parte dos casos ela muda o plano de seguimento — é para isso que ela existe, e o resultado é discutido com você em consulta.',
  },
  {
    q: 'Vou precisar de radioterapia depois?',
    a: 'Na maioria, não. Em cenários específicos (margens, características da peça, evolução do PSA), a radioterapia complementar entra como aliada — a indicação é individualizada e discutida abertamente.',
  },
  {
    q: 'A ejaculação continua depois da cirurgia?',
    a: 'Não — a prostatectomia radical remove as estruturas que produzem o sêmen; o orgasmo é preservado, mas sem ejaculação. É diferente da cirurgia de HPB e importa para quem deseja filhos: a preservação de fertilidade (banco de sêmen) deve ser conversada antes.',
  },
  {
    q: 'Convênio cobre? Como funciona o particular?',
    a: 'Os honorários médicos desta equipe são em regime particular, apresentados por escrito na avaliação, antes de qualquer decisão. Em muitos casos, as despesas hospitalares podem correr pelo seu plano de saúde, conforme o seu contrato e a rede credenciada — orientamos esse caminho na consulta. E se a sua preferência for realizar a cirurgia integralmente pelo plano, indicamos com tranquilidade colegas de referência credenciados: a escolha certa é a que atende você, e ela é sua.',
  },
];

export default function RoboticaPage() {
  return (
    <>
      <JsonLd
        data={[
          procedurePageSchema({
            path: '/cirurgia-robotica/',
            name: 'Cirurgia Robótica do Câncer de Próstata (Prostatectomia Radical Robô-assistida)',
            description: metadata.description as string,
            procedures: ['Prostatectomia radical robô-assistida (RARP)'],
          }),
          faqSchema(FAQ),
        ]}
      />

      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Câncer de próstata</p>
          <h1>Cirurgia Robótica do Câncer de Próstata em Fortaleza</h1>
          <p className="subtitle">
            <strong>Prof. Dr. Ricardo Reges</strong> · Urologista · {DOCTOR.crm}{' '}
            · {DOCTOR.rqe}
            <br />
            Uro-oncologia e cirurgia robótica · Subespecialista nas duas
            complicações mais temidas — continência e função sexual
          </p>
          <div className="cta-row">
            <AgendarButton campaign="robotica-prostata" />
          </div>
        </div>
      </header>

      <div className="section">
        <div className="wrap prose">
          {/* S1 */}
          <h2>O diagnóstico e a decisão</h2>
          <p>
            Receber o diagnóstico de câncer de próstata muda o chão. E quase
            imediatamente vem a segunda onda: as decisões. Operar ou não?
            Robótica? Radioterapia? Esperar e vigiar? Cada conhecido tem uma
            opinião, e a internet tem mil.
          </p>
          <p>Duas informações para devolver o chão:</p>
          <p>
            <strong>Na maioria dos casos, há tempo.</strong> O câncer de próstata
            localizado costuma permitir semanas para decidir com calma, ouvir uma
            segunda opinião e escolher bem — decidir bem vale mais do que decidir
            rápido.
          </p>
          <p>
            <strong>
              E não existe um único tratamento certo — existe o certo para o seu
              caso.
            </strong>{' '}
            A cirurgia (prostatectomia radical) é uma das opções curativas para o
            câncer localizado; a radioterapia é outra; e, em tumores de muito
            baixo risco, a vigilância ativa — acompanhar de perto sem tratar de
            imediato — é conduta reconhecida pelas diretrizes. A avaliação honesta
            dessas rotas, com seus exames na mesa, é o começo de tudo.
          </p>
          <VideoSlot label="Diagnóstico de câncer de próstata: as 3 primeiras perguntas" />

          {/* S2 */}
          <h2>O que é a cirurgia robótica</h2>
          <p>
            Primeiro, o que ela não é: o robô não opera ninguém. A prostatectomia
            radical robô-assistida é realizada pelo cirurgião, que comanda cada
            movimento a partir de um console — o sistema robótico traduz esses
            comandos em instrumentos milimétricos, com visão tridimensional
            ampliada em até dez vezes e movimentos mais precisos do que a mão
            humana consegue executar sozinha em espaço tão profundo e estreito
            quanto a pelve.
          </p>
          <p>
            Na prática, isso significa: incisões pequenas em vez de um corte
            único, sangramento significativamente menor, internação mais curta e
            retorno mais rápido às atividades, com resultados oncológicos
            equivalentes aos da cirurgia aberta bem executada<sup>1</sup>. A
            precisão importa especialmente em dois momentos da cirurgia: a
            preservação dos feixes nervosos responsáveis pela ereção (quando o
            tumor permite) e a reconstrução da junção entre bexiga e uretra,
            decisiva para a continência.
          </p>

          {/* S3 */}
          <h2>Para quem a cirurgia é indicada</h2>
          <p>
            A indicação nasce do cruzamento de três coisas: o tumor (PSA,
            biópsia/Gleason, exames de imagem), o paciente (idade, saúde geral,
            expectativa de vida) e as prioridades dele. Em linhas gerais:
          </p>
          <ul>
            <li>
              <strong>
                Câncer localizado de risco intermediário ou alto
              </strong>{' '}
              em paciente com boa expectativa de vida — cenário clássico da
              cirurgia.
            </li>
            <li>
              <strong>Muito baixo risco</strong> — a vigilância ativa deve estar
              na conversa antes de qualquer tratamento, com a informação
              completa: ela exige compromisso duradouro com PSA regular, exames
              de imagem e biópsias periódicas — um acompanhamento que parte dos
              pacientes, com os anos, passa a sentir como um peso. Escolher vigiar
              também é uma decisão ativa.
            </li>
            <li>
              <strong>Radioterapia</strong> — rota curativa legítima para muitos
              perfis. A conversa honesta inclui um dado que pesa na ordem das
              opções para alguns pacientes: se o tumor retornar após a
              radioterapia, a cirurgia de resgate é tecnicamente mais complexa e
              de maior morbidade do que a cirurgia como primeiro tratamento.
              Nenhum desses fatos decide sozinho — juntos, eles informam a
              decisão.
            </li>
            <li>
              <strong>Idade e comorbidades</strong> — pesam na escolha entre
              cirurgia e radioterapia; não há resposta única.
            </li>
            <li>
              <strong>Preservação nervosa</strong> — a decisão de preservar os
              feixes (uni ou bilateral) é feita caso a caso, equilibrando
              segurança oncológica e função sexual; é uma conversa explícita antes
              da cirurgia, não uma surpresa depois.
            </li>
          </ul>
          <div className="crosslinks">
            <Link href="/avaliacao-urodinamica/">Avaliação e diagnóstico →</Link>
          </div>

          {/* S4 */}
          <h2>As duas perguntas que todo homem quer fazer</h2>
          <div className="callout">
            <h3>&ldquo;Vou ficar incontinente?&rdquo;</h3>
            <p>
              Os números da literatura: nas grandes séries de prostatectomia
              robótica, a recuperação da continência em 12 meses fica entre 84% e
              97%<sup>2</sup> — e séries reais reportam, aos 12 meses, cerca de
              80–84% dos pacientes sem protetor ou com apenas um protetor de
              segurança<sup>3·4</sup>, com a recuperação evoluindo ao longo do
              primeiro ano. A idade e a preservação nervosa influenciam o ritmo
              <sup>5</sup>.
            </p>
            <p style={{ marginBottom: 0 }}>
              E para a minoria em que a incontinência persiste, este consultório
              tem uma particularidade: o tratamento — da fisioterapia ao esfíncter
              urinário artificial — é subespecialidade do próprio cirurgião. O
              compromisso com a sua continência não termina quando o PSA zera.{' '}
              <Link href="/pos-prostatectomia/">
                Ver tratamento da incontinência →
              </Link>
            </p>
          </div>
          <div className="callout">
            <h3>&ldquo;E a ereção?&rdquo;</h3>
            <p>
              Resposta honesta: depende de três fatores — a função antes da
              cirurgia, a idade, e quanto de preservação nervosa o tumor
              permitiu. Com preservação bilateral em pacientes previamente
              potentes, os estudos mostram manutenção de relações satisfatórias em
              torno de 70–78% aos 12 meses; com preservação unilateral, os números
              caem substancialmente<sup>6</sup>. Os resultados são menos
              favoráveis em homens mais velhos ou com disfunção erétil prévia — e
              essa expectativa individualizada é conversada antes, não depois. A
              recuperação é gradual (meses, não semanas) e frequentemente apoiada
              por medicação no primeiro ano.
            </p>
            <p style={{ marginBottom: 0 }}>
              E, de novo, o ciclo completo: para quem não recupera função
              satisfatória, a escada de tratamento — do medicamento à prótese
              peniana — é conduzida aqui, por quem dirigiu o Departamento de
              Sexualidade da Sociedade Brasileira de Urologia por quase uma
              década.{' '}
              <Link href="/pos-prostatectomia/">Ver função sexual →</Link>
            </p>
          </div>
          <VideoSlot label="Cirurgia de próstata: a verdade sobre continência e ereção" />

          {/* S5 */}
          <h2>Como é a recuperação</h2>
          <ul>
            <li>
              <strong>Internação:</strong> tipicamente 1–2 diárias.
            </li>
            <li>
              <strong>Sonda vesical:</strong> por cerca de uma a duas semanas,
              retirada em consultório.
            </li>
            <li>
              <strong>Dor:</strong> as incisões pequenas tornam o pós-operatório
              notavelmente mais confortável que o da cirurgia aberta; analgesia
              simples costuma bastar.
            </li>
            <li>
              <strong>Atividades:</strong> caminhadas desde os primeiros dias;
              retorno ao trabalho leve em torno de 15 dias; esforço físico após
              4–6 semanas.
            </li>
            <li>
              <strong>Fisioterapia do assoalho pélvico:</strong> começa cedo e
              acelera a continência.
            </li>
            <li>
              <strong>PSA de controle:</strong> o primeiro é colhido por volta de
              90 dias após a cirurgia; o seguimento é programado desde a alta.
            </li>
          </ul>

          {/* S6 */}
          <h2>Por que o Dr. Ricardo Reges</h2>
          <p>Fatos, não adjetivos:</p>
          <ul>
            <li>
              Formação em uro-oncologia na Universidade Estadual de Campinas
              (UNICAMP), um dos centros formadores de referência do país, com
              publicações em cirurgia oncológica complexa — incluindo tumores
              renais com trombo de veia cava<sup>7</sup>.
            </li>
            <li>
              Certificação na plataforma robótica pelo programa da Intuitive no
              Hospital Israelita Albert Einstein (São Paulo); prática robótica com
              agenda cirúrgica semanal regular no Hospital São Camilo, em
              Fortaleza — tendo a prostatectomia radical como o procedimento mais
              realizado.
            </li>
            <li>
              Linha de pesquisa ativa em câncer de próstata: orientação de
              doutorado sobre os efeitos da terapia de privação androgênica (UFC),
              com resultados apresentados em periódicos internacionais<sup>8</sup>.
            </li>
            <li>
              Professor de Urologia da Universidade Federal do Ceará; doutorado
              (UNICAMP) e pós-doutorado; membro internacional da American
              Urological Association desde 2012.
            </li>
            <li>
              A particularidade que fecha o ciclo: subespecialização nas duas
              principais sequelas funcionais (esfíncter artificial — formação na
              F. Brantley Scott Academy, Houston; prótese peniana), o que
              significa acompanhamento integral, do diagnóstico à reabilitação
              completa.
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
            Traga seus exames — PSA, biópsia, ressonância se houver. A primeira
            consulta é uma leitura honesta do seu caso e de todas as rotas,
            incluindo as que não passam por cirurgia. A decisão é sua; o mapa
            completo é obrigação nossa.
          </p>
          <CtaBlock campaign="robotica-prostata" />

          <References
            items={[
              <>
                Coughlin GD, et al. / Yaxley JW, et al. RCT robot-assisted vs open
                radical prostatectomy — desfechos oncológicos e funcionais
                equivalentes em 24 meses. <em>Lancet Oncol</em> (2018); revisões
                sistemáticas correlatas.
              </>,
              <>
                Ficarra V, et al. Systematic review and meta-analysis of studies
                reporting urinary continence recovery after RARP.{' '}
                <em>Eur Urol</em> (2012) — continência em 12 meses: 84–97%.
              </>,
              <>
                Coorte real (n=375): continência (zero protetores) 83,5% em 12
                meses. <em>Int J Urol</em> (2024).
              </>,
              <>
                Série em ≥75 anos: continência funcional 83,3% em 12 meses (63,9%
                zero protetores + 19,4% protetor de segurança). <em>IUC</em>{' '}
                (2024).
              </>,
              <>
                Coorte 650 pacientes, 4 anos: preservação nervosa e idade como
                determinantes da continência precoce e tardia. <em>BMC Urol</em>{' '}
                (2020).
              </>,
              <>
                Séries de potência pós-RARP: manutenção de relações satisfatórias
                em 12 meses ~77,6% com preservação bilateral vs ~34,4% unilateral,
                em pacientes previamente potentes. <em>BJU Int</em> (2014);
                meta-análise de RCTs RARP vs LRP com vantagem de potência para
                RARP. <em>Eur Urol</em> (2023).
              </>,
              <>
                Denardi F, Reis LO, Oliveira RRM, Ferreira U. Renal tumor with
                inferior vena cava thrombus: surgical approach and prognosis.{' '}
                <em>Actas Urol Esp</em> (2009); Reges R, et al. Primary
                leiomyosarcoma of the inferior vena cava. <em>Int J Urol</em>{' '}
                (2008).
              </>,
              <>
                Cintra AR, …, Reges R. Androgen deprivation therapy — endothelial
                function and metabolic parameters (série prospectiva).{' '}
                <em>J Sex Med</em> (2023–2024).
              </>,
              <>
                Zhang et al. Does time interval between prostate biopsy and
                surgery affect outcomes of radical prostatectomy? Systematic
                review and meta-analysis (9 estudos, 8.579 pacientes).{' '}
                <em>World J Urol</em> (2019) — sem impacto do intervalo nos
                desfechos da via robótica; segura em 2–6 semanas. Série coreana
                (n=1.446): RALP em ≤2, ≤4 ou ≤6 semanas sem prejuízo cirúrgico ou
                oncológico. <em>Int J Urol</em> (2016).
              </>,
              <>
                Coorte de 7.350 prostatectomias: em alto risco, aguardar &gt;6
                meses associou-se a maior recorrência bioquímica (HR 3,38).{' '}
                <em>Urol Oncol / J Urol</em> (2019).
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
