import React from 'react';
import Layout from '../components/layout/Layout';

function About() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 items-start min-h-[60vh]">
        <div className="md:col-span-5">
          <img
            src={`${process.env.PUBLIC_URL || ''}/images/about-portrait.jpeg`}
            alt="Eris Gao"
            className="w-full max-w-full object-contain"
          />
        </div>
        <div className="hidden md:block md:col-span-1" aria-hidden="true" />
        <div className="md:col-span-6 eris-bodycopy [&_p]:mb-[1.2em] [&_p:last-child]:mb-0">
          <p>
            <strong>Eris Gao </strong>
            (b. 2000) is a NYC-based multimedia artist and programmer from Shanghai, China who works
            with algorithms, circuits, cameras, and pixels. Their pieces use imagery and sound as
            metaphor to explore themes of memory, meaning, and the absurdity of existence.
          </p>
          <p>
            They are fascinated by interactions between the technological and the artistic.
            Augmented/virtual reality, computer vision, and synthetic sound are all examples of such
            art-technology intersections. Though different in implementation, their commonality is
            that they all construct alternate realities and store them in pixels, matrices, and
            silicon chips. To what extent do these artificial realities shape human perception?
          </p>
          <p>
            Eris graduated in May 2024 from Barnard College of Columbia University with a degree in
            Computer Science. They are now working as a software engineer at Gradient Health.
          </p>
          <p>
            <strong>Helpful links:</strong>
          </p>
          <p>
            <a href="https://github.com/SamIAm2000">Github</a>
          </p>
          <p>
            <a href="https://erisgao.com/contact-form" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
