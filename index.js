const axios = require('axios');
const fs = require('fs');

const api = axios.create({
  baseURL: 'https://cataas.com/',
  responseType: 'stream',
})

getCat = async () => {
  const response = await api.get('cat');
  return response;
}

const getAndSaveFile = async (filename) => {
  const { data } = await getCat();

  data.pipe(fs.createWriteStream(`${filename}.jpg`));
}

getAndSaveFile('teste');