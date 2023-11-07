import inquirer from "inquirer"
import chalk from "chalk"

class Player{
    name:string
    fuel:number = 100
    portion_drink:number = 3

    constructor(name:string){
        this.name = name
    }

    decreaseFuel(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

    increaseFuel(){
        this.fuel = 100
        this.portion_drink -= 1
    }
}


class Opponent{
    name:string
    fuel:number = 100

    constructor(name:string){
        this.name = name
    }

    decreaseFuel(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}


const player = await inquirer.prompt([
    {
    name: "player_name",
    type: "input",
    message: "Type Player your name: "
    }
])

const opponent = await inquirer.prompt([
    {
    name: "select",
    type: "list",
    message: "Select Your Opponent",
    choices: ["Selecton", "Assassin", "Zombie"]
    }
])

let p1 = new Player(player.player_name)
let op1 = new Opponent(opponent.select)


do{
    if(opponent.select == "Selecton"){
    const ask = await inquirer.prompt([
        {
        name: "option",
        type: "list",
        message: "Select what to do next 🙄",
        choices: ["Attack 🏹", "Drink Portion 🍻", "Run For Your Life 💨"]
        }
    ])
    
    if(ask.option == "Attack 🏹"){
        let num = Math.floor(Math.random() * 2);
        if(num > 0){
            p1.decreaseFuel()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${op1.name} fuel is ${op1.fuel}`));
            if(p1.fuel == 0){
                console.log(`${chalk.red.bold.italic("🩸 You Loose, Better Luck Next Time! 🩸")}`);
                process.exit()
            }
        }else {
            op1.decreaseFuel()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${op1.name} fuel is ${op1.fuel}`));
            if(op1.fuel == 0){
                console.log(`${chalk.green.bold.italic("🎉 You Won! 🎉")}`);
                process.exit()
            }
        }
    }else if(ask.option == "Drink Portion 🍻"){
        if(p1.portion_drink >= 1){
            p1.increaseFuel()
            console.log(`${chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`)}`);
        }else {
            console.log(`You have 0 Health Portion!`);
        }
    }else {
        console.log(`${chalk.red.bold.italic("🩸 You Loose, Better Luck Next Time! 🩸")}`);
        process.exit()   
    }
} else if(opponent.select == "Assassin"){
    const ask = await inquirer.prompt([
        {
        name: "option",
        type: "list",
        message: "Select what to do next 🙄",
        choices: ["Attack 🏹", "Drink Portion 🍻", "Run For Your Life 💨"]
        }
    ])
    
    if(ask.option == "Attack 🏹"){
        let num = Math.floor(Math.random() * 2);
        if(num > 0){
            p1.decreaseFuel()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${op1.name} fuel is ${op1.fuel}`));
            if(p1.fuel == 0){
                console.log(`${chalk.red.bold.italic("🩸 You Loose, Better Luck Next Time! 🩸")}`);
                process.exit()
            }
        }else {
            op1.decreaseFuel()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${op1.name} fuel is ${op1.fuel}`));
            if(op1.fuel == 0){
                console.log(`${chalk.green.bold.italic("🎉 You Won! 🎉")}`);
                process.exit()
            }
        }
    }else if(ask.option == "Drink Portion 🍻"){
        if(p1.portion_drink >= 1){
            p1.increaseFuel()
            console.log(`${chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`)}`);
        }else {
            console.log(`You have 0 Health Portion!`);
        }
    }else {
        console.log(`${chalk.red.bold.italic("🩸 You Loose, Better Luck Next Time! 🩸")}`);
        process.exit()   
    }
} else if(opponent.select == "Zombie"){
    const ask = await inquirer.prompt([
        {
        name: "option",
        type: "list",
        message: "Select what to do next 🙄",
        choices: ["Attack 🏹", "Drink Portion 🍻", "Run For Your Life 💨"]
        }
    ])
    
    if(ask.option == "Attack 🏹"){
        let num = Math.floor(Math.random() * 2);
        if(num > 0){
            p1.decreaseFuel()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${op1.name} fuel is ${op1.fuel}`));
            if(p1.fuel == 0){
                console.log(`${chalk.red.bold.italic("🩸 You Loose, Better Luck Next Time! 🩸")}`);
                process.exit()
            }
        }else {
            op1.decreaseFuel()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${op1.name} fuel is ${op1.fuel}`));
            if(op1.fuel == 0){
                console.log(`${chalk.green.bold.italic("🎉 You Won! 🎉")}`);
                process.exit()
            }
        }
    }else if(ask.option == "Drink Portion 🍻"){
        if(p1.portion_drink >= 1){
            p1.increaseFuel()
            console.log(`${chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`)}`);
        }else {
            console.log(`You have 0 Health Portion!`);
        }
    }else {
        console.log(`${chalk.red.bold.italic("🩸 You Loose, Better Luck Next Time! 🩸")}`);
        process.exit()   
    }
}
}
while(true)
