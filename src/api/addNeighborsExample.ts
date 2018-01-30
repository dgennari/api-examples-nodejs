import { NodeClient } from "@iota-pico/api/dist/client/nodeClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API addNeighbors.
 */
export async function addNeighborsExample(neighbor: string): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing addNeighbors on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await nodeClient.addNeighbors({ uris: [neighbor] });
        console.log("<== Success");
        console.log();
        console.log(`\tNeighbours Added: ${response.addedNeighbors}`);
        console.log();
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
