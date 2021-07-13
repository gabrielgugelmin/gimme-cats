const { saveFile, getCat } = require('./helpers')
const inquirer = require('inquirer');
inquirer.registerPrompt('search-list', require('inquirer-search-list'));

function startPrompt(tags) {
  console.log('startPrompt')
  inquirer
    .prompt([
      {
        type: "search-list",
        message: "Selecione a categoria desejada",
        name: "category",
        choices: tags,
        validate: function (answer) {
          if (answer === 'Bottle') {
            return `Whoops, ${answer} is not a real topping.`;
          }
          return true;
        }
      }
    ])
    .then((answers) => {
      const category = answers.category;
      saveFile(category)
      // return category;
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

module.exports = startPrompt;