// https://eth-sepolia.g.alchemy.com/v2/bEDoFEpS6TKgl9063IiM7Ld8n3ZAkbAW
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/bEDoFEpS6TKgl9063IiM7Ld8n3ZAkbAW',
      accounts: ['0806c93d16f9ccd6f0fd45e0dc32e18f749af28988c4e1a6a7236921d3fb52f4'],
    },
  },
};