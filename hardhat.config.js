require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/882a51a4e81747b5adf98bae123f8d9d`,
      accounts: ["6be5b7bf2a904765279c878a67ea819d58089626c512265dc6deba3b055f8751"],
    },
  },
};


// 0x766B90f82184f1d3829246eBd9E18F92Ebf753Fc