// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}

  ${generateDescription(data.description)}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

`;
}
// individual functions for each 

function generateDescription ( description) {
  return `## Description

  ${description}`;
}

console.log(generateMarkdown({
  title: "testing",
  description: "test description"
}));

module.exports = generateMarkdown;
