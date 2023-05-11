const providerUrl = process.env.MAINNET_PROVIDER_URL;
const devMnemonic = process.env.DEV_ETH_MNEMONIC;

if (!providerUrl) {
  console.error('Missing JSON RPC provider URL as environment variable `MAINNET_PROVIDER_URL`');
  process.exit(1);
}

module.exports = {
  networks: {
    hardhat: {
      chainId: 1,
      forking: { url: providerUrl },
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      loggingEnabled: false,
      accounts: { mnemonic: devMnemonic }
    },
  }
};
