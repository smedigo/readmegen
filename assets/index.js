const inquirer = require("inquirer");
const fs = require ("fs")

// array of questions for user

const generateFile = async() => {
const response = await inquirer 
     
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
                name: "grading",
            },
            {
                type: "input",
                message: "What is the license?",
                name: "license",

            },
            {
                type: "input",
                message: "Who are the contributors to the project?",
                name: "contributors",
                
            }
    
        ])

        console.log(response);
        const{title, task, criteria, grading, license, contributors} = response;
            const md = 
`
The README file title ${title},
Your Task ${task},
Acceptance  criteria ${criteria},
Grading requirements ${grading},
License ${license},
Contributors ${contributors},


`;

try{
    fs.writeFileSync('README.md', md)
    console.log('Success')
}catch(err){
    console.error(err)
}

}

generateFile();




