import inquirer from "inquirer";
import chalk from "chalk";

let ans = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your age:"}
]);

console.log(chalk.greenBright("Insha Allah, in " + (50 - ans.age) + " years you will be 50 years old."));