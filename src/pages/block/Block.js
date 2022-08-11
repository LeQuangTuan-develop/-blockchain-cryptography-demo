import "./style.scss";
import React from "react";
const Block = () => {
  function nonceButtonClicked() {
    let id = "";
    let hashContent = "";
    let nonce = 0;
    do {
      nonce++;
      let content = id + hashContent + nonce;
      let hashValue = SHA256(content);
      if (hashValue.substring(0, 4) == "0000") {
        document.getElementById("nonce").value = nonce;
        document.getElementById("hash2").value = hashValue;
        document.getElementById("blockcontent").innerText =
          "Hashed content: " + content;
        break;
      }
    } while (nonce < 1000000);

    if (nonce >= 1000000) alert("Cant find nonce value within 1 million steps");
    event.preventDefault();
  }

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
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label"></label>
          <button
            className="form-control btn btn-primary"
            style={{ width: "150px" }}
          >
            Calculate Nonce
          </button>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Nonce:
          </label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
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
          />
        </div>
      </div>
    </div>
  );
};

export default Block;
