"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodeClient_1 = require("@iota-pico/api/dist/client/nodeClient");
const errorHelper_1 = require("@iota-pico/core/dist/helpers/errorHelper");
const networkEndPoint_1 = require("@iota-pico/core/dist/network/networkEndPoint");
const nodeJsNetworkClient_1 = require("@iota-pico/pal-nodejs/dist/network/nodeJsNetworkClient");
/**
 * Example of API getNodeInfo
 */
async function getNodeInfoExample() {
    // Connect to a node
    const networkEndPoint = new networkEndPoint_1.NetworkEndPoint("http", "node01.iotatoken.nl", "", 14265);
    const networkClient = new nodeJsNetworkClient_1.NodeJsNetworkClient(networkEndPoint);
    const nodeClient = new nodeClient_1.NodeClient(networkClient, "1");
    // Or use the sandbox environment
    // const networkEndPoint = new NetworkEndPoint("http", "sandbox.iotatoken.com", "/api/v1/commands", 14265);
    // const networkClient = new NodeJsNetworkClient(networkEndPoint);
    // const nodeClient = new NodeClient(networkClient, "1", { Authorization: "YOUR_TOKEN_HERE" });
    console.log(`==> Requesting getNodeInfo from ${networkEndPoint.getUri()}`);
    console.log();
    try {
        const response = await nodeClient.getNodeInfo();
        console.log("<== Success");
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
    }
    catch (err) {
        console.log("<== Failed");
        console.log(errorHelper_1.ErrorHelper.format(err));
    }
}
getNodeInfoExample();
