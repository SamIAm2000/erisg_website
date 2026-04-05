import manifest from '../../data/projects/manifest.json';

const base = process.env.PUBLIC_URL || '';

/**
 * Work grid + /projects/:id routing. Order matches manifest.json.
 * Page copy lives in src/data/projects/pages/{id}.json — see README.md there.
 */
const projects = manifest.map((p) => ({
  id: p.id,
  title: p.title,
  imageUrl: `${base}/images/projects/${p.thumb}`,
}));

export default projects;
