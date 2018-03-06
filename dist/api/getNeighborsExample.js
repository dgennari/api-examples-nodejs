"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const apiClient_1 = require("@iota-pico/api/dist/client/apiClient");
const errorHelper_1 = require("@iota-pico/core/dist/helpers/errorHelper");
const pal_1 = require("@iota-pico/pal-nodejs/dist/pal");
const networkConfig = __importStar(require("../networkConfig"));
/**
 * Example of API getNeighbors.
 */
async function getNeighborsExample() {
    await pal_1.PAL.initialize();
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new apiClient_1.ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.info(`==> Performing getNeighbors on ${networkEndPoint.getUri()}`);
    console.info();
    try {
        const response = await apiClient.getNeighbors();
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
        console.error("<== Failed");
        console.error();
        console.error(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.getNeighborsExample = getNeighborsExample;
