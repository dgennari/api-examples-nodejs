[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iota-pico/api-examples-nodejs/master/LICENSE) [![Build Status](https://travis-ci.org/iota-pico/api-examples-nodejs.svg?branch=master)](https://travis-ci.org/iota-pico/api-examples-nodejs) [![NSP Status](https://nodesecurity.io/orgs/iota-pico/projects/bac7c25d-1e89-487d-9301-c40a18797c4a/badge)](https://nodesecurity.io/orgs/iota-pico/projects/bac7c25d-1e89-487d-9301-c40a18797c4a)

# IOTA Pico Framework Examples for NodeJS in TypeScript

Example code for using IOTA Pico Framework with NodeJS written in TypeScript.

# Installation

```shell
npm install @iota-pico/api-examples-nodejs
```

# Running

You can run the examples using the CLI:

```js
node ./bin/ipent
```

## Usage

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

# Configuration

If you want to modify the node that is used to service the examples please modify the config file config/networkConfig.json.

To connect to a node use:

```json
{
    "protocol": "https",
    "host": "nodes.thetangle.org",
    "port": 443
}
```

# Library

The IOTA Pico Framework is a multi-layered set of object oriented JavaScript libraries for use with the IOTA tangle.

If you don't want to use the layered versions of the libraries consider using the  ready bundled versions:
* [@iota-pico/lib-browser](https://github.com/iota-pico/lib-browser)
* [@iota-pico/lib-nodejs](https://github.com/iota-pico/lib-nodejs)

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The layered libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

# Contributing

Contributions are always welcome to the project. Feel free to raise issues, create pull requests or just make suggestions.

# Authors

Come and find us on the IOTA [Discord](https://discordapp.com/invite/fNGZXvh) development channels

* **Martyn Janes** - *obany* - ([https://github.com/obany](https://github.com/obany))

# Donations

IOTA donations are always welcome :smile:
```shell
QWJXX99QDEYWUWXEGA9QXSNOWOKHMFKCMSZTXDFLRZAFQRPQTHQDXSZWQQTAHNDNRYHMIKJYWQLKTFHBWSAOJDHAMB
```

# License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
