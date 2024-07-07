import { Connection, clusterApiUrl, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("ApBXxc8mXd7a2SzDX46KZFQvEY1jC1goo7MfLjXuzBFo");

const balance = await connection.getBalance(address);

const balance_in_sol = balance / LAMPORTS_PER_SOL;

console.log("The balance of this odogwu wallet is: ", balance);
console.log("The balance of the wallet in sol is: ", balance_in_sol);
console.log("Finished");
