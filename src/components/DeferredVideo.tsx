import { getImageProps } from 'next/image';

// Native controls remain usable without JavaScript; only the poster is deferred.
export function DeferredVideo({ src, poster, locale }: { src: string; poster: string; locale?: 'en' | 'zh' }) {
  const { props } = getImageProps({ src: poster, alt: '', width: 960, height: 540, quality: 65,
    sizes: '(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 600px' });
  return <video controls playsInline preload="none" data-poster={props.src} data-poster-srcset={props.srcSet} data-poster-sizes={props.sizes}>
    <source src={src} type="video/mp4" />
    {src === '/assets/video/why-dallas.mp4' && <>
      <track kind="captions" src="/assets/video/why-dallas.en.vtt" srcLang="en" label="English" default={locale === 'en'} />
      <track kind="subtitles" src="/assets/video/why-dallas.zh.vtt" srcLang="zh" label="中文" default={locale === 'zh'} />
    </>}
  </video>;
}
