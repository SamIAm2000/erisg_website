import React, { useEffect } from 'react';
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
  if (!text) return null;
  return <p className="eris-caption mt-[0.35em] mb-0 text-left">{text}</p>;
}

function PlaygroundGridItem({ item }) {
  const src = item.kind === 'youtube' ? undefined : playgroundAssetSrc(item.file);

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
        <PlaygroundGridItem
          key={`${item.kind}-${item.file}-${item.youtubeId ?? ''}`}
          item={item}
        />
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
        <p className="eris-playground-intro mb-[1.2em]">{PLAYGROUND_INTRO}</p>

        <PlaygroundGrid items={PLAYGROUND_GALLERY_1} />

        <PlaygroundGrid items={PLAYGROUND_GALLERY_2} />
      </div>
    </Layout>
  );
}

export default Playground;
