const axios = require('axios');

const api = axios.create({
    baseURL: 'https://cataas.com/',
    responseType: 'stream',
})

getCat = async () => {
    const response = await api.get('cat');
    return response;
}

module.exports = api;