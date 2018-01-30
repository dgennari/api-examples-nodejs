import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getTips.
 */
export async function getTipsExample(): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing getTips on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.getTips();
        console.log("<== Success");
        console.log();
        if (response.hashes && response.hashes.length > 0) {
            console.log(`\tTotal Tips: ${response.hashes.length}`);
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
            console.log(`\tNo Tips Found`);
        }
    } catch (err) {
        console.log("<== Failed");
        console.log();
        console.log(ErrorHelper.format(err, true));
    }
}
