mkdir startupdev-eth

yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios

npx hardhat

npx hardhat compile

npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
