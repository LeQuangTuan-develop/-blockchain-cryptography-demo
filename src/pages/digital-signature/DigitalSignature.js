import "./style.scss";
import React, { useState } from "react";
import { RSA } from "../../utils/algorithms/rsa";

const DigitalSignature = () => {
  const [p, setP] = useState("");
  const [q, setQ] = useState("");
  const [originRsaMsg, setOriginRsaMsg] = useState("");
  const [signature, setSignature] = useState("");
  const [keyInfo, setKeyInfo] = useState({
    publicKey: "",
    privateKey: "",
  });
  function computeSigKeysClicked() {
    var rsa = new RSA(p, q);
    rsa.computeKeys();

    setKeyInfo({ publicKey: rsa.pk, privateKey: rsa.sk });
  }

  function digitalSignClicked() {
    var rsa = new RSA(p, q);
    rsa.computeKeys();

    let sign = rsa.signature(originRsaMsg);
    setSignature(sign);
  }

  function verifyClicked() {
    var rsa = new RSA(p, q);
    rsa.computeKeys();

    console.log(originRsaMsg, signature);
    if (rsa.verify(originRsaMsg, signature)) alert("valid signature");
    else alert("invalid signature");
  }
  return (
    <>
      <div className="container_block">
        <h3>Digital Signature</h3>
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
                onClick={computeSigKeysClicked}
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
              //   value={originRsaMsg}
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
                onClick={digitalSignClicked}
                style={{ margin: "5px", width: "150px" }}
              >
                Digital Sign
              </button>
              <button
                className="form-control btn btn-primary"
                id="floatingInput"
                onClick={verifyClicked}
                style={{ margin: "5px", width: "150px" }}
              >
                Verify Signature
              </button>
            </div>
          </div>
          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              Digital Signature
            </label>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ height: "80px" }}
              value={signature}
              //   value={signature}
              onChange={(e) => setSignature(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalSignature;
