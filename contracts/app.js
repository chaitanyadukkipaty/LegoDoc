const Web3 = require('web3')
const {abiArray} = require('./abi')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contractAddress = '0x44ea9888c65e884010ed96bc0828343220d85a59'
const contract = web3.eth.contract(abiArray).at(contractAddress);
web3.eth.defaultAccount = web3.eth.coinbase;
//  console.log(contract.balanceOf('0x0b8a9fa90027f293daf51cab2504a5cdd0f1931a'))
//  contract.start_campain('0x0b8a9fa90027f293daf51cab2504a5cdd0f1931a', 2000)
//  console.log(contract.balanceOf('0x0b8a9fa90027f293daf51cab2504a5cdd0f1931a'))
//  //console.log(contract.setAccount('0x871a5599e7a45bc0775dfbd46f0de956e1f5c8f0'))

  var val= (contract.balanceOf('0x31454151bf428f6863f70516f07cecc98e96085e'))
    console.log(val.c[0])
module.exports = {contract}