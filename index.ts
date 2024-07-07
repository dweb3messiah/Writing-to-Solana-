import { Keypair } from "@solana/web3.js";

const public_and_private_keys = Keypair.generate();

console.log("The public key is: ", public_and_private_keys.publicKey.toBase58());

console.log("The private key is: ", public_and_private_keys.secretKey);

console.log("Keypair generated");


