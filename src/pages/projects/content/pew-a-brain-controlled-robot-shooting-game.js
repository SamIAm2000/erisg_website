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

const OPEN_BCI_CYTON =
  'https://shop.openbci.com/products/cyton-biosensing-board-8-channel?utm_source=Google-Ads&utm_medium=x&utm_campaign=PMax-Shopping-OpenBCI&utm_adgroudp=&utm_term=&gad_source=1&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW9qafB4ri8lQ47e1Se6VDH4oirbLJhboJpf45xbQxvOkX5OSgZN9WsaAugvEALw_wcB';

export default function PewContent() {
  return (
    <>
      <ColumnSet>
        <Column>
          <YoutubeEmbed videoId="FOS9B_nDQvM" />
          <Gallery>
            <GalleryItem name="E1673692881282499983259431993870_robotsdyingbetter.gif" />
            <GalleryItem name="H1673696887343463726689046888974_ezgif-5-9b6dec9ac9.gif" />
            <GalleryItem name="F1673701236403186776674064531982_Screenshot-2024-03-12-at-10.59.35PM.png" />
            <GalleryItem name="J1673701236476973752968902738446_Screenshot-2024-03-12-at-10.40.22PM.png" />
          </Gallery>
        </Column>
        <Column>
          <ProjectTitle>PEW - A Brain Controlled Robot-Shooting Game</ProjectTitle>
          <Br />
          <ProjectMeta>VR Game, 03/11/24</ProjectMeta>
          <Br />
          <Br />
          “Have you ever wanted to stare at something and make it explode? Try our game PEW!”
          <Br />
          <Br />
          Team project made for Columbia’s 2024 Neureality Hackathon. I worked on the VR development.
          We won second place.
          <Br />
          <Br />
          For hardware, we used the 
          <ExternalLink href="https://www.gtec.at/product/unicorn-hybrid-black/">
            G.tec Unicorn Hybrid Black
          </ExternalLink>{' '}
          (an 8 channel wearable EEG headset) to receive SSVEP signals, the 
          <ExternalLink href={OPEN_BCI_CYTON}>OpenBCI Cyton</ExternalLink> to record EMG signals from
          arm movement, and the{' '}
          <ExternalLink href="https://www.meta.com/quest/products/quest-2/">Meta Quest 2</ExternalLink>{' '}
          VR headset to display the VR game.
          <Br />
          <Br />
          The objectives for our hacking track at the hackathon was to incorporate EEG signals and EMG
          signals into a virtual reality game.
          <Br />
          <Br />
          The basic premise of our game, PEW, is a first person shooter in virtual reality where the
          objective is to shoot as many robots as possible before the count down timer stops. Players
          stand stationary at a crossroads while different robots approach the player from three
          directions. Some robots approach from the ground level while others float in the air.
          Players have 3 different basic hand-held weapons to choose from (pistol, machine gun,
          katana). 
          <Br />
          <Br />
          Aside from the basic weapon, there are advanced attack types where players can use their
          brain waves to make robots spontaneously combust. This is done based on the fact - in a
          nutshell- that when a person concentrates on a blinking object, their brain waves will peak
          at the same frequency that the object is blinking at. Using an EEG headset to capture the
          player’s SSVEP waves (Steady-state visually evoked potential, a brain signal that appears in
          an electroencephalogram (EEG) when a person looks at a flickering light), we can run signal
          proccessing code in real time to detect if the player is focused on a certain flashing robot
          within their field of view. Only one robot can be flashing on screen at a given time so as
          to make the signal detection and denoising easier. If so, a signal is sent from the signal
          processing script (written in Python, running as a UDP client) to the VR headset (running as
          a UDP server) to terminate the robot and make it combust in the game.
          <Br />
          <Br />
          Another type of brain wave we wanted to include in the game was alpha waves, a type of brain
          wave that occurs when someone is relaxed but alert. We decided to have this control the AOE
          (Area of Effect) attack, an attack that affects multiple targets within a specific area.
          Visually, in the game, this effect rained down lightning bolts and zapped robots across the
          map. Because it was such a powerful attack, we wanted there to be a equivalent trade off. To
          achieve alpha waves, the player would have to close their eyes and attain a state of focus and
          relaxation similar to meditating, which is not easy to do in such a fast paced game. Again,
          implementation wise, if alpha waves were detected by the EEG headset, a signal would be sent
          over the UDP connection to trigger AOE in the game.
          <Br />
          <Br />
          Finally, we mapped the EMG (electromyography) signal (a biomedical signal that measures the
          electrical activity of a muscle when it contracts) of a closed-fist wrist flick to the
          function to change weapons. We strapped electrodes connected to the 
          <ExternalLink href={OPEN_BCI_CYTON}>OpenBCI Cyton</ExternalLink> onto the player’s arm to
          record whether their wrist and muscle movement matched the trigger motion. If so, the in-game
          weapon was changed. Consequent triggers would cycle through the three handheld weapons.
          <Br />
          <Br />
          PEW connects to the Meta Quest 2 to provide an immersive game experience. The main game is
          displayed in the VR headset, while user gestures and input from BCI devices are tracked on
          an external computer running Python for signal processing. The Python code acts as a UDP
          client that sends signals to the VR headset with the game running as the UDP server. For
          future iterations, inspired by the use of the UDP server, we considered developing local
          multiplayer where two people can play in the same room using the same network.
          <Br />
          <Br />
          Check out our GitHub repo{' '}
          <ExternalLink href="https://github.com/qaziashikin/PEW/tree/main">here</ExternalLink>.
          <Br />
          See our presentation slides{' '}
          <ExternalLink href="https://docs.google.com/presentation/d/13kMyUSooiHrZzkMSzFWLqkgNC60eb-74SQa0pSI6D_E/edit?usp=sharing">
            here
          </ExternalLink>
          .
        </Column>
      </ColumnSet>
      <Br />
      <Br />
      <Gallery>
        <GalleryItem name="D1673701236458527008895193186830_Screenshot-2024-03-12-at-11.11.44PM.png" />
        <GalleryItem name="L1673701236440080264821483635214_Screenshot-2024-03-12-at-11.11.16PM.png" />
        <GalleryItem name="P1673685500980003765026054603278_PEW-2.png" />
        <GalleryItem name="Q1673685501053790741320892809742_PEW-4.png" />
        <GalleryItem name="S1673685501072237485394602361358_PEW-3.png" />
        <GalleryItem name="K1673685501016897253173473706510_PEW-6.png" />
        <GalleryItem name="R1673685501035343997247183258126_PEW-5.png" />
        <GalleryItem name="B1673685500998450509099764154894_PEW-7.png" />
      </Gallery>
      <Br />
    </>
  );
}
