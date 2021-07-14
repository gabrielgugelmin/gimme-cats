const CatService = require('../services/Cat');
const fs = require('fs');

async function saveFile(category) {
  try {
    const { data } = await CatService.getCat(category);
    data.pipe(fs.createWriteStream(`download/cat-${Date.now()}.jpg`));
  } catch (error) {
    console.error('Ops, houve um erro ao tentar salvar seu arquivo :(   Mensagem original: ', error.response.statusText)
  }
}

async function getCat() {
  const { data } = await CatService.getCat()
  return data
}

module.exports = { saveFile, getCat };