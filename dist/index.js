"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = __importDefault(require("commander"));
/**
 * Main CLI Interface
 */
async function run() {
    const oldConsoleError = console.error;
    console.error = (error) => {
        oldConsoleError(chalk_1.default.red(error));
    };
    const packageJson = require("../package.json");
    console.log(packageJson.description);
    console.log("".padStart(packageJson.description.length, "="));
    commander_1.default
        .option("-n, --neighbor <uri>", "A neighbor to add/remove from your node e.g. udp://1.2.3.4:14600")
        .version(packageJson.version);
    commander_1.default
        .command("getNodeInfo")
        .description("Returns information about your node.")
        .action(async () => {
        await runExample("getNodeInfo");
    });
    commander_1.default
        .command("getNeighbors")
        .description("Returns the set of neighbors you are connected with.")
        .action(async () => {
        await runExample("getNeighbors");
    });
    commander_1.default
        .command("addNeighbors")
        .option("-n, --neighbor <uri>")
        .description("Add a neighbor to your node.")
        .action(async (cmd) => {
        if (!cmd.parent || !cmd.parent.neighbor) {
            console.error("ERROR: neighbor option is required");
            return;
        }
        await runExample("addNeighbors", cmd.parent.neighbor);
    });
    commander_1.default
        .command("removeNeighbors")
        .option("-n, --neighbor <uri>")
        .description("Remove a neighbor from your node.")
        .action(async (cmd) => {
        if (!cmd.parent || !cmd.parent.neighbor) {
            console.error("ERROR: neighbor option is required");
            return;
        }
        await runExample("removeNeighbors", cmd.parent.neighbor);
    });
    commander_1.default
        .command("*", undefined, { noHelp: true })
        .action(() => {
        console.error(`Unknown Command: ${commander_1.default.args.join(" ")}`);
        commander_1.default.help();
    });
    commander_1.default.parse(process.argv);
    if (!process.argv.slice(2).length) {
        commander_1.default.help();
    }
}
exports.run = run;
async function runExample(api, ...args) {
    try {
        const module = await require(`./api/${api}Example`);
        const exampleMethod = module[`${api}Example`];
        exampleMethod(...args);
    }
    catch (err) {
        console.log(chalk_1.default.red(`Unable to load example ${api}.`));
    }
}
