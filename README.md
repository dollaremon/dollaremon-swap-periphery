# dollaremon-swap-periphery

## Binance Smart Chain Mainnet (56)

- WBNB(mainnet) : [0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c](https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c)
- DollaremonRouter : [0xa871F514C70dC3399aB9605258eFF5c78d5a95Ae](https://bscscan.com/address/0xa871F514C70dC3399aB9605258eFF5c78d5a95Ae)

## Binance Smart Chain Testnet (97)

- WBNB(testnet) : [0xae13d989dac2f0debff460ac112a837c89baa7cd](https://testnet.bscscan.com/token/0xae13d989dac2f0debff460ac112a837c89baa7cd)
- DollaremonRouter : [0xBC7915Fd79C9344E8988b9409AcFC75eC93c6eE4](https://testnet.bscscan.com/address/0xBC7915Fd79C9344E8988b9409AcFC75eC93c6eE4)

## build

```bash
$ nvm use
$ npm ci --ignore-scripts
$ npm run compile
```

### DollaremonRouter

```bash
$ export FACTORY_ADDRESS=""
$ export WETH_ADDRESS=""
$ npx truffle migrate --network bsctest
$ npx truffle migrate --network bscmain
```

## remix-ide

```bash
$ npm run flatten
```
