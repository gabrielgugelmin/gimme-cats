const CatService = require('./src/services/Cat');
const startPrompt = require('./src/helpers/prompt');

const init = async () => {
  const tags = await CatService.getTags();
  startPrompt(tags);
};

init();
