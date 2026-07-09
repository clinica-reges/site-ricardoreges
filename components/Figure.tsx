import Image from 'next/image';

// Figura SVG com legenda. width/height evitam layout shift (CLS).
export default function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="figure">
      <Image src={src} alt={alt} width={width} height={height} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
