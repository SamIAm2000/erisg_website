import React from 'react';
import {
  Br,
  Column,
  ColumnSet,
  ExternalLink,
  Gallery,
  GalleryItem,
  ProjectImage,
  ProjectMeta,
  ProjectTitle,
} from '../../../components/project';

export default function RadarHorizonContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <ProjectImage name="O1666828736338998221676297978382_ice.jpg" />
        </Column>
        <Column>
          <ProjectTitle>Radar Horizon Tracing in 3D</ProjectTitle>
          <Br />
          <ProjectMeta>Academic research, Sept. 2023 – May 2024</ProjectMeta>
          <Br />
          <Br />
          Developed as an ongoing joint project between Lamont-Doherty Earth Observatory and the
          Columbia Computer Graphics and User Interfaces Lab to develop a tool to help glaciologists
          visualize and study ice layers in virtual reality. The project is called VISER (Visualizing
          Ice Sheets in Extended Reality).
          <Br />
          <Br />
          My contribution to VISER was the implementation of radar horizon tracing, a critical
          element of the program which allows the user to select ice layers and see them traced in
          real time in the application. I used a combination of computer vision and computer graphics
          techniques to automatically trace a line delineating two ice layers from a single seed point
          provided by the user. Before I implemented this feature, automated 3D ice layer picking did
          not exist, and glaciologists had to manually pick layers in 2D only with programs such as
          MATLAB. 
          <Br />
          <Br />
          I also rewrote the entire file importing pipeline to allow dynamic loading of assets at
          runtime. Before my modifications, the application would not compile and run as a stand-alone
          app due to the usage of Filmbox files (.fbx) to store the radargram meshes and textures.
          These radargram files are extremely large and detailed, and this level of detail is
          necessary to do scientific work. Due to the limitations of compute power of VR headsets
          (especially the Meta Quest 2 and 3 that we were using), loading all these giant files at
          initialization proved more than the devices could handle, meaning that they needed to be
          loaded on demand, in small batches. However, Unity does not support runtime loading of FBX
          files, which meant that our application could not run standalone without a computer running
          Unity and a data cord. This made distribution and testing of the application extremely
          difficult if not impossible. 
          <Br />
          <Br />
          My contribution and solution to this problem was to change to using GLTF files instead of
          FBX. I rewrote the entire import pipeline in C# to handle the extraction of meshes and
          textures at runtime,  
          <Br />
          <Br />
          Made in Unity with custom C# scripts.
          <Br />
          <Br />
          Works with Meta Quest 2 and Meta Quest 3 headsets.
          <Br />
          <Br />
          Read more about VISER{' '}
          <ExternalLink href="https://pgg.ldeo.columbia.edu/projects/VISER">here</ExternalLink>.
          <Br />
          <Br />
          See the Github repo{' '}
          <ExternalLink href="https://github.com/qaziashikin/polAR/tree/linepicking">here</ExternalLink>
          . 
          <Br />
          <Br />
          Watch demo on YouTube{' '}
          <ExternalLink href="https://youtu.be/DBZXCw4OcQ4">here</ExternalLink>.
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="O1666845485373874595516750103054_image_035_0000.jpg" />
        <GalleryItem name="T1666845485318534363295621448206_image_039_0000.jpg" />
        <GalleryItem name="Q1561533825669073042821986779662_Screenshot-2023-12-15-at-2.16.47-PM.png" />
        <GalleryItem name="Z1561532012852192687163220820494_ezgif-5-9d580f7ce2.gif" />
        <GalleryItem name="P1561532012815299199015801717262_ezgif-5-37d9b3d16a.gif" />
        <GalleryItem name="J1561532012833745943089511268878_ezgif-5-50152ff344.gif" />
      </Gallery>
      <Br />
    </>
  );
}
