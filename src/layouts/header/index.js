import "./style.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const HEADERS = [
  {
    name: "hash",
    href: "/hash",
    label: "Hash",
  },
  {
    name: "nonce",
    href: "/nonce",
    label: "Nonce",
  },
  {
    name: "chain",
    href: "/chain",
    label: "Chain",
  },
  {
    name: "merkle-tree",
    href: "/merkle-tree",
    label: "Merkle tree",
  },
  {
    name: "patricia-tree",
    href: "/patricia-tree",
    label: "Patricia tree",
  },
  {
    name: "caesar",
    href: "/caesar",
    label: "Caesar",
  },
  {
    name: "rsa",
    href: "/rsa",
    label: "RSA",
  },
  {
    name: "digital-signature",
    href: "/digital-signature",
    label: "Digital Signature",
  },
];

const Header = () => {
  const [pathname, setPathname] = useState("");
  let location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="brand" href="/">
            SkyG Blockchain
          </a>
        </div>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse"
          id="navbarCollapse"
          style={{ height: "fit-content" }}
        >
          <ul className="navbar-nav navbar-right me-auto mb-2 mb-lg-0">
            {HEADERS.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.href}
                  className={
                    item.href === pathname ? "nav-link active" : "nav-link"
                  }
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
