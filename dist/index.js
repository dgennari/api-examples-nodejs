"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const commander = require("commander");
/**
 * Main CLI Interface
 */
async function run() {
    commander
        .version(require("../package.json").version);
    commander
        .command("api [example]")
        .description("Run an API example [getNodeInfo, getNeighbors]")
        .action(async (api, options) => {
        if (!api) {
            console.log(chalk_1.default.red(`You must specify which API to call.`));
        }
        else {
            try {
                const module = await Promise.resolve().then(() => require(`./api/${api}Example`));
                const exampleMethod = module[`${api}Example`];
                exampleMethod();
            }
            catch (err) {
                console.log(chalk_1.default.red(`Unable to load example ${api}.`));
            }
        }
    });
    commander.parse(process.argv);
    if (!process.argv.slice(2).length) {
        commander.help();
    }
}
exports.run = run;
