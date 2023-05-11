const ethers = require('ethers');
const hre = require('hardhat');
const { TASK_NODE_CREATE_SERVER } = require('hardhat/builtin-tasks/task-names');

const express = require('express');
const dApp = express();

dApp.use(express.static('./public'));

dApp.listen(3008, async () => {
  console.log('\nInterest rate dApp served at http://127.0.0.1:3008/');

  const jsonRpcServer = await hre.run(TASK_NODE_CREATE_SERVER, {
    provider: hre.network.provider,
    hostname: '127.0.0.1',
    port: 8545
  });

  await jsonRpcServer.listen();

  console.log('\nEthereum Mainnet fork node running at http://127.0.0.1:8545/\n');

  console.log('Seeding my development account...\n');

  console.log('Seeding with WETH...');
  await seedLocalDevAccount('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A', '5000000000000000000');

  console.log('Seeding with WBTC...');
  await seedLocalDevAccount('0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', '0xccF4429DB6322D5C611ee964527D42E5d685DD6a', '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A', 5e8);

  console.log('Seeding with USDC...');
  await seedLocalDevAccount('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0x39AA39c021dfbaE8faC545936693aC917d5E7563', '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A', 5000e6);

  console.log('\nReady!\n');
});

async function seedLocalDevAccount(asset, src, dst, amt) {
  await hre.network.provider.request({
    method: 'hardhat_impersonateAccount',
    params: [ src ],
  });

  const erc20Abi = [ 'function transfer(address, uint)' ];
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
  const signer = provider.getSigner(src);
  const token = new ethers.Contract(asset, erc20Abi, signer);

  const tx = await token.transfer(dst, amt);
  const receipt = await tx.wait(1);
}
