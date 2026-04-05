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

export default function ElectricMeatContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="eofv4B8JZcw" />
        </Column>
        <Column>
          <ProjectTitle>Electric Meat</ProjectTitle>
          <Br />
          <ProjectMeta>Individual project, Apr. 2023</ProjectMeta>
          <Br />
          <Br />
          Mutual capacitive touch silicone skin for the ESP-32 and Arduino with computer vision and
          blob detection. Programmed microcontroller in C++, programmed visualization on the
          Processing platform in Java. Made with platinum cure silicone and silver conductive threads.
          <Br />
          <Br />
          It also screams. Loudly.
          <Br />
          <Br />
          Actions such as slapping, punching, stroking, clawing, etc. are all welcome.
          <Br />
          <Br />
          I used a 12 input capacitive touch sensor board to get 36 separate signal points by
          overlaying conductive threads in a 6 x 6 arangement.
          <Br />
          <Br />
          See code <ExternalLink href="https://github.com/SamIAm2000/silicone-skin-sensing">here</ExternalLink>
          .
          <Br />
          See how I made it{' '}
          <ExternalLink href="https://samiam2000.github.io/MeMakey/general/2023/05/09/electric-meat.html">
            here
          </ExternalLink>
          .
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="V1540673365494794629653532115470_meat1.JPG" />
        <GalleryItem name="C1540704022636832817547520639502_meat3.JPG" />
        <GalleryItem name="V1540704022599939329400101536270_meat2.JPG" />
        <GalleryItem name="G1666882413338986688383134073358_Screenshot-2024-03-08-at-3.30.57PM.png" />
        <GalleryItem name="C1666882413302093200235714970126_Screenshot-2024-03-08-at-3.28.50PM.png" />
      </Gallery>
      <Br />
    </>
  );
}
