import Web3 from "web3";
import { contractABI } from "./abi";
let web3 = new Web3(
  "https://cool-stylish-mansion.discover.quiknode.pro/e0d68260958a4a30bdbcc62dc544e1d3210891ea/"
);
const contractAddress = "0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6";
export const contract = new web3.eth.Contract(contractABI, contractAddress);
