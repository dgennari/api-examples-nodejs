[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-examples-nodejs-ts/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-examples-nodejs-ts.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-examples-nodejs-ts) [![NSP Status](https://nodesecurity.io/orgs/iotaeco/projects/1190c826-1d26-4619-b617-88b2f6cc4c0b/badge)](https://nodesecurity.io/orgs/iotaeco/projects/1190c826-1d26-4619-b617-88b2f6cc4c0b)

# IOTA Pico Framework Examples for NodeJS in TypeScript

## Introduction

The IOTA Pico Framework is intended to be a multi-layered set of object oriented JavaScript libraries.

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

## Installation

```shell
npm install @iota-pico/examples-nodejs-ts
```

## Examples

Example code for using IOTA Pico Framework with NodeJS written in TypeScript.

## Running

You can run the examples using the CLI:

```js
node ./bin/ipent
```

### Usage

```shell
Usage: ipent [options] [command]


  Options:

    --neighbors <comma separated uris>       Neighbors to add/remove from your node e.g. udp://1.2.3.4:14600
    --bundles <comma separated hashes>       Hashes to search for in bundles
    --addresses <comma separated hashes>     Hashes to search for or get balances in addresses
    --tags <comma separated hashes>          Hashes to search for in tags
    --approvees <comma separated hashes>     Hashes to search for which confirm specified transaction
    --hashes <comma separated hashes>        Hashes to return the trytes for
    --transactions <comma separated hashes>  Hashes to get inclusion states for
    --tips <comma separated hashes>          Hashes to get inclusion states for
    --threshold <int>                        Confirmation threshold
    --depth <int>                            Number of bundles to go back to determine the transactions for approval
    --trunkTransaction <hash>                Trunk transaction to approve
    --branchTransaction <hash>               Branch transaction to approve
    --minWeightMagnitude <int>               Proof of Work intensity. Minimum value is 18
    --trytes <comma separates trytes>        List of trytes (raw transaction data) to attach/broadcast/store in the tangle
    --tails <comma separated hashes>         Hashes for tails to check consistency
    -V, --version                            output the version number
    -h, --help                               output usage information


  Commands:

    getNodeInfo                         Returns information about your node.
    getNeighbors                        Returns the set of neighbors you are connected with.
    addNeighbors [options]              Add neighbors to your node.
    removeNeighbors [options]           Remove neighbors from your node.
    getTips                             Get the list of tips from the node.
    findTransactions [options]          Find the transactions which match the specified input.
    getTrytes [options]                 Get the trytes for the hashes.
    getInclusionStates [options]        Get the inclusion states of a set of transactions.
    getBalances [options]               Get the balances of a set of transactions.
    getTransactionsToApprove [options]  Tip selection which returns trunkTransaction and branchTransaction.
    attachToTangle [options]            Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work.
    interruptAttachingToTangle          Interrupts and completely aborts the attachToTangle process.
    broadcastTransactions [options]     Broadcast a list of transactions to all neighbors.
    storeTransactions [options]         Store transactions into the local storage.
    getMissingTransactions              Get transactions with missing references.
    checkConsistency [options]          Check the consistency of tail hashes.
    wereAddressesSpentFrom [options]    Have the requested addresses been spent from already.
```

## Configuration

If you want to modify the node that is used to service the examples please modify the config file config/networkConfig.json.

To connect to a node use:

```json
{
    "protocol": "https",
    "host": "nodes.thetangle.org",
    "port": 443
}
```

To connect to the sandbox use the following:

```json
{
    "protocol": "http",
    "host": "sandbox.iotatoken.com",
    "path": "/api/v1/commands",
    "port": 14265,
    "additionalHeaders": {
        "Authorization": "YOUR_SANDBOX_TOKEN"
    }
}
```