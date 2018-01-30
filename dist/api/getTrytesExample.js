"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const nodeClient_1 = require("@iota-pico/api/dist/client/nodeClient");
const errorHelper_1 = require("@iota-pico/core/dist/helpers/errorHelper");
const networkConfig = __importStar(require("../networkConfig"));
/**
 * Example of API getTrytes.
 */
async function getTrytesExample(hashes) {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new nodeClient_1.NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.info(`==> Performing getTrytes on ${networkEndPoint.getUri()}`);
    console.info();
    try {
        const response = await nodeClient.getTrytes({ hashes });
        console.log("<== Success");
        console.log();
        if (response.trytes && response.trytes.length > 0) {
            console.log(`\tTotal Trytes: ${response.trytes.length}`);
            console.log();
            response.trytes.slice(0, 50)
                .forEach(tryte => {
                console.log(`\ttryte: ${tryte}`);
            });
            if (response.trytes.length > 50) {
                console.log(`\t...`);
                console.log(`\tlist truncated`);
            }
        }
        else {
            console.log(`\tNo Trytes Found`);
        }
    }
    catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.getTrytesExample = getTrytesExample;
