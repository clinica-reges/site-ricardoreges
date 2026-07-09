// Seção "Referências" recolhível (details/summary) — diferencial de credibilidade.
export default function References({ items }: { items: React.ReactNode[] }) {
  return (
    <details className="refs">
      <summary>Referências científicas ({items.length})</summary>
      <ol>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </details>
  );
}
