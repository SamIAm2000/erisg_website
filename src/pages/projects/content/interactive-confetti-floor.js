import React from 'react';
import {
  Br,
  Column,
  ColumnSet,
  Gallery,
  GalleryItem,
  ProjectImage,
  ProjectMeta,
  ProjectTitle,
} from '../../../components/project';

export default function InteractiveConfettiFloorContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <ProjectImage name="O1560206241278884741398767993358_Screenshot-2024-01-01-at-4.08.48-PM.png" />
        </Column>
        <Column>
          <ProjectTitle>Interactive Confetti Floor</ProjectTitle>
          <Br />
          <ProjectMeta>Installation, 04/21/2023</ProjectMeta>
          <Br />
          <Br />
          Created using Touch Designer and Microsoft Kinect Sensors. Used a projector mounted on the
          ceiling to project confetti onto floor, used depth sensors from Kinect to detect human
          motion.
          <Br />
          <Br />
          Made as a part of Christina Duan’s <i>Lion Dance As Celebration</i> installation in the
          Barnard College Movement Lab.
          <Br />
          <Br />
          The depth sensor stream is used to detect optical flow, which then displaces particles in a
          particle system.
          <Br />
          <Br />
          This confetti floor was inspired by the confetti thrown during the yearly Chinese New Year
          lion dance performances in Manhattan’s Chinatown. Pink paper confetti that represents flower
          petals, along with gold, turquoise, and blue tissue-paper shapes fill the air and line the
          streets during the celebration.
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem
          spanFullWidth
          name="N1560235849575948386315070734862_ezgif-5-e719b53b5b.gif"
        />
        <GalleryItem name="D1606764621109722877878654075406_ezgif-7-634f14e4db.gif" />
        <GalleryItem name="K1606764621128169621952363627022_ezgif-7-0402cd5fef.gif" />
        <GalleryItem name="B1606764621091276133804944523790_ezgif-7-022b440375.gif" />
        <GalleryItem name="E1606772360570326211237001429518_Screenshot-2024-01-30-at-10.21.23-PM.png" />
        <GalleryItem name="Q1606772360551879467163291877902_Screenshot-2024-01-30-at-10.20.37-PM.png" />
        <GalleryItem name="N1606764621146616366026073178638_confetti1.png" />
      </Gallery>
      <Br />
    </>
  );
}
