const startPrompt = require('./src/helpers/prompt');
const Service = require('./src/services/Cat');

const init = async () => {
  const tags = await Service.getTags();
  startPrompt(tags);
};

init();
