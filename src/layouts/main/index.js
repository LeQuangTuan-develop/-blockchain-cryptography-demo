import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoutesPage from "../routes";
import "./style.scss";
const Main = () => {
  const [title, setTitle] = useState("Title2");
  return (
    <>
      <main className="main">
        <div className="group-side">
          <div className="left-side">
            <Link to="/hash">Hash</Link>
            <Link to="/nonce">Nonce</Link>
            <Link to="/chain">Chain</Link>
          </div>
          <div className="wrapper-view">
            <h3 style={{ position: "absolute", top: "-40px" }}>{title}</h3>
            <div className="view-page">
              <RoutesPage />
            </div>
          </div>
          <div className="right-side">
            <Link to="/caesar">Caesar</Link>
            <Link to="/rsa">Rsa</Link>
            <Link to="/digital-signature">Digital Signature</Link>
            {/* <Link to="/mint-block">Blockchain</Link> */}
          </div>
        </div>
        <div className="bottom-side">
          <Link to="/bloom-filter">BloomFilter</Link>
          <Link to="/patricia-tree">PatriciaTree</Link>
          <Link to="/merkle-tree">MerkleTree</Link>
          <Link to="/elliptic-curve">Elliptic Curve</Link>
        </div>
      </main>
      ;
    </>
  );
};

export default Main;
