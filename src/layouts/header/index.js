import "./style.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const HEADERS = [
  {
    name: "home",
    href: "/home",
    label: "Home",
  },
  {
    name: "our-team",
    href: "/our-team",
    label: "Our Team",
  },
  {
    name: "our-writings",
    href: "/our-writings",
    label: "Our Writings",
  },
];

const Header = () => {
  const [pathname, setPathname] = useState("");
  let location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ft-0">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-header">
            <Link to="/">SkyG Te@m</Link>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg fixed-top ft-50">
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
      <div style={{ height: "170px" }}></div>
    </>
  );
};

export default Header;
