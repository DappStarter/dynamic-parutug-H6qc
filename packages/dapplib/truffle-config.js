require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note screen comic install photo flush giant'; 
let testAccounts = [
"0xd861de2d9ffe3af0993ae334fa7c1ffd9d614c7ec7420982e67ead8940739a40",
"0x77bb98c6ea596de158571312d0546e330a4df8d5907dd2bd131ed7d055a2e116",
"0x0ef82acca4815302a6443bed9528b7a4fe2db79a8e50fab7c6c255c35bc66c16",
"0xc62af7278ac0549c9fe039fa556d91ef940ae77ff3b75bef3b90db7c5617f350",
"0x43a1808f2060f481c6290e2cf5307b6c35bc331d1523644de54a8bbf7c13973c",
"0xd27da03b033bffaa9e1c9b6c9875ad342bbbfd0922c761998a1712f10c563da3",
"0xbaf51948418d3c85de8551596beda06266db741d23d83d5e15d09f2164e64e65",
"0x7cbeca65a020a9320b8f401b2eccf685359d29fe9a1bc77ec5860f2b6af84a25",
"0x048918895840a7bcd9101cfbda0e0a58a4c9eda2e06e56284fa9bd2e306669cb",
"0x0d981767ba3b5bd5767f5d1a1156e38a8641ad4cdef53ff440dc6a58b692f90e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

