import React from 'react';
import { useProjectMediaSrc } from './ProjectPageContext';

export function ColumnSet({ children }) {
  return <div className="eris-column-set">{children}</div>;
}

export function Column({ children }) {
  return <div className="eris-column-unit">{children}</div>;
}

export function Gallery({ children, columns }) {
  const className =
    columns === 3
      ? 'eris-gallery-grid eris-gallery-grid-cols-3'
      : 'eris-gallery-grid';
  return <div className={className}>{children}</div>;
}

function GalleryItemImage({ name, alt, className }) {
  const url = useProjectMediaSrc(name);
  return (
    <div className={className}>
      <img src={url} alt={alt} loading="lazy" />
    </div>
  );
}

/** One cell in a gallery: pass `name` for an image, or `children` for custom markup (e.g. video). */
export function GalleryItem({ name, alt = '', spanFullWidth, children }) {
  const className = spanFullWidth ? 'eris-media eris-grid-span-2' : 'eris-media';
  if (children) {
    return <div className={className}>{children}</div>;
  }
  return <GalleryItemImage name={name} alt={alt} className={className} />;
}

/** Hero / column image (same styling as a gallery cell). */
export function ProjectImage({ name, alt = '', spanFullWidth }) {
  const url = useProjectMediaSrc(name);
  const className = spanFullWidth ? 'eris-media eris-grid-span-2' : 'eris-media';
  return (
    <div className={className}>
      <img src={url} alt={alt} loading="lazy" />
    </div>
  );
}

/** Use `bare` when wrapping with `GalleryItem` (it already adds `.eris-media`). */
export function ProjectVideo({ name, bare }) {
  const url = useProjectMediaSrc(name);
  const video = (
    <video controls playsInline preload="metadata" src={url} className="w-full h-auto block" />
  );
  if (bare) return video;
  return <div className="eris-media">{video}</div>;
}

const YT_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

export function YoutubeEmbed({ videoId }) {
  return (
    <div className="eris-embed">
      <iframe
        title="Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow={YT_ALLOW}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

export function ProjectTitle({ children }) {
  return (
    <h2 className="eris-project-title">
      <b>{children}</b>
    </h2>
  );
}

export function ProjectMeta({ children }) {
  return <i className="eris-project-meta">{children}</i>;
}

export function ExternalLink({ href, children, ...rest }) {
  const external = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Line break spacer (Cargo-style gaps). */
export function Br() {
  return <br />;
}
