import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import { PAL } from "@iota-pico/pal-nodejs/dist/pal";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getTransactionsToApprove.
 */
export async function getTransactionsToApproveExample(depth: number): Promise<void> {
    await PAL.initialize();

    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing getTransactionsToApprove on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.getTransactionsToApprove({ depth });
        console.log("<== Success");
        console.log(`\tTrunk Transaction: ${response.trunkTransaction}`);
        console.log(`\tBranch Transaction: ${response.branchTransaction}`);
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
