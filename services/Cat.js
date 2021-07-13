const api = require('./api')

class Cat {
  getCat = async () => {
    const response = await api.get('cat');
    return response;
  }
}

const CatService = new Cat();
module.exports = CatService;