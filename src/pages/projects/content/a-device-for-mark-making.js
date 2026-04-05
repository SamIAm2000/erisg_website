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

export default function ADeviceForMarkMakingContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="4LrRDydORug" />
        </Column>
        <Column>
          <ProjectTitle>A Device for Mark-Making</ProjectTitle>
          <Br />
          <ProjectMeta>Individual project, Mar. 2023</ProjectMeta>
          <Br />
          <Br />
          Programmed microcontroller in C++, programmed visualization on the Processing platform in
          Java. Exterior container made from concrete and metal wire.
          <Br />
          <Br />
          Mark-making is an ongoing process. You can change the marks that you make, yet you can’t
          change the marks others have made before you, though their trace might fade faint. Think
          about the word <i>historicity</i>.
          <Br />
          <Br />
          See code{' '}
          <ExternalLink href="https://github.com/SamIAm2000/CS-3930-Creative-Embedded-Systems/tree/main/Module_2">
            here
          </ExternalLink>
          .
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem
          spanFullWidth
          name="X1540675706607978512280146805262_conc1.JPG"
        />
        <GalleryItem name="B1560637059784744399190666117646_ezgif-1-c83fc0eaa0.gif" />
        <GalleryItem name="U1560637059766297655116956566030_ezgif-1-73cd40d02c.gif" />
        <GalleryItem name="Q1540706216987720849740942672398_conc2.JPG" />
        <GalleryItem name="G1540708358876068736304399909390_drawing.png" />
      </Gallery>
      <Br />
    </>
  );
}
