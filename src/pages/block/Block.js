import "./style.scss";
import React from "react";
const Block = () => {
  return (
    <div className="container-block">
      <h3>Block</h3>
      <div className="row">
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Block ID:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Content:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Block;
