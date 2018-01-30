import { NodeClient } from "@iota-pico/api/dist/client/nodeClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getTransactionsToApprove.
 */
export async function getTransactionsToApproveExample(depth: number): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing getTransactionsToApprove on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await nodeClient.getTransactionsToApprove({ depth });
        console.log("<== Success");
        console.log(`\tTrunk Transaction: ${response.trunkTransaction}`);
        console.log(`\tBranch Transaction: ${response.branchTransaction}`);
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
