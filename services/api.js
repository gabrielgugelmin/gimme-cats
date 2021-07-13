const axios = require('axios');

const api = axios.create({
  baseURL: 'https://cataas.com/',
  responseType: 'stream',
});

module.exports = api;
