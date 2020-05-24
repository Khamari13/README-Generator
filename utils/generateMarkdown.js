function generateMarkdown(data) {
  return `
# ${data.title} ![License]
(https://img.shields.io/badge/license-${data.license}-green)

## Description

${data.description}

##Tablen of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the dependencies, run the following command

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

This project uses ${data.license} license

## Contributing

${data.contributing}

## Tests

The following command, runs the tests:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any personal questions or ideas on how to improve this repo, contact [${data.github}](${data.url}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
