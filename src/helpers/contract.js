export const address = '0x3AB9C3ae6F685542Ba775411c99036b55f4E82E0'

// ABI from contract
export const abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_data',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_img',
        type: 'string',
      },
    ],
    name: 'addArticle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_article',
        type: 'uint256',
      },
    ],
    name: 'addBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_article',
        type: 'uint256',
      },
    ],
    name: 'getMoneyBack',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'img',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'data',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct Article',
        name: 'newArticle',
        type: 'tuple',
      },
    ],
    name: 'articleAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'userRefund',
    type: 'event',
  },
  {
    inputs: [],
    name: 'articleCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'articles',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'img',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'data',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'end',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'bids',
    outputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'articleId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_article',
        type: 'uint256',
      },
    ],
    name: 'getCurrentBid',
    outputs: [
      {
        internalType: 'uint256',
        name: 'bidValue_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_article',
        type: 'uint256',
      },
    ],
    name: 'getWinner',
    outputs: [
      {
        internalType: 'address',
        name: 'winner_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'standingBid_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
