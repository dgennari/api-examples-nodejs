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
        .option("--neighbors <comma separated uris>", "Neighbors to add/remove from your node e.g. udp://1.2.3.4:14600", (val: string) => val.split(","))
        .option("--bundles <comma separated hashes>", "Hashes to search for in bundles", (val: string) => val.split(","))
        .option("--addresses <comma separated hashes>", "Hashes to search for or get balances in addresses", (val: string) => val.split(","))
        .option("--tags <comma separated hashes>", "Hashes to search for in tags", (val: string) => val.split(","))
        .option("--approvees <comma separated hashes>", "Hashes to search for which confirm specified transaction", (val: string) => val.split(","))
        .option("--hashes <comma separated hashes>", "Hashes to return the trytes for", (val: string) => val.split(","))
        .option("--transactions <comma separated hashes>", "Hashes to get inclusion states for", (val: string) => val.split(","))
        .option("--tips <comma separated hashes>", "Hashes to get inclusion states for", (val: string) => val.split(","))
        .option("--threshold <int>", "Confirmation threshold", parseInt)
        .option("--depth <int>", "Number of bundles to go back to determine the transactions for approval.", parseInt)
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
        .option("--neighbors <uri>")
        .description("Add neighbors to your node.")
        .action(async (cmd) => {
            if (!cmd.parent || !cmd.parent.neighbors) {
                console.error("ERROR: neighbors option is required");
                return;
            }
            await runExample("addNeighbors", cmd.parent.neighbors);
        });

    commander
        .command("removeNeighbors")
        .option("--neighbors <uri>")
        .description("Remove neighbors from your node.")
        .action(async (cmd) => {
            if (!cmd.parent || !cmd.parent.neighbors) {
                console.error("ERROR: neighbor option is required");
                return;
            }
            await runExample("removeNeighbors", cmd.parent.neighbors);
        });

    commander
        .command("getTips")
        .description("Get the list of tips from the node.")
        .action(async () => {
            await runExample("getTips");
        });

    commander
        .command("findTransactions")
        .option("--bundles <comma separated hashes>")
        .option("--addresses <comma separated hashes>")
        .option("--tags <comma separated hashes>")
        .option("--approvees <comma separated hashes>")
        .description("Find the transactions which match the specified input.")
        .action(async (cmd) => {
            if (!cmd.parent || !(cmd.parent.bundles || cmd.parent.addresses || cmd.parent.tags || cmd.parent.approvees)) {
                console.error("ERROR: bundles/addresses/tags/approvees option is required");
                return;
            }
            await runExample("findTransactions", cmd.parent.bundles, cmd.parent.addresses, cmd.parent.tags, cmd.parent.approvees);
        });

    commander
        .command("getTrytes")
        .option("--hashes <comma separated hashes>")
        .description("Get the trytes for the hashes.")
        .action(async (cmd) => {
            if (!cmd.parent || !cmd.parent.hashes) {
                console.error("ERROR: hashes option is required");
                return;
            }
            await runExample("getTrytes", cmd.parent.hashes);
        });

    commander
        .command("getInclusionStates")
        .option("--transactions <comma separated hashes>")
        .option("--tips <comma separated hashes>")
        .description("Get the inclusion states of a set of transactions.")
        .action(async (cmd) => {
            if (!cmd.parent || !(cmd.parent.transactions || cmd.parent.tips)) {
                console.error("ERROR: transactions/tips option is required");
                return;
            }
            await runExample("getInclusionStates", cmd.parent.transactions || [], cmd.parent.tips || []);
        });

    commander
        .command("getBalances")
        .option("--addresses <comma separated hashes>")
        .option("--threshold <int>")
        .description("Get the balances of a set of transactions.")
        .action(async (cmd) => {
            if (!cmd.parent || !cmd.parent.addresses) {
                console.error("ERROR: addresses option is required");
                return;
            }
            await runExample("getBalances", cmd.parent.addresses, cmd.parent.threshold || 100);
        });

    commander
        .command("getTransactionsToApprove")
        .option("--depth <int>")
        .description("Tip selection which returns trunkTransaction and branchTransaction.")
        .action(async (cmd) => {
            if (!cmd.parent || cmd.parent.depth === undefined) {
                console.error("ERROR: depth option is required");
                return;
            }
            await runExample("getTransactionsToApprove", cmd.parent.depth);
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
