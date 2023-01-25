const hre = require("hardhat");

async function main() 
{
const  Contract = await hre.ethers.getContractFactory("SimpleNFT");
const contract = await Contract.deploy("NFT MarketPlace", "PLACE");
await contract.deployed();

console.log("Contract Address deployed to:", contract.address);
}

main().then(() => process.exit(0)).catch((error) => 
{
console.error(error);
process.exit(1);
} )

