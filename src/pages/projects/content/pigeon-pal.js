import React from 'react';
import {
  Br,
  Column,
  ColumnSet,
  ExternalLink,
  Gallery,
  GalleryItem,
  ProjectMeta,
  ProjectTitle,
  YoutubeEmbed,
} from '../../../components/project';

export default function PigeonPalContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="6A5m9ziLBVM" />
        </Column>
        <Column>
          <ProjectTitle>Pigeon Pal: A desktop pet that frolics around on your desktop</ProjectTitle>
          <Br />
          <ProjectMeta>Hackathon project, 02/03/24</ProjectMeta>
          <Br />
          <Br />
          Team project developed for the DevFest 2024 hackathon at Columbia University.
          <Br />
          <Br />
          Built in Python using TKinter with custom-made gif animations. We wrote 300~ lines of
          Python, created 12 8-bit pixel animations,  and finished the whole project under 24 hours.
          <Br />
          <Br />
          See code <ExternalLink href="https://github.com/yearofglad/pigeon-pal">here</ExternalLink>.
          <Br />
          See our LinkedIn post{' '}
          <ExternalLink href="https://www.linkedin.com/posts/benhfu_i-am-belatedly-thrilled-to-announce-ugcPost-7161089615498469377-Wbyn?utm_source=share&utm_medium=member_desktop">
            here
          </ExternalLink>{' '}
          - it’s too good not to share :)
        </Column>
      </ColumnSet>
      <Br />
      <Gallery>
        <GalleryItem name="K1622452172427765823356511584782_clip3.gif" />
        <GalleryItem name="H1622452172446212567430221136398_clip2.gif" />
        <GalleryItem name="J1622452172409319079282802033166_clip1.gif" />
      </Gallery>
      <Br />
      <Br />
    </>
  );
}
