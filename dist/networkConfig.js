"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const networkClientFactory_1 = require("@iota-pico/core/dist/factories/networkClientFactory");
const networkEndPoint_1 = require("@iota-pico/core/dist/network/networkEndPoint");
const networkConfig_json_1 = __importDefault(require("../config/networkConfig.json"));
/**
 * Example network configuration.
 */
function getEndPoint() {
    return new networkEndPoint_1.NetworkEndPoint(networkConfig_json_1.default.protocol, networkConfig_json_1.default.host, networkConfig_json_1.default.port, networkConfig_json_1.default.rootPath);
}
exports.getEndPoint = getEndPoint;
function getAdditionalHeaders() {
    return networkConfig_json_1.default.additionalHeaders;
}
exports.getAdditionalHeaders = getAdditionalHeaders;
function getNetworkClient(networkEndPoint) {
    return networkClientFactory_1.NetworkClientFactory
        .instance()
        .create("default", networkEndPoint);
}
exports.getNetworkClient = getNetworkClient;
