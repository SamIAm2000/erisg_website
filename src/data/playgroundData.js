/**
 * Playground gallery items for the Masonry layout on /playground.
 * Media files live under public/media/playground/{file}
 */
export const PLAYGROUND_INTRO =
  'This is a collection of things I have worked on in the past and present, a motley of ideas, experiments, incomplete and ongoing projects, and interesting clutter I want to show.';

/**
 * @typedef {{
 *   file: string,
 *   kind: 'image'|'video'|'youtube',
 *   youtubeId?: string,
 *   caption?: string,
 * }} PlaygroundItem
 */

/** @type {PlaygroundItem[]} */
export const PLAYGROUND_GALLERY_1 = [
  {
    file: 'IMG_7284-2.jpg',
    kind: 'image',
    caption: "I've been getting into 3D printing lately",
  },
  {
    file: 'IMG_8702-2.jpg',
    kind: 'image',
    caption: "Cheese fidget clicker. Here's my Makerworld profile with all my models https://makerworld.com/en/@eris2000/upload",
  },
  {
    file: 'IMG_7883-2.jpg',
    kind: 'image',
    caption: 'These mini wavy lamps were inspired by Wooj Design',
  },

  {
    file: 'PNG-image-3.JPEG',
    kind: 'image',
    caption: 'I sometimes try my hand at 3D modeling',
  },
  {
    file: 'cat.JPEG',
    kind: 'image',
  },
  {
    file: 'cat-5-2.JPEG',
    kind: 'image',
    caption: 'I wrote a rendering engine in C++ from scratch and rendered this beauty with no reflections or shadows.',
  },
  {
    file: 'bongo_v2.mp4',
    kind: 'video',
    caption: 'I programmed an OLED screen on my keyboard to display Bongo Cat. Open source ZMK code is here: https://github.com/SamIAm2000/zmk',
  },
  {
    file: 'IMG_9777-min.png',
    kind: 'image',
    caption: 'I live code in Sonic Pi and Hydra, but I want to learn more live coding languages',
  },
  {
    file: 'Jello sounds',
    kind: 'youtube',
    youtubeId: '6gLrZYKcRQ8',
    caption: 'I stuck a wire on a spoon and now you can hear your jello scream as you eat it',
  },
  {
    file: 'goldfish.gif',
    kind: 'image',
    caption: "pepper's ghost goldfish",
  },
  {
    file: 'IMG_9772-min.png',
    kind: 'image',
    caption: 'I prefer to live code audio reactive visuals',
  },
  {
    file: 'IMG_6379-min.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_5247-min.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_5361-min.png',
    kind: 'image',
    caption: 'i like to build mechanical keyboards. i soldered, 3d modeled, 3d printed and programmed most of these.',
  },
  {
    file: 'IMG_4770-min.JPG',
    kind: 'image',
    caption: '3d modeled and 3d printed by me',
  },
  {
    file: 'IMG_5362-min.JPG',
    kind: 'image',
    caption: 'wiring for 40% keyboard Pancake',
  },
  {
    file: 'IMG_6600-min.JPG',
    kind: 'image',
    caption: 'This is a wireless bluetooth handwired mini keyboard called the 2% Milk.',
  },
  {
    file: 'IMG_6519-min.jpg',
    kind: 'image',
    caption: 'Lily 58',
  },

  {
    file: 'IMG_5790-2-min.jpg',
    kind: 'image',
  },
  {
    file: 'IMG_6590-min.JPG',
    kind: 'image',
    caption: 'handwired planck',
  },
  {
    file: 'IMG_7860-2.jpg',
    kind: 'image',
    caption: 'Lagom 65',
  },
  {
    file: 'IMG_8461-2.jpg',
    kind: 'image',
    caption: 'keyboards in progress',
  },
];

/** @type {PlaygroundItem[]} */
export const PLAYGROUND_GALLERY_2 = [
  {
    file: 'IMG_2636-min.JPG',
    kind: 'image',
    caption: "i'm a big fan of raise plow signs",
  },
  {
    file: 'IMG_9115-min.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_4716-min.jpeg',
    kind: 'image',
  },
  {
    file: 'IMG_4525-min.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_4535-min.jpeg',
    kind: 'image',
    caption: 'signage',
  },
  {
    file: 'IMG_4718-min.jpeg',
    kind: 'image',
  },

  {
    file: '100_0523.JPG',
    kind: 'image',
    caption: 'and i love postmodernism',
  },
  {
    file: '100_0526.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_0818-min.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_5051-min.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_2543-min.JPG',
    kind: 'image',
  },
  {
    file: 'IMG_5052-min.JPG',
    kind: 'image',
    caption: 'and i really like pigeons',
  },
  {
    file: 'IMG_6175-min.JPG',
    kind: 'image',
  },
];

export function playgroundAssetSrc(file) {
  const base = process.env.PUBLIC_URL || '';
  return `${base}/media/playground/${file}`;
}