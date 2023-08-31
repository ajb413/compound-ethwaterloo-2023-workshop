# Compound III Developer Workshop - ETHGlobal Waterloo 2023 Hackathon

Example app that uses Compound III for supplying and borrowing.

## Video Workshop

This workshop video walks through building the app. The code from the video is in this repository.

https://youtu.be/OjYe_5sVcTM

## Install

Install Node.js at https://nodejs.org/

```
git clone https://github.com/ajb413/compound-ethwaterloo-2023-workshop.git
cd compound-ethwaterloo-2023-workshop/
npm install
```

## Run

Set your Metamask to Localhost network. Select your first developer mnemonic account. Navigate to http://127.0.0.1:3008/ in a web browser. The dApp files are in the `public/` folder.

```bash
## Environment variables referenced in the Hardhat config

MAINNET_PROVIDER_URL="" \ # Free at alchemy.com
DEV_ETH_MNEMONIC="" \ # Your development-only Ethereum mnemonic
npm start
```
