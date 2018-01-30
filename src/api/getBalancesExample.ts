import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getBalances.
 */
export async function getBalancesExample(addresses: string[], threshold: number): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing getBalances on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.getBalances({ addresses, threshold });
        console.log("<== Success");
        console.log();
        if (response.balances && response.balances.length > 0) {
            console.log(`\tTotal Balances: ${response.balances.length}`);
            console.log();
            response.balances.slice(0, 50)
                .forEach(balance => {
                    console.log(`\tbalance: ${balance}`);
                });
            if (response.balances.length > 50) {
                console.log(`\t...`);
                console.log(`\tlist truncated`);
            }
        } else {
            console.log(`\tNo Balances Found`);
        }
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
