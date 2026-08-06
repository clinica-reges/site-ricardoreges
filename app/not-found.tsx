import type { Metadata } from 'next';
import Link from 'next/link';
import { AgendarButton, WhatsappLink } from '@/components/Cta';
import { NAV } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Página não encontrada — Dr. Ricardo Reges, Urologista em Fortaleza',
  // A 404 nunca deve entrar no índice, mas os links dela valem ser seguidos.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <header className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Erro 404</p>
          <h1>Esta página mudou de endereço</h1>
          <p className="subtitle">
            O link que você seguiu é de uma versão anterior do site. O conteúdo
            continua no ar — só está em outro endereço. Escolha abaixo por onde
            seguir.
          </p>
        </div>
      </header>

      <div className="section">
        <div className="wrap prose">
          {/* Boa parte de quem cai aqui vem de links antigos de agendamento
              (/agende-seu-atendimento, /contact): o caminho para marcar
              consulta vem primeiro, antes da navegação. */}
          <div className="callout">
            <h3>Você queria marcar uma consulta?</h3>
            <p>Escolha data e horário na agenda em tempo real:</p>
            <AgendarButton campaign="erro-404" size="lg" block>
              Agendar avaliação
            </AgendarButton>
            <p style={{ marginTop: '1rem', marginBottom: 0 }}>
              <WhatsappLink prefix="Prefere falar com a equipe? WhatsApp: " />
            </p>
          </div>

          <h2>Ou vá direto para uma das páginas</h2>
          <div className="crosslinks">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/agendar/">Agendar</Link>
          </div>

          <p>
            Se você chegou aqui por um link salvo nos favoritos ou por um
            resultado de busca desatualizado, vale atualizar o endereço para{' '}
            <Link href="/">ricardoreges.com.br</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
