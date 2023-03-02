import React from "react";
import "./../../util/styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar({ mode, toggleMode }) {
  return (
    <div className={mode ? "dark NavBar" : "NavBar"}>
      <Link to="/">Posts</Link>
      <Link to="/games">Games</Link>
      <Link to="/users">Users</Link>
      <button
        title="Dark mood"
        onClick={toggleMode}
        className={!mode ? "dark" : ""}
      />
    </div>
  );
}

export default NavBar;
