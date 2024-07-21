#!/usr/bin/env node
import inquirer from "inquirer";
let tasks = ["breakfast", "read quran"];
while (true) {
    console.log(tasks);
    let Option = await inquirer.prompt([
        {
            name: "option",
            message: "please select the following options :",
            type: "list",
            choices: ["add", "update", "view", "delete", "exit"],
        },
    ]);
    if (Option.option === "add") {
        let addtodo = await inquirer.prompt([
            {
                name: "todo",
                message: "what do you want to add in your list :",
                type: "input",
            },
        ]);
        tasks.push(addtodo.todo);
    }
    if (Option.option === "update") {
        let updatetodo = await inquirer.prompt([
            {
                name: "todo",
                message: "select from following to update the existing element",
                type: "list",
                choices: tasks.map((val) => val),
            },
        ]);
        let addtodo = await inquirer.prompt([
            {
                name: "todo",
                message: "what do you want to add :",
                type: "input",
            },
        ]);
        tasks = tasks.filter((val) => val !== updatetodo.todo);
        tasks = [...tasks, addtodo.todo];
    }
    if (Option.option === "view") {
    }
    if (Option.option === "delete") {
        let deletetodo = await inquirer.prompt([
            {
                name: "todo",
                message: "select from following to delete the element :",
                type: "list",
                choices: tasks.map((val) => val),
            },
        ]);
        tasks = tasks.filter((val) => val !== deletetodo.todo);
    }
    if (Option.option === "exit") {
        process.exit(0);
    }
}
