const { ethers } = require("hardhat");
// ethers is available in the global scope. This is not necessary
const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    // creates a representation of an ethereum account

    const Token = await ethers.getContractFactory("Token");
    // creates a representation of a ethereum contract

    const hardhatToken = await Token.deploy();
    // deploys Token contract and returns a promise that resolves into a contract
    // This is the object that has a method for each of your smart contract functions

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    // since owner holds the balance of contract, we get their balance

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    // naive test to check totalSupply of contract and its owners balance
  });
});
