import { SiteImage } from './SiteImage';

// Keep the supplied poster visible until the missing video asset is provided.
export function VideoPlaceholder({ poster, english = false }: { poster: string; english?: boolean }) {
  return <div className="video-placeholder">
    <SiteImage src={poster} alt={english ? 'Video preview' : '视频预览'} fill loading="lazy" style={{ objectFit: 'cover' }} />
    <span>{english ? 'Video coming soon' : '视频即将上线'}</span>
  </div>;
}
