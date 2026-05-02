import React, { useEffect, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import Masonry from 'react-masonry-css';
import { YoutubeEmbed } from '../components/project';
import {
  PLAYGROUND_GALLERY_1,
  PLAYGROUND_GALLERY_2,
  PLAYGROUND_INTRO,
  playgroundAssetSrc,
} from '../data/playgroundData';

function Caption({ text }) {
  const nodes = useMemo(() => {
    if (!text) return null;
    const parts = text.split(/(https?:\/\/[^\s]+)/g);
    return parts.map((part, i) => {
      if (/^https?:\/\//.test(part)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      }
      return (
        <React.Fragment key={i}>
          {part.split('\n').map((line, j, arr) => (
            <React.Fragment key={j}>
              {line}
              {j < arr.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    });
  }, [text]);

  if (!text) return null;
  return <p className="eris-caption mt-[0.35em] mb-0 text-left">{nodes}</p>;
}

function PlaygroundGridItem({ item }) {
  const src = playgroundAssetSrc(item.hash, item.file);

  let media;
  if (item.kind === 'youtube' && item.youtubeId) {
    media = <YoutubeEmbed videoId={item.youtubeId} />;
  } else if (item.kind === 'video') {
    const ext = item.file.split('.').pop().toLowerCase();
    const mime =
      ext === 'mov' ? 'video/quicktime' : ext === 'webm' ? 'video/webm' : 'video/mp4';
    media = (
      <video controls playsInline preload="metadata" className="w-full">
        <source src={src} type={mime} />
      </video>
    );
  } else {
    media = <img src={src} alt="" loading="lazy" />;
  }

  return (
    <div className="eris-playground-masonry-item">
      <figure className="m-0">
        <div className="eris-media">{media}</div>
        <Caption text={item.caption} />
      </figure>
    </div>
  );
}

function PlaygroundGrid({ items }) {
  return (
    <Masonry
      breakpointCols={{ default: 3, 899: 2 }}
      className="eris-playground-masonry-grid"
      columnClassName="eris-playground-masonry-grid-column"
    >
      {items.map((item) => (
        <PlaygroundGridItem key={`${item.hash}-${item.file}`} item={item} />
      ))}
    </Masonry>
  );
}

function Playground() {
  useEffect(() => {
    document.title = 'playground';
    return () => {
      document.title = 'Eris Gao Portfolio';
    };
  }, []);

  return (
    <Layout>
      <div className="eris-playground eris-bodycopy">
        <p className="mb-[1.2em]">{PLAYGROUND_INTRO}</p>

        <PlaygroundGrid items={PLAYGROUND_GALLERY_1} />

        <PlaygroundGrid items={PLAYGROUND_GALLERY_2} />
      </div>
    </Layout>
  );
}

export default Playground;
