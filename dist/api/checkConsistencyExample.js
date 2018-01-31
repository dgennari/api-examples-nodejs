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
const networkConfig = __importStar(require("../networkConfig"));
/**
 * Example of API checkConsistency.
 */
async function checkConsistencyExample(tails) {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new apiClient_1.ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.info(`==> Performing checkConsistency on ${networkEndPoint.getUri()}`);
    console.info();
    try {
        const response = await apiClient.checkConsistency({ tails });
        console.log("<== Success");
        console.log();
        console.log(`\tState: ${response.state}`);
        console.log(`\tInfo: ${response.info}`);
    }
    catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.checkConsistencyExample = checkConsistencyExample;
