import "./style.scss";
import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { tree, setup, draw } from "./lib/sketch";

const PatriciaTree = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");

  const handleAddNode = () => {
    if (state == "") {
      alert("Not content!");
      return;
    }
    tree.addNode(state);
    setState("");
  };
  return (
    <>
      <div className="container_block" style={{ height: "140vh" }}>
        <h3>Patricia Tree</h3>
        <div className="row">
          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Content:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "80px" }}
              value={state}
              onChange={(e) => setState(e.target.value)}
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
                // disabled={loading}
                onClick={handleAddNode}
              >
                <span>Add</span>
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
            <div className="form-control">
              <div>
                <Sketch setup={setup} draw={draw} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatriciaTree;
