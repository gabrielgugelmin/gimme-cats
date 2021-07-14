const { saveFile } = require('.');
const inquirer = require('inquirer');
inquirer.registerPrompt('search-list', require('inquirer-search-list'));

function startPrompt(tags) {
  console.log('startPrompt');
  inquirer
    .prompt([
      {
        type: 'search-list',
        message: 'Selecione a categoria desejada',
        name: 'category',
        choices: tags,
      },
      {
        type: 'input',
        message: 'Como deseja chamar o arquivo?',
        name: 'filename',
        default() {
          return 'cat';
        },
      },
    ])
    .then((answers) => {
      const { category, filename } = answers;
      saveFile(category, filename);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error('O prompt não pode ser rodado nesse ambiente');
      } else {
        console.error('Erro inesperado');
      }
    });
}

module.exports = startPrompt;
