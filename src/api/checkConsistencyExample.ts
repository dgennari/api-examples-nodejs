import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API checkConsistency.
 */
export async function checkConsistencyExample(tails: string[]): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing checkConsistency on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.checkConsistency({ tails });
        console.log("<== Success");
        console.log();
        console.log(`\tState: ${response.state}`);
        console.log(`\tInfo: ${response.info}`);
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
