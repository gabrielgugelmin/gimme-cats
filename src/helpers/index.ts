const fs = require('fs');
const CatService = require('../services/Cat');

interface FileData {
  category: string;
  filename: string;
}

async function saveFile(fileData: FileData) {
  try {
    const { data } = await CatService.getCat(fileData.category);
    const timestamp = Date.now();
    const finalName = `${fileData.filename}-${timestamp}`;
    data.pipe(fs.createWriteStream(`download/${finalName}.jpg`));
    console.log(`Foto salva com sucesso! Você pode vê-la na pasta downloads com o nome ${finalName}`);
  } catch (error) {
    console.error(
      'Ops, houve um erro ao tentar salvar seu arquivo :(   Mensagem original: ',
      error.response.statusText,
    );
  }
}

module.exports = { saveFile };
