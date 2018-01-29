import { NodeClient } from "@iota-pico/api/dist/client/nodeClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getNodeInfo.
 */
export async function getNodeInfoExample(): Promise<void> {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.log(`==> Requesting getNodeInfo from ${networkEndPoint.getUri()}`);
    console.log();

    try {
        const response = await nodeClient.getNodeInfo();
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
        console.log("<== Failed");
        console.log();
        console.log(ErrorHelper.format(err, true));
    }
}
