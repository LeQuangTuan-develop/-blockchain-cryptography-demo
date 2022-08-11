import "./style.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Rsa from "../../pages/rsa/Rsa";
import Block from "../../pages/block/Block";
import Chain from "../../pages/chain/Chain";
import Hash from "../../pages/hash/Hash";
import Home from "../../pages/home/Home";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-12">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/hash" element={<Hash />} />
                <Route path="/block" element={<Block />} />
                <Route path="/chain" element={<Chain />} />
                <Route path="/rsa" element={<Rsa />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
