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
 * Example of API getBalances.
 */
async function getBalancesExample(addresses, threshold) {
    await pal_1.PAL.initialize();
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new apiClient_1.ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.info(`==> Performing getBalances on ${networkEndPoint.getUri()}`);
    console.info();
    try {
        const response = await apiClient.getBalances({ addresses, threshold });
        console.log("<== Success");
        console.log();
        if (response.balances && response.balances.length > 0) {
            console.log(`\tTotal Balances: ${response.balances.length}`);
            console.log();
            response.balances.slice(0, 50)
                .forEach(balance => {
                console.log(`\tbalance: ${balance}`);
            });
            if (response.balances.length > 50) {
                console.log(`\t...`);
                console.log(`\tlist truncated`);
            }
        }
        else {
            console.log(`\tNo Balances Found`);
        }
    }
    catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.getBalancesExample = getBalancesExample;
