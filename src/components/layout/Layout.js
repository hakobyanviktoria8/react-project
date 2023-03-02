import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./../../util/styles/Layout.css";

function Layout({ children }) {
  const [mode, setMode] = useState(false);

  return (
    <>
      <NavBar mode={mode} toggleMode={() => setMode(!mode)} />
      <div className={mode ? "dark LayoutChild" : "LayoutChild"}>
        {children}
      </div>
      <Footer mode={mode} />
    </>
  );
}

export default Layout;
