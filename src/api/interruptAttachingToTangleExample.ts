import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import { PAL } from "@iota-pico/pal-nodejs/dist/pal";
import * as networkConfig from "../networkConfig";

/**
 * Example of API interruptAttachingToTangle.
 */
export async function interruptAttachingToTangleExample(): Promise<void> {
    await PAL.initialize();

    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing interruptAttachingToTangle on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        await apiClient.interruptAttachingToTangle();
        console.log("<== Success");
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
