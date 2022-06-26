const fs = require('fs');
const feedPath = 'public/img/feed';
let _files = fs.readdirSync(feedPath);
let pics = new Array();
let allPics = new Object();

// Generate array of k/v - image name and associated text
_files.forEach(function(i) {
  let ext = i.split('.').pop();
  if (ext != 'txt') {
    let txt = '';
    try {
      txt = fs.readFileSync(`${feedPath}/${i}.txt`, 'utf-8').trim();
    } catch (err) {
      // do nothing
    }
    pics.push({name: i, text: txt});
  }
});

// Generate dictionary object of image name key and text value
pics.forEach(function(i) {
  allPics[i.name] = i.text;
})

// Render templated text with images with their associated text
console.log(`export const pics = ${JSON.stringify(allPics)}`)
