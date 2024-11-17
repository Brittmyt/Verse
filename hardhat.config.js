require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  networks: {
    amoy: {
      url: "https://evmtestnet.confluxrpc.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 71
    }
  },
  solidity: '0.8.0',
};