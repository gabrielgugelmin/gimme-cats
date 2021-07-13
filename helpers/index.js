const CatService = require('../services/Cat');
const fs = require('fs');

async function saveFile(category) {
  const { data } = await CatService.getCat(category);
  data.pipe(fs.createWriteStream(`download/cat-${Date.now()}.jpg`));
}

async function getCat() {
  const { data } = await CatService.getCat();
  return data;
}

module.exports = { saveFile, getCat };