let a = 5;

export default a;


import inquirer from "inquirer";
import chalk from "chalk";

// take input from user

let guess = await inquirer.prompt([{
    name: "num",
    type: "number",
    message: " enter your number (between 0 to 9): "}
]);

//generate a secret number

let secretNumber = Math.random();
let num1 = (secretNumber * 9);
let num_final = Math.round(num1);

//check the gues number is correct or not

if (!guess) {
    console.log (chalk.red("Invalid input. Please enter a number."));
} else if (guess === num_final +1 || guess === num_final - 1) {
    console.log (chalk.yellow("your close enough."));
} else if (guess === num_final) {
    console.log(chalk.green("Congratulations! Your answer is correct."));
} else {
    console.log (chalk.cyanBright("sorry! The correct answer was: " + num_final ));
}