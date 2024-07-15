#! /usr/bin/env node
import inquirer from "inquirer";

let currency :any = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.52,
    PKR: 277.6
};

let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Which currency would you like to convert from?",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]
},
{
    type: "list",
    name: "to",
    message: "Which currency would you like to convert to?",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]
},
{
    type: "number",
    name: "amount",
    message: "Enter your amount:"    
}
]);

console.log(currency[ans.to] / currency[ans.from] * ans.amount);


