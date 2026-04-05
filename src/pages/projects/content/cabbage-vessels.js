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

export default function CabbageVesselsContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <ProjectImage name="E1540865213533175848582422331918_tIMG_2632.png" />
        </Column>
        <Column>
          <ProjectTitle>Cabbage Vessels</ProjectTitle>
          <Br />
          <ProjectMeta>Individual project, Oct. – Nov. 2022</ProjectMeta>
          <Br />
          <Br />
          Concrete cast in rubber latex mold formed from cabbage leaves.
          <Br />
          <Br />
          The leaves are now long gone, yet an impression of them remains. 
          <Br />
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery columns={3}>
        <GalleryItem name="K1540862742296659270008630542862_cabbage-1-min.png" />
        <GalleryItem name="K1540862742333552758156049646094_cabbage-2-min.png" />
        <GalleryItem name="O1540862742351999502229759197710_cabbage-3-min.png" />
      </Gallery>
      <Br />
    </>
  );
}
