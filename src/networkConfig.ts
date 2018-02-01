import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { INetworkEndPoint } from "@iota-pico/core/dist/interfaces/INetworkEndPoint";
import { NetworkEndPoint } from "@iota-pico/core/dist/network/networkEndPoint";
import { NetworkClient } from "@iota-pico/pal-nodejs/dist/network/networkClient";
import networkConfigJson from "../config/networkConfig.json";

/**
 * Example network configuration.
 */
export function getEndPoint(): INetworkEndPoint {
    return new NetworkEndPoint(networkConfigJson.protocol, networkConfigJson.host, networkConfigJson.path, networkConfigJson.port);
}

export function getAdditionalHeaders(): { [headers: string]: string } {
    return networkConfigJson.additionalHeaders;
}

export function getNetworkClient(networkEndPoint: INetworkEndPoint): INetworkClient {
    return new NetworkClient(networkEndPoint);
}
