//using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
const ipfsClient = require("ipfs-http-client");

export const IPFS_URL = "https://ipfs.io/ipfs/";

const ipfs = new ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https"
});

//run with local daemon
// const ipfs = new ipfsClient('localhost', '5001', {protocol: 'http'});

export default ipfs;
