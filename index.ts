#! /usr/bin/env node

import inquirer, { Answers } from "inquirer";
import chalk from "chalk"


console.log(chalk.bgWhiteBright.blackBright("\t\nTHIS IS A Q/A GAME YOU GUESS CORRECT ANSWER AND WIN THE GAME\t\n"));


const answer:Answers =await inquirer.prompt([
    {
        message: "1) TypeScript mein primitive data types kitne hain?",
        type : "list",
        name:"Options",
        choices:["a) 5","b) 6","c) 7","d) 8"]
    
    },{
        message: "2) TypeScript ka default access modifier kya hai?",
        type : "list",
        name:"Options2",
        choices:["a) public","b) private","c) protected","d) default"]
    },{
        message: "3) TypeScript mein 'any' data type ka istemal kis maqsad ke liye hota hai?",
        type : "list",
        name:"Options3",
        choices:["a) Kisi bhi tarah ki variable declare karne ke liye","b) Type safety ko avoid karne ke liye","c) Specific data type ka pata nahi hone par fallback ke liye","d) Function overloading ke liye"]
    },{
        message: "4) TypeScript mein 'typeof' operator ka istemal kis kaam ke liye hota hai?",
        type : "list",
        name:"Options4",
        choices:["a) Ek variable ka data type determine karne ke liye","b) Ek function ka return type specify karne ke liye","c) Object properties ka type check karne ke liye","d) Enum values ko access karne ke liye"]
    }

]);
if (answer.Options == "b) 6" && answer.Options2 == "a) public" && answer.Options3 == "c) Specific data type ka pata nahi hone par fallback ke liye" && answer.Options4 == "a) Ek variable ka data type determine karne ke liye"){
if (answer.Options == "b) 6") {
    console.log(chalk.bold.bgGreen("Correct Answer"));
    console.log("Jawab: b) 6 (number, string, boolean, null, undefined, symbol)");
}else{
    console.log(chalk.bold.bgRed("Incorrect Answer"));
    console.log("Jawab: b) 6 (number, string, boolean, null, undefined, symbol)");
};
if (answer.Options2 == "a) public") {
    console.log(chalk.bold.bgGreen("Correct Answer"));
    console.log("Jawab: a) public");
}else{
    console.log(chalk.bold.bgRed("Incorrect Answer"));
    console.log("Jawab: a) public");
};
if (answer.Options3 == "c) Specific data type ka pata nahi hone par fallback ke liye") {
    console.log(chalk.bold.bgGreen("Correct Answer"));
    console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
}else{
    console.log(chalk.bold.bgRed("Incorrect Answer"));
    console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
};
if (answer.Options4 == "a) Ek variable ka data type determine karne ke liye") {
    console.log(chalk.bold.bgGreen("Correct Answer"));
    console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
}else{
    console.log(chalk.bold.bgRed("Incorrect Answer"));
    console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
};
console.log(chalk.bold.bgGreenBright("\n\t YOU ARE WINNER \n\t"));

}else{
    if (answer.Options == "b) 6") {
        console.log(chalk.bold.bgGreen("Correct Answer"));
        console.log("Jawab: b) 6 (number, string, boolean, null, undefined, symbol)");
    }else{
        console.log(chalk.bold.bgRed("Incorrect Answer"));
        console.log("Jawab: b) 6 (number, string, boolean, null, undefined, symbol)");
    };
    if (answer.Options2 == "a) public") {
        console.log(chalk.bold.bgGreen("Correct Answer"));
        console.log("Jawab: a) public");
    }else{
        console.log(chalk.bold.bgRed("Incorrect Answer"));
        console.log("Jawab: a) public");
    };
    if (answer.Options3 == "c) Specific data type ka pata nahi hone par fallback ke liye") {
        console.log(chalk.bold.bgGreen("Correct Answer"));
        console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
    }else{
        console.log(chalk.bold.bgRed("Incorrect Answer"));
        console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
    };
    if (answer.Options4 == "a) Ek variable ka data type determine karne ke liye") {
        console.log(chalk.bold.bgGreen("Correct Answer"));
        console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
    }else{
        console.log(chalk.bold.bgRed("Incorrect Answer"));
        console.log("Jawab: c) Specific data type ka pata nahi hone par fallback ke liye");
    };
    console.log(chalk.bold.bgRedBright("\n\t YOU LOST \n\t"));
    
}