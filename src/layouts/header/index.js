import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top w-100 d-flex justify-content-between">
        <div className="container-fluid d-flex justify-content-center col-4">
          <a style={{ fontSize: "20px" }}>Blockchain SkyGik</a>
        </div>
        <div className="container-fluid col-6">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Hash
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Block
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blockchain
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Distributed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tokens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coinbase
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Rsa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cezar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
