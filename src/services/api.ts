const axios = require('axios');

const api = axios.create({
  baseURL: 'https://cataas.com/',
});

module.exports = api;
