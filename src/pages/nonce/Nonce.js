import React, { useEffect, useState } from "react";
import { sha256 } from "../../utils/algorithms/hash";
import "./style.scss";

const Nonce = () => {
  const [block, setBlock] = useState({
    id: 1,
    hashContent: "",
    nonce: 72608,
    hashValue:
      "0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a",
  });
  const [blockCheck, setBlockCheck] = useState({});
  const [colorBlock, setColorBlock] = useState(true);

  // handle Functional ----------------------------------------
  function nonceButtonClicked() {
    let nonce = 0;
    do {
      nonce++;
      let content = block.id + block.hashContent + nonce;
      let hashValue = sha256(content);
      if (hashValue.substring(0, 4) == "0000") {
        setBlock({
          ...block,
          nonce: nonce,
          hashValue: hashValue,
        });
        setBlockCheck({
          ...block,
          nonce: nonce,
          hashValue: hashValue,
        });
        setColorBlock(true);
        break;
      }
    } while (nonce < 1000000);

    if (nonce >= 1000000) alert("Cant find nonce value within 1 million steps");
  }

  // useEffect -------------------------------------------------
  useEffect(() => {
    if (
      block.id != blockCheck.id ||
      block.hashContent != blockCheck.hashContent ||
      block.nonce != blockCheck.nonce
    ) {
      setColorBlock(false);
    } else {
      setColorBlock(true);
    }
  }, [block.id, block.hashContent, block.nonce]);

  useEffect(() => {
    setColorBlock(true);
  }, []);

  // console.table(block);
  return (
    <div className="container_block">
      {/* <h3>Nonce</h3> */}
      <div
        className="row"
        style={{
          backgroundColor: colorBlock
            ? "transparent"
            : "rgba(250, 220, 220, 0.9)",
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
            defaultValue={block.id}
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
            style={{ height: "150px" }}
            defaultValue={block.hashContent}
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
            Hash:
          </label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
            value={block.hashValue}
            onChange={(e) => setBlock({ ...block, hashValue: e.target.value })}
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
export default Nonce;
