import "./style.scss";
import React, { useState } from "react";
import { RSA } from "../../utils/algorithms/rsa";

const RSAEnCrypt = () => {
  const [p, setP] = useState("");
  const [q, setQ] = useState("");
  const [originRsaMsg, setOriginRsaMsg] = useState("");
  const [encRsaMsg, setEncRsaMsg] = useState("");
  const [keyInfo, setKeyInfo] = useState({
    publicKey: "",
    privateKey: "",
  });
  function computeKeysClicked() {
    var rsa = new RSA(p, q);
    rsa.computeKeys();

    setKeyInfo({ publicKey: rsa.pk, privateKey: rsa.sk });
  }

  function encryptRSAClicked() {
    var rsa = new RSA(p, q);
    rsa.computeKeys();

    let msgEncrypt = rsa.encrypt(originRsaMsg);
    setEncRsaMsg(msgEncrypt);
  }

  function decryptRSAClicked() {
    var rsa = new RSA(p, q);
    rsa.computeKeys();

    let msgDecrypt = rsa.decrypt(encRsaMsg);
    setOriginRsaMsg(msgDecrypt);
  }

  return (
    <>
      <div className="container_rsa">
        <h3>RSA</h3>
        <div
          className="row"
          style={{
            backgroundColor: "rgba(196, 227, 183, 0.9)",
          }}
        >
          <div className="form-group mb-3">
            <label htmlFor="floatingInput" className="label">
              p
            </label>
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              style={{ height: "40px" }}
              value={p}
              onChange={(e) => setP(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="floatingInput" className="label">
              q
            </label>
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              style={{ height: "40px" }}
              value={q}
              onChange={(e) => setQ(e.target.value)}
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
                onClick={computeKeysClicked}
                style={{ margin: "5px", width: "150px" }}
              >
                Compute Keys
              </button>
            </div>
          </div>

          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Key Information
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "80px" }}
              defaultValue={
                keyInfo.publicKey != ""
                  ? "Public Key: " +
                    keyInfo.publicKey +
                    "\r" +
                    "Private Key: " +
                    keyInfo.privateKey
                  : ""
              }
            />
          </div>

          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Original Message
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "80px" }}
              value={originRsaMsg}
              onChange={(e) => setOriginRsaMsg(e.target.value)}
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
                onClick={encryptRSAClicked}
                style={{ margin: "5px", width: "100px" }}
              >
                Encrypt
              </button>
              <button
                className="form-control btn btn-primary"
                id="floatingInput"
                onClick={decryptRSAClicked}
                style={{ margin: "5px", width: "100px" }}
              >
                Decrypt
              </button>
            </div>
          </div>
          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Encrypted Message
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "80px" }}
              value={encRsaMsg}
              onChange={(e) => setEncRsaMsg(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RSAEnCrypt;
