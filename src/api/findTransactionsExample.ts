import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API findTransactions.
 */
export async function findTransactionsExample(bundles: string[], addresses: string[], tags: string[], approvees: string[]): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing findTransactions on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.findTransactions({ bundles, addresses, tags, approvees });
        console.log("<== Success");
        console.log();
        if (response.hashes && response.hashes.length > 0) {
            console.log(`\tTotal Hashes: ${response.hashes.length}`);
            console.log();
            response.hashes.slice(0, 50)
                .forEach(hash => {
                    console.log(`\thash: ${hash}`);
                });
            if (response.hashes.length > 50) {
                console.log(`\t...`);
                console.log(`\tlist truncated`);
            }
        } else {
            console.log(`\tNo Transactions Found`);
        }
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
