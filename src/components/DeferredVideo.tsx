import { getImageProps } from 'next/image';

// Native controls remain usable without JavaScript; only the poster is deferred.
export function DeferredVideo({ src, poster }: { src: string; poster: string }) {
  const { props } = getImageProps({ src: poster, alt: '', width: 960, height: 540 });
  return <video controls playsInline preload="none" data-poster={props.src}>
    <source src={src} type="video/mp4" />
  </video>;
}
