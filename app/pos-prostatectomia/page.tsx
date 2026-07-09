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
    'Incontinência e Disfunção Erétil Após Cirurgia de Próstata — Tratamento em Fortaleza | Dr. Ricardo Reges',
  description:
    'Escape de urina ou disfunção erétil após operar a próstata? Existe tratamento: fisioterapia, sling, esfíncter artificial e prótese. Subespecialista em Fortaleza.',
  alternates: { canonical: '/pos-prostatectomia/' },
  openGraph: {
    title:
      'Incontinência e Disfunção Erétil Após Cirurgia de Próstata — Tratamento em Fortaleza',
    description:
      'Existe tratamento para o escape de urina e a disfunção erétil pós-prostatectomia: fisioterapia, sling, esfíncter artificial e prótese peniana.',
    url: '/pos-prostatectomia/',
  },
};

const FAQ = [
  {
    q: 'Faz quanto tempo que operei — ainda dá tempo de tratar?',
    a: 'Sim. Não existe prazo de validade: homens tratam incontinência e disfunção erétil anos, às vezes décadas, após a prostatectomia. O que muda com o tempo é apenas a expectativa de recuperação espontânea (maior no primeiro ano).',
  },
  {
    q: 'Fiz radioterapia. Posso implantar o esfíncter?',
    a: 'Frequentemente sim — a radioterapia prévia não contraindica, mas aumenta o cuidado necessário no planejamento e o acompanhamento. É uma das razões pelas quais a avaliação individualizada importa.',
  },
  {
    q: 'O esfíncter artificial é difícil de usar?',
    a: 'Não — o controle é uma bomba pequena, implantada, acionada com dois dedos. A destreza necessária é mínima e treinada antes da ativação do dispositivo.',
  },
  {
    q: 'A prótese peniana é perceptível?',
    a: 'Externamente, não. Nos modelos infláveis, o pênis flácido tem aparência natural; a ereção é acionada quando o paciente quiser.',
  },
  {
    q: 'Posso tratar a incontinência e a disfunção erétil ao mesmo tempo?',
    a: 'Embora o implante simultâneo seja descrito na literatura, a conduta adotada aqui é em dois tempos: primeiro a correção da continência — incluindo queixas como a climactúria, o escape de urina durante o orgasmo —, e em um segundo momento o tratamento da função erétil. A sequência protege o resultado de cada etapa e permite ajustar o plano ao que a primeira correção devolver de qualidade de vida.',
  },
  {
    q: 'Convênio cobre?',
    a: 'Os tratamentos cirúrgicos com dispositivos implantáveis são realizados, neste consultório, em regime particular. Todas as condições — honorários, o que está e o que não está incluído — são apresentadas por escrito, com transparência, na avaliação e antes de qualquer decisão. Sendo beneficiário de plano de saúde, você pode verificar junto à sua operadora os direitos de cobertura pela rede credenciada — informação que também prestamos na consulta, para que a sua escolha seja livre e bem informada.',
  },
  {
    q: 'Qual o primeiro passo?',
    a: 'A avaliação: história detalhada, exame físico e, quando indicado, estudo urodinâmico. Dela sai o degrau certo da escada — nem mais, nem menos do que o seu caso precisa.',
  },
];

