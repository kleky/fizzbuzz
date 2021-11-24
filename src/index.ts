import yargs from 'yargs/yargs';
import { outputFizzbuzz } from './output-fizzbuzz';
import chalk from "chalk";
import boxen from "boxen";

const greeting = chalk.white.bold("Welcome to FizzBuzz!");

const boxenOptions: boxen.Options = {
    padding: 1,
    margin: 1,
    borderStyle: boxen.BorderStyle.Classic,
    borderColor: "green",
    backgroundColor: "#555555"
};

const msgBox = boxen( greeting, boxenOptions );
console.log(msgBox)

const options = yargs(process.argv.slice(2)).options({
    f: { type: 'number', alias: 'from', description: 'Print numbers from', demandOption: true },
    t: { type: 'number', alias: 'to', description: 'Print numbers to', demandOption: true },
}).argv;

console.log(`Outputting FizzBuzz from ${options.f} to ${options.t}:`);

outputFizzbuzz(options.f, options.t);
