module.exports = {
  dev: {
    FACTORY_ADDRESS: '', // IXS FactoryV2 deployment address
    TEST: true, // test LP creation
    WETH_ADDRESS: null // this will be deployed automatically when null
  },
  stage: {
    FACTORY_ADDRESS: '0x4983b160a8E0De9Cf6a055bd8750847DE3E14eE6', // IXS FactoryV2 deployment address
    TEST: true, // test LP creation
    /**
     * DO NOT CHANGE UNLESS YOU KNOW WHAT YOU DO!
     */
    WETH_ADDRESS: '0xd0a1e359811322d97991e03f863a0c30c2cf029c' // WETH deployment address (kovan)
    // for WETH9 known implementations consult: sdk-core/src/entities/weth9.ts
    // should be the same as: subgraph/src/mappings/pricing.ts (WETH_ADDRESS)
  },
  prod: {
    FACTORY_ADDRESS: '', // IXS FactoryV2 deployment address
    TEST: false, // test LP creation
    /**
     * DO NOT CHANGE UNLESS YOU KNOW WHAT YOU DO!
     */
    WETH_ADDRESS: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' // WETH deployment address (mainnet)
    // for WETH9 known implementations consult: sdk-core/src/entities/weth9.ts
    // should be the same as: subgraph/src/mappings/pricing.ts (WETH_ADDRESS)
  },
  polygon: {
    // FACTORY_ADDRESS:  '0xc2D0e0bc81494adB71Ce9Aa350cC875DaE12D81D', // IXS FactoryV2 deployment address
    FACTORY_ADDRESS: '0x6b6Bf0d95b2Bb39e225968E831Ec700337763846', // IXS FactoryV2 deployment address
    TEST: true, // test LP creation
    /**
     * DO NOT CHANGE UNLESS YOU KNOW WHAT YOU DO!
     */
    WETH_ADDRESS: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270' // WMATIC deployment address (mainnet)
    // for WETH9 known implementations consult: sdk-core/src/entities/weth9.ts
    // should be the same as: subgraph/src/mappings/pricing.ts (WETH_ADDRESS)
  },
  mumbai: {
    FACTORY_ADDRESS: '0xf8e10dc0bef764e0889f539b58fbda00f7d9a2fd', // IXS FactoryV2 deployment address
    TEST: true, // test LP creation
    /**
     * DO NOT CHANGE UNLESS YOU KNOW WHAT YOU DO!
     */
    WETH_ADDRESS: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889' // WMATIC deployment address (mainnet)
    // for WETH9 known implementations consult: sdk-core/src/entities/weth9.ts
    // should be the same as: subgraph/src/mappings/pricing.ts (WETH_ADDRESS)
  },
  amoy: {
    FACTORY_ADDRESS: '0xA9f8EB060f36ECa31a05C3920A78883f7F650312', // IXS FactoryV2 deployment address
    TEST: true, // test LP creation
    /**
     * DO NOT CHANGE UNLESS YOU KNOW WHAT YOU DO!
     */
    WETH_ADDRESS: '0x0ae690AAD8663aaB12a671A6A0d74242332de85f' // WMATIC deployment address (mainnet)
    // for WETH9 known implementations consult: sdk-core/src/entities/weth9.ts
    // should be the same as: subgraph/src/mappings/pricing.ts (WETH_ADDRESS)
  },
  baseSepolia: {
    FACTORY_ADDRESS: '0x9aA5f0Fab0D7F13ff528a0d637DE343cf23A0218', // IXS FactoryV2 deployment address
    TEST: true, // test LP creation
    /**
     * DO NOT CHANGE UNLESS YOU KNOW WHAT YOU DO!
     */
    WETH_ADDRESS: '0x4a2b0767ACEE85C7825F09F48A9347285F58a5C2' // WMATIC deployment address (mainnet)
  },
  base: {
    FACTORY_ADDRESS: '0x2eE28d1Bbc2EcB1fFDB83E8055d585E9F0fb757f', // IXS FactoryV2 deployment address
    TEST: true, // test LP creation
    /**
     * DO NOT CHANGE UNLESS YOU KNOW WHAT YOU DO!
     */
    WETH_ADDRESS: '0x4200000000000000000000000000000000000006' // WMATIC deployment address (mainnet)
  },
  RedBellyTestnet: {
    FACTORY_ADDRESS: '0xFe4ed79689cB4aDF76A419C1f027A7671c37c179',
    TEST: true, // test LP creation
    WETH_ADDRESS: '0x4110775464e976A23F8A1Cc351219d7C40D27396' // wRBNT
  },
  redBellyMainnet: {
    FACTORY_ADDRESS: '0x80747745DcDdDb5a8Eb3fb2fBfAb21fE7990aF15',
    TEST: true, // test LP creation
    WETH_ADDRESS: '0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076' // wRBNT
  }
}
