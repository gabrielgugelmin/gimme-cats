const CatService = require('./services/Cat')
const startPrompt = require('./helpers/prompt')

init = async () => {
  const tags = await CatService.getTags();
  startPrompt(tags);
}

init();
