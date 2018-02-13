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
 * Example of API getTips.
 */
async function getTipsExample() {
    await pal_1.PAL.initialize();
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new apiClient_1.ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.info(`==> Performing getTips on ${networkEndPoint.getUri()}`);
    console.info();
    try {
        const response = await apiClient.getTips();
        console.log("<== Success");
        console.log();
        if (response.hashes && response.hashes.length > 0) {
            console.log(`\tTotal Tips: ${response.hashes.length}`);
            console.log();
            response.hashes.slice(0, 50)
                .forEach(hash => {
                console.log(`\thash: ${hash}`);
            });
            if (response.hashes.length > 50) {
                console.log(`\t...`);
                console.log(`\tlist truncated`);
            }
        }
        else {
            console.log(`\tNo Tips Found`);
        }
    }
    catch (err) {
        console.log("<== Failed");
        console.log();
        console.log(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.getTipsExample = getTipsExample;
