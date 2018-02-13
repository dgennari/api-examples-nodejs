import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import { PAL } from "@iota-pico/pal-nodejs/dist/pal";
import * as networkConfig from "../networkConfig";

/**
 * Example of API removeNeighbors.
 */
export async function removeNeighborsExample(uris: string[]): Promise<void> {
    await PAL.initialize();

    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing removeNeighbors on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.removeNeighbors({ uris });
        console.log("<== Success");
        console.log();
        console.log(`\tNeighbours Removed: ${response.removedNeighbors}`);
        console.log();
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
