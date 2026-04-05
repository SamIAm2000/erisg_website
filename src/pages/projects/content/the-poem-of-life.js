import React from 'react';
import {
  Br,
  Column,
  ColumnSet,
  Gallery,
  GalleryItem,
  ProjectMeta,
  ProjectTitle,
  YoutubeEmbed,
} from '../../../components/project';

export default function ThePoemOfLifeContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="4seEMUTgprs" />
        </Column>
        <Column>
          <ProjectTitle>The Poem of Life</ProjectTitle>
          <Br />
          <ProjectMeta>Class project and installation, Feb. 2023</ProjectMeta>
          <Br />
          <Br />
          Designed as part of a group installation on generative art by the students of COMS 3930
          Creative Embedded Systems at Barnard College. 
          <Br />
          <Br />
          Made on an ESP-32 and programmed with C++. 
          <Br />
          <Br />
          It wakes up, lives, dies, and repeats.
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="D1540740717785587956125653664270_tesps.png" />
        <GalleryItem name="K1540774207923240752111450718734_ezgif-5-214c0fe327.gif" />
      </Gallery>
      <Br />
    </>
  );
}
