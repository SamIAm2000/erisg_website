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

export default function TouchingGrassInVrContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="xrt-q6cE2XU" />
        </Column>
        <Column>
          <ProjectTitle>
            Touching Grass
            <Br />
            in VR
          </ProjectTitle>
          <Br />
          <ProjectMeta>Multimedia Installation, 05/02/24</ProjectMeta>
          <Br />
          <Br />
          Made in Unity/C# for the Meta Quest. I designed the terrain, game environment, and game
          controls all by myself. Uses hand tracking and gesture detection from the Meta XR library.
          <Br />
          <Br />
          The more grass you touch, the more points you get. Oh and you can also throw sheep.
          <Br />
          <Br />
          I wanted to focus on the irony of the act of “touching grass” in a virtual space that’s
          inside a room underground with no windows. I wanted to highlight the artificiality of a
          lot of the technological spaces we frequent today. The sheep throwing was a bonus feature,
          and I turned off all gravity in the virtual world so that the sheep would drift away
          forever.
          <Br />
          <Br />
          Check out the project{' '}
          <ExternalLink href="https://github.com/SamIAm2000/touchinggrass">here</ExternalLink>
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="X1777352422585902604620367004174_DSCF0026-min-min.JPG" />
        <GalleryItem name="E1777352422659689580915205210638_DSCF0062-min-min.JPG" />
        <GalleryItem name="M1777352422622796092767786107406_DSCF0033-min-min.JPG" />
        <GalleryItem name="V1777352422641242836841495659022_DSCF0049-min-min.JPG" />
        <GalleryItem name="J1777352422678136324988914762254_DSCF0063-min-min.JPG" />
        <GalleryItem name="G1777352422604349348694076555790_DSCF0027-min-min.JPG" />
      </Gallery>
      <Br />
    </>
  );
}
