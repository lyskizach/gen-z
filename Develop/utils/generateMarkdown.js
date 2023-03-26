const licenses = [
  {'Apache 2.0 License': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
  {'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
  {'BSD 3-Clause License': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
  {'BSD 2-Clasue License': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
  // 'License CC0 1.0': '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
  // 'Attribution 4.0 International': '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
  // 'Attribution-ShareAlike 4.0 International': '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)',
  // 'Attribution-NonCommercial 4.0 International': '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)',
  // 'Attribution-NoDerivates 4.0 International': '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)',
  // 'Attribution-NonCommmercial-ShareAlike 4.0 International': '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)',
  // 'Attribution-NonCommercial-NoDerivatives 4.0 International': '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)',
  // 'Eclipse Public License 1.0': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table Of Contents
  * [Description] (#description)
  * [Installation Instructions] (#installInstructions)
  * [Usage Information] (#usage)
  * [Licenses] (#license)
  * [Contribution Guidelines] (#contribution)
  * [Testing Instructions] (#tests)
  * [Questions] (#username)

  ## Project Description
  ${data.description}

  ## Installation Instructions
  ${data.installInstructions}

  ## Usage Information
  ${data.usage}

  ## Licenses
  ${renderLicenseBadge(responses.license)}

  ## Contribution Guidelines
  ${data.contribution}

  ## Testing Instructions
  ${data.tests}

  ## Questions
  ${data.username}
  My Github Profile: https://github.com/${data.username}
  For additional questions, contact me by email at: ${data.email}
  
`;
}

module.exports = generateMarkdown;
