import "./style.scss";
import React, { useState } from "react";
import { caesar } from "../../utils/algorithms/caesar";

const CaesarEnCrypt = () => {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [key, setKey] = useState("");

  function encryptClicked() {
    let crypto = new caesar(key * 1);
    let msg = content1;
    console.log(key, crypto, msg);
    let enMsg = crypto.encrypt(msg);
    setContent2(enMsg);
  }

  function decryptClicked() {
    let crypto = new caesar(key * 1);
    let msg = content2;
    let enMsg = crypto.decrypt(msg);
    setContent1(enMsg);
  }
  return (
    <div className="container_block">
      <h3>Caesar</h3>
      <div
        className="row"
        style={{
          backgroundColor: "rgba(196, 227, 183, 0.9)",
        }}
      >
        <div className="form-group mb-3">
          <label htmlFor="floatingInput" className="label">
            Key:
          </label>
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            style={{ height: "40px" }}
            value={key}
            onChange={(e) => setKey(e.target.value)}
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
            style={{ height: "120px" }}
            value={content1}
            onChange={(e) => setContent1(e.target.value)}
          />
        </div>
        <div
          className="form-group mb-3"
          style={{ justifyContent: "flex-start" }}
        >
          <label htmlFor="floatingInput" className="label"></label>
          <div style={{ flex: "100%" }}>
            <button
              className="form-control btn btn-primary"
              id="floatingInput"
              onClick={encryptClicked}
              style={{ margin: "5px", width: "100px" }}
            >
              Encrypt
            </button>
            <button
              className="form-control btn btn-primary"
              id="floatingInput"
              onClick={decryptClicked}
              style={{ margin: "5px", width: "100px" }}
            >
              Decrypt
            </button>
          </div>
        </div>

        <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
          <label htmlFor="floatingInput" className="label">
            Content:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="floatingInput"
            style={{ height: "120px" }}
            value={content2}
            onChange={(e) => setContent2(e.target.value)}
          />
        </div>

        <div
          className="form-group mb-3"
          style={{ alignItems: "flex-start", opacity: "0" }}
        >
          <label htmlFor="floatingInput" className="label"></label>
          <textarea
            type="hidden"
            disabled
            className="form-control"
            id="floatingInput"
            style={{ height: "10px", padding: "0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaesarEnCrypt;
