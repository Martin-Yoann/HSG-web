import { getImageProps, type ImageProps } from 'next/image';
import { preload } from 'react-dom';

// Generate responsive image URLs on the server without hydrating each photograph.
export function SiteImage({ loading = 'lazy', sizes = '(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 600px', ...input }: ImageProps) {
  const hero = loading === 'eager';
  const { props } = getImageProps({
    ...input, loading, sizes: hero ? '100vw' : sizes,
    fetchPriority: hero ? 'high' : 'auto',
  });
  if (hero) preload(props.src, {
    as: 'image', imageSrcSet: props.srcSet, imageSizes: props.sizes, fetchPriority: 'high',
  });
  return <img {...props} />;
}
