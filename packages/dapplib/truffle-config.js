require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note muscle pulp grace slender olympic subway'; 
let testAccounts = [
"0xe125aa42f3b965c8f79373c49ed0586089a9d5e52a56a720e889ddc56e573279",
"0x8bb4ba07e8cd44eb3eb881a22e72e5c707d8ffc5b271541730063c86db29f535",
"0x4f3ff992a7385941b06ec5db6521f4fff6205b1016508a5cb3b87a55f24065de",
"0xd4b0f8cd64e95c4ce63a06730f0993d8e5784650c35b81320773909a5bcdd4df",
"0x78d022d73e1a1d7b96498ac16e05824d79982dc46cd8591a66a18f051d6064a5",
"0x5c0877d17d11d7301951fbe952ea21b1dc5e7b73087ba6fd81ef195df82e6310",
"0xa6297291d09eeea04b8487af28959e01d8912baffc5f914bc1a5dbf886a10fad",
"0xa5e5ae5aab72808634304c170e67b0ff3312398a2c3a354ca17cbe8fab2640d0",
"0x1a18191745d7d7332a2d8af493d6deb8c2ecedc323227d2f44b34d3f4c9d111d",
"0xf8926fb73d2cdc1b813ae4e15ff3d571b42fa782ec0816893c72ceb023f5c873"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

