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

/** Cargo body headline is shortened to “CiCi - A Columbia CS”; manifest has the full site title. */
export default function CiciContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="wMQmq_cwxLE" />
        </Column>
        <Column>
          <ProjectTitle>CiCi - A Columbia CS</ProjectTitle>
          <Br />
          <ProjectMeta>Hackathon Project, 09/23/23</ProjectMeta>
          <Br />
          <Br />
          “CS classes are hard. CS advising shouldn’t be. Get answer to all your Columbia computer
          science questions from CiCi!“
          <Br />
          <Br />
          Team project made for Columbia’s 2023 DivHacks Hackathon. I worked on the backend in
          Python. We won First Place for the AI track. 
          <Br />
          <Br />
          CiCi is an AI chatbot trained on Columbia CS advising data. It uses this history along
          with its broader chatbot capability to answer any questions you have about the CS major,
          coursework, or career options at Columbia.
          <Br />
          <Br />
          Backend: We created embeddings using Columbia CS Advising documents and stored them in a
          vector database. We then used the OpenAI API to make a chatbot that would answer CS
          advising questions by searching through the vector database for the most relevant text and
          compiling them into a single concise answer.
          <Br />
          <Br />
          Frontend: HTML/CSS/JavaScript
          <Br />
          <Br />
          Check out our GitHub repo{' '}
          <ExternalLink href="https://github.com/kynsity/DivHacks2023_project">here</ExternalLink>.
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="V1676199150914639398472463024654_Screenshot-2024-03-14-at-12.21.30PM.png" />
        <GalleryItem name="B1676199150988426374767301231118_Screenshot-2024-03-14-at-12.44.49PM.png" />
        <GalleryItem name="F1676199150969979630693591679502_Screenshot-2024-03-14-at-12.44.59PM.png" />
        <GalleryItem name="X1676199151006873118841010782734_Screenshot-2024-03-14-at-12.44.36PM.png" />
        <GalleryItem name="N1676199150951532886619882127886_Screenshot-2024-03-14-at-12.45.53PM.png" />
      </Gallery>
    </>
  );
}
