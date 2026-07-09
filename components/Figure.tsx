import Image from 'next/image';

// Figura com legenda. width/height evitam layout shift (CLS).
// - SVG/raster único: passe `src` (usa next/image).
// - Raster com WebP + fallback: passe `webp` (fonte WebP) e `src` (fallback
//   JPG/PNG); renderiza <picture> para servir WebP a quem suporta.
export default function Figure({
  src,
  webp,
  alt,
  caption,
  width,
  height,
  priority,
}: {
  src: string;
  webp?: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure className="figure">
      {webp ? (
        <picture>
          <source srcSet={webp} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{ width: '100%', height: 'auto' }}
          />
        </picture>
      ) : (
        <Image src={src} alt={alt} width={width} height={height} priority={priority} />
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
