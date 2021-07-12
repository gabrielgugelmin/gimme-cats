const api = require('./services/api')
const fs = require('fs');

const getAndSaveFile = async (filename) => {
  const { data } = await getCat();

  data.pipe(fs.createWriteStream(`download/${filename}-${Date.now()}.jpg`));
}

getAndSaveFile('cat');