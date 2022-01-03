// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please provide the project title:',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Enter a title to continue:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief project description:',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Enter a description to continue:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Enter install instructions to continue:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use the application:',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Enter usage instructions to continue:');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to include licensing information?',
      default: true
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Which license applies to your project? Select Only One',
      choices: ['GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unilicense'],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      },
      validate: licenseInput => {
        if (licenseInput && licenseInput.length === 1) {
          return true;
        } else {
          console.log('Pick License to continue:');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmContributors',
      message: 'Would you like to include contributor information?',
      default: true
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide the names of contributors:',
      when: ({ confirmContributors }) => {
        if (confirmContributors) {
          return true;
        } else {
          return false;
        }
      },
      validate: contributorInput => {
        if (contributorInput) {
          return true;
        } else {
          console.log('Add contributors to continue:');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmTest',
      message: 'Would you like to include testing information?',
      default: true
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide instructions for testing:',
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      },
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Add testing details to continue:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide GitHub username:',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Enter github username to continue:');
          return false;
        }
      }
    },
        {
      type: 'input',
      name: 'email',
      message: 'Please provide email for contact:',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Enter an email address to continue:');
          return false;
        }
      }
    },
    ]
  )
};

// // TODO: Create a function to write README file
// // Function call to initialize app
promptQuestions()
  .then((data) => {
    const pageMD = generateMarkdown(data);
    fs.writeFile('./Example-ReadME.md', pageMD, err => {
      if (err) throw err;

      console.log('ReadME complete! Check out ReadME.md to see the output!')
    });
  });
