import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "polygon");

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0x8Ad2D4e45a1F522c73492d1e37b9e24c3ab970d7",
    "nft-drop"
  );

  try {
    await drop.createBatch([
"http://alysia.cloud.us-southeast-1.linodeobjects.com/db/0.json",
"http://alysia.cloud.us-southeast-1.linodeobjects.com/db/1.json",
"http://alysia.cloud.us-southeast-1.linodeobjects.com/db/2.json",
]);
console.log("uploaded all nfts");
} catch (error) {
console.log(error);
}
};

addNFTs();