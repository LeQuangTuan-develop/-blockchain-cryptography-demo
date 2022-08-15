import React, { useState } from "react";
import { Treant } from "./tree-viz/Treant";
import "./style.scss";
const MerkleTree = () => {
  const [tree, setTree] = useState({
    content: "",
    size: "",
  });
  const [loading, setLoading] = useState(false);
  function initConstructTree() {
    var data = tree.content;
    var chunks = tree.size;
    var nodeList = convertToNodeList(getChunksFromData(data, chunks));
    var nodeTreeStructure = constructTree(nodeList)[0].toString();
    var chart_config = {
      chart: {
        container: "#merkle-tree",
        connectors: {
          type: "step",
          style: {
            "stroke-width": 2,
          },
        },
      },
      nodeStructure: nodeTreeStructure,
    };
    new Treant(chart_config);
  }

  function getChunksFromData(data, chunkSize) {
    var data = data.split("");
    return _.chunk(data, Math.floor(data.length / chunkSize) + 1).map(function (
      splitData
    ) {
      return splitData.join("");
    });
  }

  return (
    <>
      <div className="container_block">
        <h3>Merkle Tree</h3>
        <div className="row">
          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Content:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "150px" }}
              value={tree.content}
              onChange={(e) => setTree({ ...tree, content: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="floatingInput" className="label">
              Content:
            </label>
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              style={{ height: "40px" }}
              value={tree.size}
              onChange={(e) => setTree({ ...tree, size: e.target.value })}
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
                style={{ width: "170px" }}
                disabled={loading}
                // onClick={initConstructTree}
              >
                <span>Construct Tree</span>
                {loading ? (
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Tree Construct:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "350px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MerkleTree;
