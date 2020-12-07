const inquirer = require("inquirer");
const fs = require ("fs")

// array of questions for user

const generateFile = async() => {
const questions = await inquirer 
     
        .prompt([
            {
                type: "input",
                message: "What is the title of the README file?",
                name: "title",
            },
    
            {
                type: "input",
                message: "What is the task of the README file?",
                name: "task",
            },
    
            {
                type: "input",
                message: "What is the criteria of the README file?",
                name: "criteria",
            },
            {
                type: "input",
                message: "What is the grading requirements?",
                name: "grading requirements",
            },
            {
                type: "input",
                message: "What is the license?",
                name: "license",

            }
            {
                type: "input",
                message: "Who are the contributors to the project?",
                name: "contributors",
                
            }
    
        ])

        console.log(response);
        const{} = response;
            const html = 
`







`;

try{
    fs.writeFileSync('README.md', md)
    console.log('Success')
}catch(err){
    console.error(err)
}

}

generateFile();



// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program    inquiror.prompt.then
// function init() {

// }

// // function call to initialize program
// init();
