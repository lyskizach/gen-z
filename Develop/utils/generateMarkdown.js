// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0 License') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === 'Boost Software License 1.0') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (license === `BSD 3-Clause License`) {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (license === 'BSD 2-Clause License') {
    return `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None') {
    return ''
  } else if (license === 'Apache 2.0 License') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost Software License 1.0') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === `BSD 3-Clause License`) {
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'BSD 2-Clause License') {
    return `(https://opensource.org/licenses/BSD-2-Clause)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `N/A`
  } else {
    return `
  This project is using a/an ${license}.
  Go to ${renderLicenseLink(license)} to read more about this license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table Of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licenses](#licenses)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usage}

  ## Licenses
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.tests}

  ## Questions
  ${data.username}
  My Github Profile: https://github.com/${data.username}
  For additional questions, contact me by email at: ${data.email}
  
`;
}

module.exports = generateMarkdown;
