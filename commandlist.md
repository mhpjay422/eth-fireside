mkdir startupdev-eth

yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios

npx hardhat

CLEAR greeter.sol and sample.js

CODE token.sol

npx hardhat compile

CODE sample-test.js

npx hardhat test

npx hardhat node

npx hardhat run scripts/deploy.js --network localhost

npx hardhat run scripts/deploy.js --network mumbai

https://mumbai.polygonscan.com/

https://etherscan.io

https://etherscan.io/token/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b#readContract

Talk about quality of life tools and functionality

npx hardhat console

npm i -g hardhat-shorthand

hardhat-completion install

hh [tab][tab]
