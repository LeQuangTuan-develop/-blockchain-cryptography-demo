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
    name: "block",
    href: "/block",
    label: "Block",
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
];

const Header = () => {
  const [pathname, setPathname] = useState("");
  let location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top w-100 d-flex justify-content-between">
        <div className="container-fluid d-flex justify-content-center">
          <Link to="/" style={{ fontSize: "20px" }}>
            Blockchain SkyGik
          </Link>
        </div>
        <div className="container-fluid ">
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
    </div>
  );
};

export default Header;
