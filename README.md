# lzahq.tech

Simple [Svelte](https://svelte.dev) app for my personal website: [LZAHQ](https://lzahq.tech)


## Dev

Clone the repo and install Javascript dependencies - assumes you have recent `node`/`npm` installed.

`npm i`

Use `npm` scripts to do stuff.

Run local web server: `npm run dev`

Build assets into `public/`: `npm run build`

Generate new listing of images and related text: `npm run gen`

Wipe exif metadata from images: `npm run clean`

The images under `public/img/feed` are all scooped up automatically and processed by `src/generatePictures.js`. If an image file contains a `.txt`, the text stored inside will be used as `alt` tags and tooltip info. The images used on my site are not stored in version control.
