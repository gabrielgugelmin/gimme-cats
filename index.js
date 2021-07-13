const CatService = require('./services/Cat')
const fs = require('fs');
const startPrompt = require('./prompt')

const getTags = async () => {
  const tags = await CatService.getTags();
  startPrompt(tags);
}

const getAndSaveFile = async (filename) => {
  const { data } = await CatService.getCat();

  data.pipe(fs.createWriteStream(`download/${filename}-${Date.now()}.jpg`));
}

getTags();
// getAndSaveFile('cat');