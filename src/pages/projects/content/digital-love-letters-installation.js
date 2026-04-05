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

export default function DigitalLoveLettersContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <ProjectImage name="K1645188492041928536926793368078_IMG_1954-min.JPG" />
        </Column>
        <Column>
          <ProjectTitle>Digital Love Letters Installation</ProjectTitle>
          <Br />
          <ProjectMeta>Installation, 02/13/24</ProjectMeta>
          <Br />
          <Br />
          Installation designed as part of my role as a Computing Fellow for the COMS 3930 Creative
          Embedded Systems class at Barnard College, taught by Professor Mark Santolucito.
          <Br />
          <Br />
          I designed and laser-cut the custom paper envelopes that served as display vessels for small
          ESP-32 microcontrollers programmed by students in the class. The students also drew on the
          envelopes with their own designs.  
          <Br />
          <Br />
          The installation took place by the windows of a computer science study space where
          passersby could walk among the digital love letters, which were hung from an air vent and
          allowed to spin freely in the air. The hanging letters altered the experience of viewing
          campus through the windows by imposing an ever-changing foreground on an otherwise static
          background.  
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="L1645195014220337190265539133966_IMG_1913-min.JPG" />
        <GalleryItem name="B1645183066467114833399762518542_IMG_1953-min.JPG" />
        <GalleryItem name="V1645183066485561577473472070158_IMG_1939-min.JPG" />
        <GalleryItem name="R1645195014201890446191829582350_IMG_1920-min.JPG" />
        <GalleryItem
          spanFullWidth
          name="Q1645183066448668089326052966926_IMG_1951.jpg"
        />
      </Gallery>
    </>
  );
}
