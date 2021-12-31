const licenseBadge = {
  "GNU GPLv3": "![License: 'GNU GPLv3'](https://img.shields.io/badge/License-GNU%20GPLv3-yellowgreen)",
  "Mozilla Public License 2.0": "![License: 'Mozilla Public License 2.0'](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blue)",
  "Apache License 2.0": "![License: 'Apache License 2.0'](https://img.shields.io/badge/License-Apache%20License%202.0-red)",
  "MIT License": "![License: 'MIT License'](https://img.shields.io/badge/License-MIT-blue)",
  "Boost Software License 1.0": "![License: 'Boost Software License 1.0'](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-lightgrey)",
  "The Unilicense": "![License: 'The Unilicense'](https://img.shields.io/badge/License-The%20Unilicense-orange)"
};

const licenseLink = {
  "GNU GPLv3": "!['Link to GNU GPLv3 Details'](https://choosealicense.com/licenses/gpl-3.0/)",
  "Mozilla Public License 2.0": "!['Link to Mozilla Public License 2.0 Details'](https://choosealicense.com/licenses/mpl-2.0/)",
  "Apache License 2.0": "!['Link to Apache License 2.0 Details'](https://choosealicense.com/licenses/apache-2.0/)",
  "MIT License": "!['Link to MIT License Details'](https://choosealicense.com/licenses/mit/)",
  "Boost Software License 1.0": "!['Link to Boost Software License 1.0 Details'](https://choosealicense.com/licenses/bsl-1.0/)",
  "The Unilicense": "![Link to The Unilicense Details'](https://choosealicense.com/licenses/unlicense/)"
};


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  console.log(data);
  
  return `
# **${data.title}**
 ${licenseBadge[data.license]}
 -------------------------------
## Description 
  ${data.description}

## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 --------------------------------- 
## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License Details:
 ${licenseLink[data.license]}

## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

 ---------------------------------
### Questions
* Github Profile: https://github.com/${data.github}
* Contact me with questions: ${data.email}
`;
};
