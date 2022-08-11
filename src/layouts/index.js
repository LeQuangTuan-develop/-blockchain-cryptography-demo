import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
