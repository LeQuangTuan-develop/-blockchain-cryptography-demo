import React, { useEffect, useState } from "react";
import { sha256 } from "../../utils/algorithms/hash";
import "./style.scss";

const Hash = () => {
  const [block, setBlock] = useState({
    data: "",
    hashValue:
      "0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a",
  });

  // handle Functional ----------------------------------------
  function hashButtonClicked() {
    setBlock({ data: block.data, hashValue: sha256(block.data) });
  }

  // useEffect -------------------------------------------------
  useEffect(() => {
    hashButtonClicked();
  }, [block.data]);

  // console.table(block);
  return (
    <div className="container_block">
      <h3>SHA256 Hash</h3>
      <div
        className="row"
        style={{
          backgroundColor: "rgba(196, 227, 183, 0.9)",
        }}
      >
        <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
          <label htmlFor="floatingInput" className="label">
            Content:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "150px" }}
            value={block.data}
            onChange={(e) => setBlock({ ...block, data: e.target.value })}
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
      </div>
    </div>
  );
};
export default Hash;
