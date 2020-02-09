import web3 from "./web3";

export const address = "0x9A48d2f6915B00F38BA4dCaa075917BC0C259863";

// ABI from contract
export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_data",
        type: "string"
      },
      {
        internalType: "string",
        name: "_img",
        type: "string"
      }
    ],
    name: "addArticle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_article",
        type: "uint256"
      }
    ],
    name: "addBid",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "articleCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "articles",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "string",
        name: "img",
        type: "string"
      },
      {
        internalType: "string",
        name: "data",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "bids",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "articleId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_article",
        type: "uint256"
      }
    ],
    name: "getWinner",
    outputs: [
      {
        internalType: "address",
        name: "winner_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "standingBid_",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, address);
