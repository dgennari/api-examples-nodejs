import chalk from "chalk";
import commander from "commander";

/**
 * Main CLI Interface
 */
export async function run(): Promise<void> {
    const packageJson = require("../package.json");

    const oldConsoleError = console.error;
    console.error = (error: any) => {
        oldConsoleError(error ? chalk.red(error) : "");
    };

    console.log(packageJson.description);
    console.log("".padStart(packageJson.description.length, "="));

    commander
        .option("-n, --neighbor <uri>", "A neighbor to add/remove from your node e.g. udp://1.2.3.4:14600")
        .version(packageJson.version);

    commander
        .command("getNodeInfo")
        .description("Returns information about your node.")
        .action(async () => {
            await runExample("getNodeInfo");
        });

    commander
        .command("getNeighbors")
        .description("Returns the set of neighbors you are connected with.")
        .action(async () => {
            await runExample("getNeighbors");
        });

    commander
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

    commander
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

    commander
        .command("*", undefined, { noHelp: true })
        .action(() => {
            console.error(`Unknown Command: ${commander.args.join(" ")}`);
            commander.help();
        });

    commander.parse(process.argv);

    if (!process.argv.slice(2).length) {
        commander.help();
    }
}

async function runExample(api: string, ...args: any[]): Promise<void> {
    try {
        const oldConsoleInfo = console.info;
        console.info = (info: any) => {
            oldConsoleInfo(info ? chalk.cyan(info) : "");
        };

        const oldConsoleLog = console.log;
        console.log = (log: any) => {
            oldConsoleLog(log ? chalk.green(log) : "");
        };

        const module = await require(`./api/${api}Example`);
        const exampleMethod = module[`${api}Example`];
        exampleMethod(...args);
    } catch (err) {
        console.log(chalk.red(`Unable to load example ${api}.`));
    }
}
