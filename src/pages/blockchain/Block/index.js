import React from "react";
import BlockchainBlock from "./BlockchainBlock";

export default function index({
  type,
  nonceChange,
  dataChange,
  blockchain,
  chain,
  setChain,
  block,
}) {
  return (
    <>
      {type === "blockchain" && (
        <BlockchainBlock
          genesisBlock={block.index === 0}
          nonceChange={nonceChange}
          dataChange={dataChange}
          blockchain={blockchain}
          chain={chain}
          setChain={setChain}
          block={block}
        />
      )}
    </>
  );
}
