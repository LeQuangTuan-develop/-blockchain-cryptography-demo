import React, { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RoutesPage from "../routes";
import "./style.scss";
const Main = () => {
  const listTitle = {
    hash: "Hash",
    nonce: "Nonce",
    chain: "Chain",
    bloomfilter: "Bloom Filter",
    caesar: "Caesar",
    rsa: "Rsa",
    digitalsignature: "Digital Signature",
    diffiehelman: "Diffie Helman",
    patriciatree: "Patricia Tree",
    merkletree: "Merkle Tree",
    ellipticcurve: "Elliptic Curve",
  };
  const [title, setTitle] = useState("");
  let location = useLocation();

  useLayoutEffect(() => {
    let path = location.pathname.replace(/[^\w\s]/gi, "");
    setTitle(listTitle[path]);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <main className="main">
        <div className="group-side">
          <div className="left-side">
            <Link to="/hash">Hash</Link>
            <Link to="/nonce">Nonce</Link>
            <Link to="/chain">Chain</Link>
            <Link to="/bloom-filter">Bloom Filter</Link>
          </div>
          <div className="wrapper-view">
            <h3 style={{ position: "absolute", top: "-40px", color: "white" }}>
              {title}
            </h3>
            <div className="view-page">
              <RoutesPage />
            </div>
          </div>
          <div className="right-side">
            <Link to="/caesar">Caesar</Link>
            <Link to="/rsa">Rsa</Link>
            <Link to="/digital-signature">Digital Signature</Link>
            <Link to="/diffie-helman">Diffie Helman</Link>
          </div>
        </div>
        <div className="bottom-side">
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
