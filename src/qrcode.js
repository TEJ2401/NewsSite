
var inquirer =require("inquirer");
var qr=require("qr-image");
var fs=require("fs");
inquirer
  .prompt([
    {message:"Enter the qr-code",name:"URL"}
  ])
  .then((answers) => {
    const ans=answers.URL
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });