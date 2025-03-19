const fs = require('fs');
const path = require('path'); 
const HDWalletProvider = require('@truffle/hdwallet-provider');

function provider(network) {
    if (network == "polygon"){
        return new HDWalletProvider({
            privateKeys: [fs.readFileSync(path.resolve(__dirname, './keystores/polygon.pk')).toString().trim()],
            providerOrUrl: "https://polygon-mainnet.g.alchemy.com/v2/I_jm3zNKwAzFEwN9DT15-sAhZc5z3I0M"
        }); 
    }

    if (network == "mumbai"){
        return new HDWalletProvider({
            // make sure you create a folder keystores, create a file mumbai.pk and put your private key there
            privateKeys: [fs.readFileSync(path.resolve(__dirname, './keystores/mumbai.pk')).toString().trim()],
            providerOrUrl: "https://polygon-mumbai.blockpi.network/v1/rpc/public"
        }); 
    }

    if (network == "amoy"){
        return new HDWalletProvider({
            // make sure you create a folder keystores, create a file mumbai.pk and put your private key there
            privateKeys: [fs.readFileSync(path.resolve(__dirname, './keystores/amoy.pk')).toString().trim()],
            providerOrUrl: "https://rpc-amoy.polygon.technology/"
        }); 
    }

    if (network == "baseSepolia"){
        return new HDWalletProvider({
            // make sure you create a folder keystores, create a file mumbai.pk and put your private key there
            privateKeys: [fs.readFileSync(path.resolve(__dirname, './keystores/baseSepolia.pk')).toString().trim()],
            providerOrUrl: "https://sepolia.base.org"
        }); 
    }

    if (network == "base"){
        return new HDWalletProvider({
            // make sure you create a folder keystores, create a file mumbai.pk and put your private key there
            privateKeys: [fs.readFileSync(path.resolve(__dirname, './keystores/base.pk')).toString().trim()],
            providerOrUrl: "https://base-mainnet.g.alchemy.com/v2/I_jm3zNKwAzFEwN9DT15-sAhZc5z3I0M"
        }); 
    }

    if (network !== 'kovan' && network !== 'mainnet') {
        throw new Error('Allowed network are kovan and mainnet');
    } else if (!fs.existsSync(path.resolve(__dirname, '../.pk'))) {
        throw new Error('Private key file ".pk" does not exist in monorepo root');
    }
    return new HDWalletProvider({
        privateKeys: [fs.readFileSync(path.resolve(__dirname, '../.pk')).toString().trim()],
        providerOrUrl: network === 'kovan'
            ? "wss://kovan.infura.io/ws/v3/7f00ea5349e64a078e7a9533c9126cef"
            : "wss://mainnet.infura.io/ws/v3/7f00ea5349e64a078e7a9533c9126cef",
    });    
}
module.exports = {
    contracts_directory: path.resolve(__dirname, 'contracts'),
    contracts_build_directory: path.resolve(__dirname, 'build'),
    migrations_directory: path.resolve(__dirname, 'migrations'),
    networks: {
        dev: {
            // for WSL use: grep -m 1 nameserver /etc/resolv.conf | awk '{print $2}'
            host: process.env.WSL_HOST || "127.0.0.1", // 172.25.128.1
            port: 8888,
            network_id: "*" // Match any network id
        },
        stage: {
            provider: () => provider('kovan'),
            network_id: 42,
            networkCheckTimeout: 10000000,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasPrice: 10000000000, // 10 gwei
        },
        prod: {
            provider: () => provider('mainnet'),
            network_id: 1,
            networkCheckTimeout: 10000000,
            confirmations: 2,
            timeoutBlocks: 200,
            //skipDryRun: true,
            gasPrice: 100000000000, // 100 gwei (current cost in eth station)
        },
        polygon: {
            provider: () => provider('polygon'),
            network_id: 137,
            networkCheckTimeout: 100000000,
            confirmations: 2,
            timeoutBlocks: 5,
            skipDryRun: true,
            gasPrice: 46000000000, // 40 gwei (current cost in eth station)
        },
        mumbai: {
            provider: () => provider('mumbai'),
            network_id: 80001,
            networkCheckTimeout: 10000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasPrice: 3000000000, // 3 gwei (current cost in eth station)
        },
        amoy: {
            provider: () => provider('amoy'),
            network_id: 80002,
            networkCheckTimeout: 10000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasPrice: 3000000000, // 3 gwei (current cost in eth station)
        },
        baseSepolia: {
            provider: () => provider('baseSepolia'),
            network_id: 84532,
            networkCheckTimeout: 40000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            // gasPrice: 3000000000, // 3 gwei (current cost in eth station)
        },
        base: {
            provider: () => provider('base'),
            network_id: 8453,
            networkCheckTimeout: 40000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            // gasPrice: 3000000000, // 3 gwei (current cost in eth station)
        },
    },


    // Configure your compilers
    compilers: {
        solc: {
            version: "0.6.6",
            settings: {
                evmVersion: "istanbul",
                optimizer: {
                    enabled: true,
                    runs: 999999,
                },
            },
        }
    }
};
