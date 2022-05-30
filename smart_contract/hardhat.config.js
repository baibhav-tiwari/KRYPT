// https://eth-rinkeby.alchemyapi.io/v2/IHSe0hLLlgMqudeh3xGWAk_5HYyo8jeM
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/IHSe0hLLlgMqudeh3xGWAk_5HYyo8jeM'
      accounts: ['1d8d5a1474270c28ac52ab228215c489905ee64647c3463a398023d730999b6a']
    }
  }
}