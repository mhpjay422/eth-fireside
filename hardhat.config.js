require("@nomiclabs/hardhat-waffle");
const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
