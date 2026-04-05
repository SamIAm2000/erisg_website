# Projects content

Everything for the Work grid and project pages lives in the repo. No HTML-in-JSON.

## Layout

| Location | Purpose |
|----------|---------|
| **`manifest.json`** | Grid order + routing: `id`, `title`, `thumb` (file in `public/images/projects/`). |
| **`src/pages/projects/content/{id}.js`** | Default export: React component = that project’s page body. Filename **must** equal `id`. |
| **`src/components/project/`** | Reusable blocks: columns, gallery, images, YouTube, text helpers. |
| **`public/images/projects/`** | Home thumbnail. |
| **`public/media/projects/{id}/`** | Page images, GIFs, video files. |

`ProjectPage` wraps the page in `ProjectPageProvider` with `projectId`, so inside your content component you only pass **filenames** to `ProjectImage`, `GalleryItem`, or `ProjectVideo` — paths are resolved automatically.

## Blocks (import from `src/components/project`)

| Component | Use for |
|-----------|---------|
| `ColumnSet` / `Column` | Two-column hero row (video/image | text). |
| `Gallery` / `GalleryItem` | Responsive image grid; `GalleryItem` takes `name="file.jpg"` or `spanFullWidth`. Use `columns={3}` on `Gallery` for three equal columns from 600px up. |
| `ProjectImage` | Single image in a column (same frame as a gallery cell). |
| `ProjectVideo` | Local video; use `bare` when nested inside `GalleryItem`. |
| `YoutubeEmbed` | Pass `videoId` only (from `youtube.com/embed/VIDEO_ID`). |
| `ProjectTitle` | Project name (sans `h2`; matches Cargo). |
| `ProjectMeta` | Italic subtitle (date, medium) — same typography on every page. |
| `ExternalLink` | Adds `target="_blank"` for `http(s)` URLs. |
| `Br` | Line break where you want Cargo-style spacing. |

Styling hooks are unchanged: `.eris-project-body`, `.eris-gallery-grid`, etc. in `src/index.css`.

## Add a new project

1. **`manifest.json`** — new entry at the right index.
2. **`public/images/projects/{thumb}`** — thumbnail asset.
3. **`public/media/projects/{id}/`** — drop in media files.
4. **`src/pages/projects/content/{id}.js`** — new file, default export a function component that returns fragments of the blocks above.

Webpack picks up any new `content/*.js` automatically; no registry edits.

To add or replace media, put files under `public/media/projects/{id}/` and reference the filename in your content component (`GalleryItem`, `ProjectImage`, etc.).
