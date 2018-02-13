import { ApiClient } from "@iota-pico/api/dist/client/apiClient";
import { ErrorHelper } from "@iota-pico/core/dist/helpers/errorHelper";
import { PAL } from "@iota-pico/pal-nodejs/dist/pal";
import * as networkConfig from "../networkConfig";

/**
 * Example of API getInclusionStates.
 */
export async function getInclusionStatesExample(transactions: string[], tips: string[]): Promise<void> {
    await PAL.initialize();

    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const apiClient = new ApiClient(networkClient, "1", networkConfig.getAdditionalHeaders());

    console.info(`==> Performing getInclusionStates on ${networkEndPoint.getUri()}`);
    console.info();

    try {
        const response = await apiClient.getInclusionStates({ transactions, tips });
        console.log("<== Success");
        console.log();
        if (response.states && response.states.length > 0) {
            console.log(`\tTotal States: ${response.states.length}`);
            console.log();
            response.states.slice(0, 50)
                .forEach(state => {
                    console.log(`\tstate: ${state}`);
                });
            if (response.states.length > 50) {
                console.log(`\t...`);
                console.log(`\tlist truncated`);
            }
        } else {
            console.log(`\tNo States Found`);
        }
    } catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(ErrorHelper.format(err, true));
    }
}
