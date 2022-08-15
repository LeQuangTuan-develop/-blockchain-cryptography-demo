import "./style.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Rsa from "../../pages/rsa/Rsa";
import Nonce from "../../pages/nonce/Nonce";
import Chain from "../../pages/chain/Chain";
import Hash from "../../pages/hash/Hash";
import Home from "../../pages/home/Home";
import CaesarEnCrypt from "../../pages/caesar/Caesar";
import DigitalSignature from "../../pages/digital-signature/DigitalSignature";
import BlockchainComponent from "../../pages/blockchain/BlockChainCpn";
import BloomFilter from "../../pages/bloomFilter/BloomFilter";
import MerkleTree from "../../pages/merkleTree/MerkleTree";
const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hash" element={<Hash />} />
        <Route path="/nonce" element={<Nonce />} />
        <Route path="/chain" element={<Chain />} />
        <Route path="/merkle-tree" element={<MerkleTree />} />
        <Route path="/caesar" element={<CaesarEnCrypt />} />
        <Route path="/rsa" element={<Rsa />} />
        <Route path="/digital-signature" element={<DigitalSignature />} />
        <Route path="/mint-block" element={<BlockchainComponent />} />
        <Route path="/bloom-filter" element={<BloomFilter />} />
      </Routes>
    </div>
  );
};

export default Main;
