"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodeClient_1 = require("@iota-pico/api/dist/client/nodeClient");
const errorHelper_1 = require("@iota-pico/core/dist/helpers/errorHelper");
const networkConfig = require("../networkConfig");
/**
 * Example of API getNeighbors.
 */
async function getNeighborsExample() {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new nodeClient_1.NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.log(`==> Requesting getNeighbors from ${networkEndPoint.getUri()}`);
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
        }
        else {
            console.log(`\tNo Neighbours Found`);
        }
    }
    catch (err) {
        console.log("<== Failed");
        console.log();
        console.log(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.getNeighborsExample = getNeighborsExample;
