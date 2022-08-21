import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Rsa from "../../pages/rsa/Rsa";
import BloomFilter from "../../pages/bloomFilter/BloomFilter";
import Nonce from "../../pages/nonce/Nonce";
import Chain from "../../pages/chain/Chain";
import Hash from "../../pages/hash/Hash";
import CaesarEnCrypt from "../../pages/caesar/Caesar";
import DigitalSignature from "../../pages/digital-signature/DigitalSignature";
import BlockchainComponent from "../../pages/blockchain/BlockChainCpn";
import MerkleTree from "../../pages/merkleTree/MerkleTree";
import PatriciaTree from "../../pages/patriciaTree/PatriciaTree";
import EllipticCurve from "../../pages/elliptic curve/Elliptic-curve";
import DiffieHelman from "../../pages/diffieHelman/DiffieHelman";
const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/hash" element={<Hash />} />
      <Route path="/nonce" element={<Nonce />} />
      <Route path="/chain" element={<Chain />} />
      <Route path="/merkle-tree" element={<MerkleTree />} />
      <Route path="/patricia-tree" element={<PatriciaTree />} />
      <Route path="/bloom-filter" element={<BloomFilter />} />
      <Route path="/caesar" element={<CaesarEnCrypt />} />
      <Route path="/rsa" element={<Rsa />} />
      <Route path="/digital-signature" element={<DigitalSignature />} />
      <Route path="/mint-block" element={<BlockchainComponent />} />
      <Route path="/elliptic-curve" element={<EllipticCurve />} />
      <Route path="/diffie-helman" element={<DiffieHelman />} />
    </Routes>
  );
};

export default RoutesPage;
