import "./style.scss";
import React, { useState } from "react";
import Sketch from "react-p5";
import { setup, draw } from "./lib/sketch";

const PatriciaTree = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    content: "",
    node: "",
  });

  return (
    <>
      <div className="container_block" style={{ height: "140vh" }}>
        <h3>Patricia Tree</h3>
        <div className="row">
          <div>
            <Sketch setup={setup} draw={draw} />
          </div>
          {/* <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Content:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "80px" }}
              value={state.content}
              onChange={(e) => setState({ ...tree, content: e.target.value })}
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
                onClick={() => addTreeNode(state.content, tree)}
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
              Node:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "80px" }}
              value={state.node}
              onChange={(e) => setState({ ...state, node: e.target.value })}
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
                onClick={() => verify(state.node, tree)}
              >
                <span>verify</span>
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
              <div><Sketch setup={setup} draw={draw} /></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PatriciaTree;
