const CatService = require('./services/Cat')
const fs = require('fs');

const getAndSaveFile = async (filename) => {
  const { data } = await CatService.getCat();

  data.pipe(fs.createWriteStream(`download/${filename}-${Date.now()}.jpg`));
}

getAndSaveFile('cat');