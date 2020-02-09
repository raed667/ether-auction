import Web3 from "web3";
//overrides metamask v0.2 for our v 1.0
let web3 = {};
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}

export default web3;
