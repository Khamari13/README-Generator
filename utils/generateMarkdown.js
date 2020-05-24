function generateMarkdown(data) {
  return `
# ${data.title} ![License]
(https://img.shields.io/badge/license-${data.license}-green)

`;
}

module.exports = generateMarkdown;
