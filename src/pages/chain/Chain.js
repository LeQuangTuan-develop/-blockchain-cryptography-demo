import { compareObjectEqual } from "../../utils/common/compareObject";
import React, { useEffect, useState } from "react";
import { sha256 } from "../../utils/algorithms/hash";
import "./style.scss";
const Chain = () => {
  const [chain, setChain] = useState([
    {
      id: 1,
      hashContent: "",
      nonce: 11316,
      previousHash:
        "0000000000000000000000000000000000000000000000000000000000000000",
      hashValue:
        "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
      verify: true,
    },
    {
      id: 2,
      hashContent: "",
      nonce: 35230,
      previousHash:
        "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
      hashValue:
        "000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19",
      verify: true,
    },
    {
      id: 3,
      hashContent: "",
      nonce: 12937,
      previousHash:
        "000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19",
      hashValue:
        "0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf",
      verify: true,
    },
    {
      id: 4,
      hashContent: "",
      nonce: 12937,
      previousHash:
        "0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf",
      hashValue:
        "0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83",
      verify: true,
    },
    {
      id: 5,
      hashContent: "",
      nonce: 12937,
      previousHash:
        "0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83",
      hashValue:
        "0000e4b9052fd8aae92a8afda42e2ea0f17972ea67cead67352e74dd6f7d217c",
      verify: true,
    },
  ]);

  return (
    <>
      <div className="container_chain">
        <div className="horizontal-scroll-wrapper squares">
          {chain.map((item, index) => (
            <Block
              key={index}
              data={item}
              chain={chain}
              setChain={setChain}
              indexBlock={index}
              verify={item.verify}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Block = ({ data, chain, setChain, indexBlock, verify }) => {
  const [block, setBlock] = useState(data);
  const [check, setCheck] = useState(false);

  // handle Functional ----------------------------------------
  function nonceButtonClicked() {
    let nonce = 0;
    do {
      nonce++;
      let content = block.id + block.hashContent + nonce + block.previousHash;
      let hashValue = sha256(content);
      if (hashValue.substring(0, 4) == "0000") {
        setBlock({
          ...block,
          nonce: nonce,
          hashValue: hashValue,
          previousHash:
            indexBlock == 0
              ? chain[0].previousHash
              : chain[indexBlock - 1].hashValue,
          verify: true,
        });
        const newState = chain.map((obj, index) => {
          if (index == indexBlock) {
            return {
              ...block,
              nonce: nonce,
              previousHash:
                indexBlock == 0
                  ? chain[0].previousHash
                  : chain[indexBlock - 1].hashValue,
              hashValue: hashValue,
              verify: true,
            };
          }
          if (index > indexBlock) {
            return {
              ...obj,
              verify: false,
            };
          }

          return obj;
        });

        setChain(newState);
        setCheck(false);
        break;
      }
    } while (nonce < 1000000);

    if (nonce >= 1000000) alert("Cant find nonce value within 1 million steps");
  }

  // useEffect -------------------------------------------------

  function validateBlock() {
    let data = chain.map((item, index) => {
      const obj = Object.assign({}, item);
      if (
        compareObjectEqual(
          { ...block, verify: true },
          { ...chain[indexBlock], verify: true }
        )
      ) {
        obj["verify"] = true;
      } else {
        if (index >= indexBlock) {
          obj["verify"] = false;
        } else {
          obj["verify"] = item.verify;
        }
      }
      return obj;
    });
    setChain(data);
  }

  useEffect(() => {
    check && validateBlock(indexBlock);
    setCheck(true);
  }, [block, indexBlock]);

  return (
    <div className="block">
      {/* {indexBlock === 0 ? (
        <h3>BlockChain</h3>
      ) : (
        <h3 style={{ marginTop: "40px" }}></h3>
      )} */}
      <div
        className="row"
        style={{
          backgroundColor: verify ? "black" : "#d6220b",
        }}
      >
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Block ID:
          </label>
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
            value={block.id}
            onChange={(e) => setBlock({ ...block, id: e.target.value })}
          />
        </div>

        <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
          <label htmlFor="floatingInput" className="label">
            Content:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "100px" }}
            value={block.hashContent}
            onChange={(e) =>
              setBlock({ ...block, hashContent: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Nonce:
          </label>
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
            value={block.nonce}
            onChange={(e) => setBlock({ ...block, nonce: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Previous Hash:
          </label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
            value={block.previousHash}
            onChange={() => setBlock(...block)}
            disabled
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Hash:
          </label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
            value={block.hashValue}
            onChange={() => setBlock(...block)}
            disabled
          />
        </div>

        <div
          className="form-group mb-3"
          style={{ justifyContent: "flex-start" }}
        >
          <label htmlFor="floatingInput" className="label"></label>
          <div style={{ flex: "99%" }}>
            <button
              className="form-control btn btn-primary"
              id="floatingInput"
              onClick={nonceButtonClicked}
              style={{ width: "150px" }}
            >
              Calculate Nonce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chain;
