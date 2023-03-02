import React from "react";
import "./../../util/styles/Footer.css";

function Footer({ mode }) {
  return (
    <div className={mode ? "dark footer" : "footer"}>
      Last updated at 3/2/2023
    </div>
  );
}

export default Footer;
