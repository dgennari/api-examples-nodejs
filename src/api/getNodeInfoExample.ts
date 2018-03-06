import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import { PAL } from "@iota-pico/pal-nodejs/dist/pal";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getNodeInfo.
 */
export async function getNodeInfoExample(): Promise<void> {
    await PAL.initialize();

    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing getNodeInfo on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.getNodeInfo();
        console.log("<== Success");
        console.log();
        console.log(`\tappName: ${response.appName}`);
        console.log(`\tappVersion: ${response.appVersion}`);
        console.log(`\tjreAvailableProcessors: ${response.jreAvailableProcessors}`);
        console.log(`\tjreFreeMemory: ${response.jreFreeMemory}`);
        console.log(`\tjreVersion: ${response.jreVersion}`);
        console.log(`\tjreMaxMemory: ${response.jreMaxMemory}`);
        console.log(`\tjreTotalMemory: ${response.jreTotalMemory}`);
        console.log(`\tlatestMilestone: ${response.latestMilestone}`);
        console.log(`\tlatestMilestoneIndex: ${response.latestMilestoneIndex}`);
        console.log(`\tlatestSolidSubtangleMilestone: ${response.latestSolidSubtangleMilestone}`);
        console.log(`\tlatestSolidSubtangleMilestoneIndex: ${response.latestSolidSubtangleMilestoneIndex}`);
        console.log(`\tneighbors: ${response.neighbors}`);
        console.log(`\tpacketsQueueSize: ${response.packetsQueueSize}`);
        console.log(`\ttime: ${response.time}`);
        console.log(`\ttips: ${response.tips}`);
        console.log(`\ttransactionsToRequest: ${response.transactionsToRequest}`);
        console.log(`\tduration: ${response.duration}`);
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
