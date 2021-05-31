const contract = require('@truffle/contract')

const DollaremonRouter = contract(require('../build/DollaremonRouter.json'))

DollaremonRouter.setProvider(this.web3._provider)

const DEPLOY_ADDRESS = process.env.DEPLOY_ADDRESS || ''
const FACTORY_ADDRESS = process.env.FACTORY_ADDRESS || ''
const WETH_ADDRESS = process.env.WETH_ADDRESS || ''

module.exports = async function(deployer, network, accounts) {
  if (network === 'development') {
    const owner = accounts[0]
    await deployer.deploy(DollaremonRouter, FACTORY_ADDRESS, WETH_ADDRESS, { from: owner })
    console.log(`DollaremonRouter: ${DollaremonRouter.address}`)
  } else {
    await deployer.deploy(DollaremonRouter, FACTORY_ADDRESS, WETH_ADDRESS, {
      from: DEPLOY_ADDRESS
    })
    console.log(`DollaremonRouter: ${DollaremonRouter.address}`)
  }
}
