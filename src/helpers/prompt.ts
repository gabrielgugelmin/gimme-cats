const inquirer = require('inquirer');
const { saveFile } = require('./index');

inquirer.registerPrompt('search-list', require('inquirer-search-list'));

interface Tagable {
  tags: string[];
}

interface Answerable {
  category: string;
  filename: string;
}

function startPrompt(tags: Tagable) {
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
    .then((answers: Answerable) => {
      const { category, filename } = answers;
      saveFile({ category, filename });
    })
    .catch((error: { isTtyError: any }) => {
      if (error.isTtyError) {
        console.error('O prompt não pode ser rodado nesse ambiente');
      } else {
        console.error('Erro inesperado');
      }
    });
}

module.exports = startPrompt;
export {};
