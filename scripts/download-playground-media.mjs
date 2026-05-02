#!/usr/bin/env node
/**
 * One-time: pull playground binaries from Cargo freight into public/media/playground/
 * Run: node scripts/download-playground-media.mjs
 */
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public', 'media', 'playground');

const items = [
  ['H2281655452754669544491125178894', 'IMG_8702-2.jpg'],
  ['J2281655452773116288564834730510', 'IMG_7284-2.jpg'],
  ['A2281655452736222800417415627278', 'IMG_7883-2.jpg'],
  ['R2281874431157429731005959111182', 'IMG_8715.MOV'],
  ['U2281863294968712896991905841678', 'bongo_v2.mp4'],
  ['Z1971703939994264222016355566094', 'PNG-image-3.JPEG'],
  ['M1971704239975216348681083945486', 'cat.JPEG'],
  ['K1971704240159683789418179461646', 'cat-5-2.JPEG'],
  ['Q1971722270689870963861182349838', 'IMG_9777-min.png'],
  ['W1971731746210452562172851388942', 'goldfish.gif'],
  ['W1971722270302489338313281765902', 'IMG_9772-min.png'],
  ['F2141952902285905318195824034318', 'IMG_6379-min.JPG'],
  ['V1984338866198660063518514872846', 'IMG_5247-min.JPG'],
  ['A1984338866143319831297386217998', 'IMG_4770-min.JPG'],
  ['B1984338866217106807592224424462', 'IMG_5362-min.JPG'],
  ['N2141952902230565085974695379470', 'IMG_6600-min.JPG'],
  ['W2141952902267458574122114482702', 'IMG_6519-min.jpg'],
  ['L1984347038069391228702461657614', 'IMG_5361-min.png'],
  ['Y2141952902249011830048404931086', 'IMG_5790-2-min.jpg'],
  ['M2141972301195567880413365797390', 'IMG_6590-min.JPG'],
  ['C2281872640181494358619302265358', 'IMG_7860-2.jpg'],
  ['Q2281872640421302031577526436366', 'IMG_8461-2.jpg'],
  ['S1984338866161766575371095769614', 'IMG_4798-min.JPG'],
  ['I1984350750236828389791500206606', 'IMG_4805-min.jpg'],
  ['J1971784957522386888082056937998', 'IMG_9115-min.JPG'],
  ['T1971784957559280376229476041230', 'IMG_4716-min.jpeg'],
  ['S1971784957596173864376895144462', 'IMG_4525-min.JPG'],
  ['Y1971784957577727120303185592846', 'IMG_4535-min.jpeg'],
  ['R1971784957540833632155766489614', 'IMG_4718-min.jpeg'],
  ['X1971784957227238982902704112142', 'IMG_2636-min.JPG'],
  ['I1971765242103489509156028547598', '100_0523.JPG'],
  ['N1971765242786019039883281957390', '100_0526.JPG'],
  ['L2141972301214014624487075349006', 'IMG_0818-min.JPG'],
  ['K2141972301066440671897398936078', 'IMG_5051-min.JPG'],
  ['E2141972301232461368560784900622', 'IMG_2543-min.JPG'],
  ['A2141972301177121136339656245774', 'IMG_5052-min.JPG'],
  ['H2141972301158674392265946694158', 'IMG_6175-min.JPG'],
];

function freightUrl(hash, name) {
  const enc = encodeURIComponent(name).replace(/'/g, '%27');
  return `https://freight.cargo.site/t/original/i/${hash}/${enc}`;
}

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location).then(resolve).catch(reject);
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve({ status: res.statusCode, buf: Buffer.concat(chunks) }));
      })
      .on('error', reject);
  });
}

fs.mkdirSync(outDir, { recursive: true });

for (const [hash, name] of items) {
  const destName = `${hash}_${name}`;
  const dest = path.join(outDir, destName);
  const url = freightUrl(hash, name);
  process.stdout.write(`${destName} … `);
  try {
    const { status, buf } = await get(url);
    const head = buf.slice(0, 20).toString('ascii');
    if (status !== 200 || head.includes('<!DOCTYPE') || head.includes('<HTML')) {
      console.log('fail', status);
      continue;
    }
    fs.writeFileSync(dest, buf);
    console.log('ok', buf.length);
  } catch (e) {
    console.log('err', e.message);
  }
}

console.log('Done →', outDir);
