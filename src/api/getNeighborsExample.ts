import { NodeClient } from "@iota-pico/api/dist/client/nodeClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getNeighbors.
 */
export async function getNeighborsExample(): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.log(`==> Performing getNeighbors on ${networkEndPoint.getUri()}`);
    console.log();

    try {
        const response = await nodeClient.getNeighbors();
        console.log("<== Success");
        console.log();
        if (response.neighbors && response.neighbors.length > 0) {
            response.neighbors.forEach(neighbour => {
                console.log(`\taddress: ${neighbour.address}`);
                console.log(`\tnumberOfAllTransactions: ${neighbour.numberOfAllTransactions}`);
                console.log(`\tnumberOfInvalidTransactions: ${neighbour.numberOfInvalidTransactions}`);
                console.log(`\tnumberOfNewTransactions: ${neighbour.numberOfNewTransactions}`);
                console.log();
            });
        } else {
            console.log(`\tNo Neighbours Found`);
        }
    } catch (err) {
        console.log("<== Failed");
        console.log();
        console.log(ErrorHelper.format(err, true));
    }
}
