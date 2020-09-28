const UniswapV2Router02 = artifacts.require("UniswapV2Router02");
const UniswapV2Router01 = artifacts.require("UniswapV2Router01");
const ERC20 = artifacts.require("ERC20")
const WETH = artifacts.require("WETH9")

const FACTORY_ADDRESS = "0x1DeCeaf137a17aEa7b472fa427E3b0408593FD92"
const WRAPPED_ETH = "0x0BE9e53fd7EDaC9F859882AfdDa116645287C629"

const toBn = (value) => new web3.utils.toBN(value)
const toBnWithDecimals = (x, y = 18) => toBn((toBn(x).mul(toBn(10).pow(toBn(y)))).toString())

module.exports = async (deployer) => {
  // await deployer.deploy(ERC20, toBnWithDecimals(1000))
  // const token1 = await ERC20.at(ERC20.address)
  // console.log(`Token 1 deployed: ${token1.address}`)
  //
  // await deployer.deploy(ERC20, toBnWithDecimals(1000))
  // const token2 = await ERC20.at(ERC20.address)
  // console.log(`Token 2 deployed: ${token2.address}`)
  //
  // await deployer.deploy(WETH)
  // console.log(`WETH deployed: ${WETH.address}`)
  //
  // await deployer.deploy(UniswapV2Router02, FACTORY_ADDRESS, WETH.address);
  //
  // await token1.approve(UniswapV2Router02.address, toBnWithDecimals(1000))
  // await token2.approve(UniswapV2Router02.address, toBnWithDecimals(1000))
  // console.log(`Approved both tokens for Router to spend`

  await deployer.deploy(UniswapV2Router02, FACTORY_ADDRESS, WRAPPED_ETH);

};
