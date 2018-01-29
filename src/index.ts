import chalk from "chalk";
import * as commander from "commander";

/**
 * Main CLI Interface
 */
export async function run(): Promise<void> {
    commander
        .version(require("../package.json").version);

    commander
        .command("api [example]")
        .description("Run an API example [getNodeInfo, getNeighbors]")
        .action(async (api, options) => {
            if (!api) {
                console.log(chalk.red(`You must specify which API to call.`));
            } else {
                try {
                    const module = await import(`./api/${api}Example`);
                    const exampleMethod = module[`${api}Example`];
                    exampleMethod();
                } catch (err) {
                    console.log(chalk.red(`Unable to load example ${api}.`));
                }
            }
        });

    commander.parse(process.argv);

    if (!process.argv.slice(2).length) {
        commander.help();
    }
}