export default function PosProstatectomiaPage() {
  return (
    <>
      <JsonLd
        data={[
          procedurePageSchema({
            path: '/pos-prostatectomia/',
            name: 'Tratamento da Incontinência Urinária e Disfunção Erétil Após Cirurgia de Próstata',
            description: metadata.description as string,
            procedures: [
              'Esfíncter urinário artificial (AMS 800)',
              'Sling masculino',
              'Prótese peniana (implante peniano inflável)',
              'Fisioterapia do assoalho pélvico',
            ],
          }),
          faqSchema(FAQ),
        ]}
      />

      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Sequelas de cirurgia de próstata</p>
          <h1>
            Incontinência Urinária e Disfunção Erétil Após Cirurgia de Próstata:
            Existe Tratamento
          </h1>
          <p className="subtitle">
            <strong>Prof. Dr. Ricardo Reges</strong> · Urologista · {DOCTOR.crm}{' '}
            · {DOCTOR.rqe}
            <br />
            Subespecialista em reconstrução funcional pós-prostatectomia —
            esfíncter urinário artificial e prótese peniana
          </p>
          <div className="cta-row">
            <AgendarButton campaign="pos-prostatectomia" />
          </div>
        </div>
      </header>

      <div className="section">
        <div className="wrap prose">
          {/* S1 */}
          <h2>Para quem é esta página</h2>
          <p>
            A cirurgia tratou o câncer. O PSA zerou. Todos dizem que deu tudo
            certo — e deu. Mas ninguém preparou você para conviver com o escape de
            urina ao levantar da cadeira, ou para o fim da vida sexual que parecia
            não ter volta.
          </p>
          <p>
            Se essa é a sua história, duas coisas precisam ser ditas com clareza:
          </p>
          <p>
            <strong>Você não está sozinho.</strong> A incontinência e a disfunção
            erétil são as sequelas funcionais mais comuns do tratamento do câncer
            de próstata — em séries publicadas, cerca de 1 em cada 4 homens ainda
            usa protetores 12 meses após a prostatectomia radical<sup>1</sup>, e a
            disfunção erétil atinge a maioria dos operados em algum grau
            <sup>2</sup>. Não é falha sua, e frequentemente não é falha de
            ninguém: é o custo funcional que a doença impõe, mesmo quando a
            cirurgia oncológica — aqui ou em qualquer serviço — foi bem executada.
          </p>
          <p>
            <strong>E, principalmente: existe tratamento.</strong> Para os dois
            problemas. Com resultados documentados há décadas na literatura
            mundial. A maioria dos homens simplesmente nunca foi informada disso —
            e passa anos administrando absorventes e evitando intimidade sem saber
            que há solução.
          </p>
          <p>Esta página existe para corrigir essa lacuna de informação.</p>
          <VideoSlot label="Operou a próstata e ainda usa absorvente? Assista isto" />

          {/* S2 */}
          <h2>O caminho da continência</h2>
          <p>
            O tratamento da incontinência pós-prostatectomia é uma escada —
            começa pelo degrau mais simples e só sobe se necessário:
          </p>
          <Figure
            src="/figuras/fig-escada-continencia.svg"
            alt="A escada do tratamento da incontinência pós-próstata: fisioterapia do assoalho pélvico, sling masculino e esfíncter urinário artificial."
            caption="A escada do tratamento da incontinência — do degrau mais simples ao padrão-ouro."
            width={900}
            height={400}
          />
          <p>
            <strong>1. Fisioterapia do assoalho pélvico.</strong> Primeiro passo
            em praticamente todos os casos, especialmente no primeiro ano, quando
            a recuperação espontânea ainda acontece. Muitos homens resolvem aqui.
          </p>
          <p>
            <strong>2. Sling masculino.</strong> Para incontinências leves a
            moderadas persistentes: uma faixa de suporte implantada sob a uretra
            em cirurgia de curta duração. O Dr. Ricardo Reges trabalha com essa
            técnica desde os anos 2000, com trabalhos publicados sobre resultados
            de longo prazo<sup>3</sup>.
          </p>
          <p>
            <strong>3. Esfíncter urinário artificial.</strong> O padrão-ouro
            mundial para incontinência moderada a grave<sup>4</sup>. Um
            dispositivo implantado que reproduz a função do esfíncter natural: um
            manguito suave envolve a uretra e o próprio paciente o controla por
            uma bomba discreta. Nas séries publicadas, a grande maioria dos
            pacientes alcança a chamada continência social (no máximo um protetor
            leve por dia), com satisfação acima de 80–90%<sup>4‑6</sup>. A maior
            série brasileira publicada — 121 pacientes em centro oncológico de
            referência — encontrou continência adequada em 87,6% dos casos no
            longo prazo<sup>6</sup>.
          </p>
          <p>
            Como todo dispositivo implantável, o esfíncter tem manutenção:
            revisões podem ser necessárias ao longo dos anos (cerca de 20% na
            série brasileira<sup>6</sup>), e a conversa honesta sobre isso faz
            parte da avaliação. Radioterapia prévia é um fator que exige
            planejamento adicional<sup>6</sup>.
          </p>
          <p>
            <strong>O que define o degrau certo:</strong> o grau da perda (quantos
            protetores/dia), o tempo desde a cirurgia, radioterapia prévia e a
            avaliação urodinâmica — o exame que mede objetivamente o comportamento
            da bexiga e do esfíncter.
          </p>
          <div className="crosslinks">
            <Link href="/avaliacao-urodinamica/">
              Avaliação: quem avalia você escreveu o livro do exame →
            </Link>
          </div>

          {/* S3 */}
          <h2>O caminho da função sexual</h2>
          <p>A mesma lógica de escada, honesta sobre cada degrau:</p>
          <p>
            <strong>1. Medicamentos orais (inibidores de fosfodiesterase).</strong>{' '}
            Primeira linha — mas após a prostatectomia radical, a resposta depende
            do grau de preservação dos nervos, e uma parte significativa dos
            homens não responde<sup>2</sup>.
          </p>
          <p>
            <strong>2. Injeções intracavernosas e dispositivos a vácuo.</strong>{' '}
            Segunda linha, eficaz para muitos; exige adaptação e constância.
          </p>
          <p>
            <strong>3. Prótese peniana.</strong> Para quem não respondeu ou não se
            adaptou às linhas anteriores, é o tratamento definitivo — e o mais bem
            avaliado pelos próprios pacientes em toda a medicina sexual: as taxas
            de satisfação nas séries publicadas ficam consistentemente acima de
            84–90%<sup>7‑9</sup>, com confiabilidade mecânica de 92–94% dos
            dispositivos em anos de uso<sup>9</sup>. Nos modelos infláveis de três
            volumes, a ereção e a flacidez se aproximam do estado natural — o
            dispositivo é invisível externamente.
          </p>
          <p>
            A prótese não recupera a ejaculação nem altera a sensibilidade ou o
            orgasmo — ela devolve a rigidez, e com ela a espontaneidade que as
            outras linhas não oferecem. A escolha do modelo (inflável ou maleável)
            é individualizada na consulta.
          </p>
          <VideoSlot label="Prótese peniana: como funciona de verdade" />

          {/* S4 */}
          <h2>Por que tratar aqui</h2>
          <p>Fatos, não adjetivos:</p>
          <ul>
            <li>
              Formação internacional específica no esfíncter urinário artificial:{' '}
              <strong>
                AMS 800 Artificial Urinary Sphincter — F. Brantley Scott Physician
                Academy, Houston, Texas (2011, 40h)
              </strong>{' '}
              — a academia que leva o nome do criador do dispositivo.
            </li>
            <li>
              Duas décadas de prática em cirurgia reconstrutiva funcional:
              publicações sobre sling masculino e incontinência pós-prostatectomia
              desde 2005<sup>3</sup>; orientação de pesquisas acadêmicas sobre o
              esfíncter urinário artificial.
            </li>
            <li>
              <strong>
                Diretoria do Departamento de Sexualidade da Sociedade Brasileira
                de Urologia (2009–2018)
              </strong>{' '}
              — quase uma década à frente do tema no país.
            </li>
            <li>
              Autor do livro{' '}
              <strong>“Avaliação Urodinâmica e suas Aplicações Clínicas”</strong>{' '}
              (Atheneu, 345 p.) — a avaliação que define a indicação correta do
              seu tratamento.
            </li>
            <li>
              Professor de Urologia da Universidade Federal do Ceará; doutorado
              (UNICAMP) e pós-doutorado; expertise reconhecida por centros de
              referência internacionais em reconstrução urológica.
            </li>
            <li>
              Experiência no implante de prótese peniana inflável, com atuação em
              programas de educação médica em restauração erétil ao lado de
              referências internacionais da área.
            </li>
          </ul>

          {/* S5 — FAQ */}
          <h2>Perguntas frequentes</h2>
          {FAQ.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}

          {/* S6 */}
          <h2>O primeiro passo</h2>
          <p>
            Conviver com absorventes ou abrir mão da vida íntima não é o preço
            obrigatório de ter vencido um câncer. O primeiro passo é uma conversa
            — sem constrangimento, com um especialista que dedicou a carreira
            exatamente a isso.
          </p>
          <CtaBlock
            campaign="pos-prostatectomia"
            whatsappPrefix="Prefere falar com a equipe? WhatsApp da clínica: "
          />

          <References
            items={[
              <>
                Penson DF, et al. / NEJM series — 24% dos homens usando protetores
                12 meses após prostatectomia radical (n=557).
              </>,
              <>
                Revisões de disfunção erétil pós-prostatectomia — falha em
                recuperar função basal em 77–90% no primeiro ano em séries
                selecionadas; maioria dos operados afetada em algum grau.{' '}
                <em>Int Urol</em> reviews.
              </>,
              <>
                Publicações do autor sobre sling masculino: D’Ancona C, Reges R,
                Palma P, Netto NR Jr. Evaluation of Male Sling and Health-Related
                Quality of Life for Stress Urinary Incontinence: Are the Long Term
                Results Maintained? <em>Eur Urol Suppl</em> (2007); D’Ancona C,
                Oliveira RRM. Sling masculino: quando indicar e quando não indicar.{' '}
                <em>Urologia Contemporânea</em> (2008); Oliveira RRM, et al.
                Incontinência urinária no homem: resultados a longo prazo do
                tratamento pela técnica de sling (2005).
              </>,
              <>
                James MH, McCammon KA. Artificial urinary sphincter for
                post-prostatectomy incontinence: a review. <em>Int J Urol</em>{' '}
                (2014) — padrão-ouro; satisfação &gt;80%.
              </>,
              <>
                Montague DK. Artificial urinary sphincter: long-term results and
                patient satisfaction. <em>Adv Urol</em> (2012).
              </>,
              <>
                Série brasileira single-center, 121 pacientes, centro oncológico
                de referência. <em>Int Braz J Urol</em> (2018) — continência
                adequada 87,6%; revisão 19,8%; radioterapia como fator de risco.
              </>,
              <>
                Revisões IPP pós-prostatectomia — satisfação 84–100%.{' '}
                <em>Int J Impot Res</em> (2025); <em>Investig Clin Urol</em> (2022)
                — satisfação &gt;90%, IIEF-5 de 8,2 → 20,6.
              </>,
              <>
                Systematic review — implante simultâneo de prótese peniana +
                dispositivo anti-incontinência. <em>Int J Impot Res</em> (2025).
              </>,
              <>
                Revisão de confiabilidade mecânica dos dispositivos infláveis —
                92–94% livres de falha mecânica. <em>PMC</em> review.
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
