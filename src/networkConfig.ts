import { NetworkClientFactory } from "@iota-pico/core/dist/factories/networkClientFactory";
import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { INetworkEndPoint } from "@iota-pico/core/dist/interfaces/INetworkEndPoint";
import { NetworkEndPoint } from "@iota-pico/core/dist/network/networkEndPoint";
import networkConfigJson from "../config/networkConfig.json";

/**
 * Example network configuration.
 */
export function getEndPoint(): INetworkEndPoint {
    return new NetworkEndPoint(networkConfigJson.protocol, networkConfigJson.host, networkConfigJson.port, networkConfigJson.rootPath);
}

export function getAdditionalHeaders(): { [headers: string]: string } {
    return networkConfigJson.additionalHeaders;
}

export function getNetworkClient(networkEndPoint: INetworkEndPoint): INetworkClient {
    return NetworkClientFactory
        .instance()
        .create("default", networkEndPoint);
}
