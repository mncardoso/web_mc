import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  tall?: boolean;
  /** Gallery: show full frame on a matte. Cards/heroes stay cropped. */
  fit?: 'cover' | 'contain';
  priority?: boolean;
};

/** Project still / screenshot. */
export function ProjectMedia({
  src,
  alt,
  tall = false,
  fit = 'cover',
  priority = false,
}: Props) {
  const classes = [
    'media-ph',
    tall ? 'media-ph--tall' : '',
    fit === 'contain' ? 'media-ph--contain' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <Image
        className="media-ph__img"
        src={src}
        alt={alt}
        fill
        sizes={
          tall
            ? '(max-width: 768px) 100vw, min(1100px, 100vw)'
            : '(max-width: 768px) 100vw, 50vw'
        }
        priority={priority}
      />
    </div>
  );
}
