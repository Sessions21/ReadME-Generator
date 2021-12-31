// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

// const pageMD = generateMarkdown(title, description);

// fs.writeFile('./ReadME.md', pageMD, err => {
//   if (err) throw err;

//   console.log('ReadME complete! Check out ReadME.md to see the output!')
// });







// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('please enter a title to continue.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief project description.',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('please enter a description to continue.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions.',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Enter install instructions to continue.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use the application.',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Enter usage instructions to continue.');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Which license applies to your project?',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unilicense', 'Not applicable']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide the names of contributors.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide instructions for testing.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide GitHub username.',
    },
        {
      type: 'input',
      name: 'email',
      message: 'Please provide email for contact.',
    },
    ]
  )
};

// // TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//   fs.writeFile('./README.md', generateMarkdown, err => {
//     if (err) {}
//   } )
// }

// // Function call to initialize app
promptQuestions().then(answers => console.log(answers));
