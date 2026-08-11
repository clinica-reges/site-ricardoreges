'use client';

import { usePathname } from 'next/navigation';
import { whatsappUrl } from '@/lib/site';

// Link de WhatsApp com a mensagem da página já preenchida.
//
// É client component só por causa do `usePathname`: o rodapé e o botão
// flutuante moram no layout e não recebem a rota por prop. Como o site é
// exportado estático, o Next pré-renderiza isto rota a rota — o href já sai
// certo no HTML, sem depender de hidratação (importa para quem copia o link,
// e para o clique que acontece antes do JS carregar).
export default function WhatsappAnchor({
  children,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const pathname = usePathname();
  return (
    <a
      className={className}
      href={whatsappUrl(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
