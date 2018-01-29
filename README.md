[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-examples-nodejs-ts/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-examples-nodejs-ts.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-examples-nodejs-ts) [![NSP Status](https://nodesecurity.io/orgs/iotaeco/projects/1190c826-1d26-4619-b617-88b2f6cc4c0b/badge)](https://nodesecurity.io/orgs/iotaeco/projects/1190c826-1d26-4619-b617-88b2f6cc4c0b)

# IOTA Pico Framework Examples for NodeJS in TypeScript

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

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    api [example]  Run an API example [getNodeInfo, getNeighbors]
```

## Configuration

If you want to modify the node that is used to service the examples please modify the config file config/networkConfig.json.

To connect to a node use:

```json
{
    "protocol": "http",
    "host": "n1.iota.eco",
    "port": 14265
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