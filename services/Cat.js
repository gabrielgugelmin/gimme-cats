const api = require('./api')

class Cat {
  getCat = async (category) => {
    console.log('getCat')
    const response = await api(`cat/${category}`, {
      responseType: 'stream'
    });
    return response;
  }

  getTags = async () => {
    const { data } = await api.get('/api/tags');
    return data;
  }
}

const CatService = new Cat();
module.exports = CatService;