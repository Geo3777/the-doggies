import Web3 from "web3";
import { contractABI } from "./abi";
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
const contractAddress = "0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6";
export const contract = new web3.eth.Contract(contractABI, contractAddress);
