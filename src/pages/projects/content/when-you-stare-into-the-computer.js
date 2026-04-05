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
  ProjectVideo,
  YoutubeEmbed,
} from '../../../components/project';

export default function WhenYouStareIntoTheComputerContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="8nxFzHLhICA" />
        </Column>
        <Column>
          <ProjectTitle>
            when you stare into the computer
            <Br />
            <Br />
            the computer stares back at you
          </ProjectTitle>
          <Br />
          <ProjectMeta>Multimedia Installation, 05/02/24</ProjectMeta>
          <Br />
          <Br />
          Coded in Python using OpenCV, Dlib, and TKinter. 
          <Br />
          <Br />
          The moving windows are actual windows just like any other kind of window you would open on
          a computer. You can move them around with a mouse, and/or close them. I used the TKinter
          library to have them spin in circles, and I put facial features in them using the Dlib
          facial feature detection library. 
          <Br />
          <Br />
          I wanted this piece to be about what a computer or a face detection algorithm sees when it
          looks at your face - only a segmented, incomplete part of a whole. 
          <Br />
          <Br />
          Check out the code{' '}
          <ExternalLink href="https://github.com/SamIAm2000/viz_wall_2024">here</ExternalLink>
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="E1835006367123479821620248183310_i-see-you-thumbnail-min.png" />
        <GalleryItem name="X1835048540309588809355376853518_Screenshot-2024-06-22-at-4.45.18PM-min.png" />
        <GalleryItem name="N1835048540328035553429086405134_Screenshot-2024-06-22-at-4.45.09PM-min.png" />
        <GalleryItem name="H1835049292475578414862343995918_gif1.gif" />
        <GalleryItem>
          <ProjectVideo bare name="P2312559764413801527543030743566_8mb.video-X5b-PviO3I7q.mp4" />
        </GalleryItem>
      </Gallery>
      <Br />
    </>
  );
}
